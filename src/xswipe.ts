import { Content } from "./components/content";
import { Controls } from "./components/controls";
import { Navigation } from "./components/navigation";
import { Title } from "./components/title";
import { Zoom } from "./components/zoom";
import { XSwipeProps } from "./types";
import { dispatchXSwipeEvent } from "./utils/events";

export class XSwipe {
    constructor({
        name,
        wrapper,
        elements,
        opts,
        onPrevClick,
        onNextClick,
        onCloseClick,
    }: XSwipeProps) {
        this.initXSwipe({
            name,
            wrapper,
            elements,
            opts,
            onPrevClick,
            onNextClick,
            onCloseClick,
        });
    }

    initXSwipe({
        name,
        wrapper,
        elements,
        opts,
        onPrevClick,
        onNextClick,
        onCloseClick,
    }: XSwipeProps) {
        let wrapperElementList = document.querySelectorAll(
            wrapper
        ) as NodeListOf<HTMLElement>;

        if (wrapperElementList.length === 0) {
            console.error(`XSwipe: Wrapper element "${wrapper}" not found.`);
            return;
        }

        const variables = {
            name: name ?? "XSwipe",
            zoomLevel: opts?.zoomLevel ?? 0,
            allowZoom: opts?.allowZoom ?? false,
            zoomDoubleTap: opts?.zoomDoubleTap ?? false,
            allowFullscreen: opts?.allowFullscreen ?? false,
            allowDownload: opts?.allowDownload ?? false,
            allowShare: opts?.allowShare ?? false,
            bgColor: opts?.bgColor ?? "rgba(0, 0, 0, 0.9)",
            navigationPosition: opts?.navigationPosition ?? "bottom",

            space: 10,
            padding: 30,
            borderRadius: opts?.borderRadius ?? 10,
            closeColor: opts?.closeColor ?? "red",
            actionsColor: opts?.actionsColor ?? "gray",
            actionsSize: opts?.actionsSize ?? 42,
        };

        wrapperElementList.forEach((wrapperElement) => {
            if (wrapperElement.classList.contains("xswipe-initialized")) {
                return;
            }
            wrapperElement.classList.add("xswipe-initialized");
            let elementsList = wrapperElement.querySelectorAll(
                elements
            ) as NodeListOf<HTMLElement>;
            if (elementsList.length === 0) {
                console.error(`XSwipe: Elements "${elements}" not found.`);
                return;
            }
            elementsList.forEach((element, index) => {
                element.addEventListener("click", (event) => {
                    event.preventDefault();

                    let currentIndex = index;
                    let maxIndex = elementsList.length - 1;
                    let currentZoom = 0;

                    /* Wrapper */
                    let xswipeWrapper = document.createElement("div");
                    xswipeWrapper.classList.add("xswipe-wrapper");
                    xswipeWrapper.style.width = "100%";
                    xswipeWrapper.style.height = "100%";
                    xswipeWrapper.style.overflow = "hidden";
                    xswipeWrapper.style.position = "fixed";
                    xswipeWrapper.style.top = "0";
                    xswipeWrapper.style.left = "0";
                    xswipeWrapper.style.right = "0";
                    xswipeWrapper.style.bottom = "0";
                    xswipeWrapper.style.zIndex = "9999";
                    xswipeWrapper.style.backgroundColor = variables.bgColor;
                    xswipeWrapper.style.display = "flex";
                    xswipeWrapper.style.justifyContent = "center";
                    xswipeWrapper.style.alignItems = "center";
                    xswipeWrapper.style.paddingLeft = variables.padding + "px";
                    xswipeWrapper.style.paddingRight = variables.padding + "px";
                    xswipeWrapper.style.boxSizing = "border-box";
                    if (variables.navigationPosition === "top") {
                        xswipeWrapper.style.paddingBottom =
                            variables.padding + variables.space + "px";
                        xswipeWrapper.style.paddingTop =
                            variables.padding + variables.actionsSize + "px";
                    } else if (variables.navigationPosition === "bottom") {
                        xswipeWrapper.style.paddingTop =
                            variables.padding + variables.space + "px";
                        xswipeWrapper.style.paddingBottom =
                            variables.padding + variables.actionsSize + "px";
                    } else {
                        console.error("XSwipe: Invalid navigation position");
                    }

                    /* Wrapper Container */
                    let xswipeContainer = document.createElement("div");
                    xswipeContainer.classList.add("xswipe-container");
                    xswipeContainer.style.position = "relative";
                    xswipeContainer.style.width = "fit-content";
                    xswipeContainer.style.height = "fit-content";
                    xswipeContainer.style.maxWidth = "100%";
                    xswipeContainer.style.maxHeight = "100%";

                    /* Content Wrapper */
                    let xswipeContentWrapper = document.createElement("div");
                    xswipeContentWrapper.classList.add(
                        "xswipe-content-wrapper"
                    );
                    xswipeContentWrapper.style.width = "fit-content";
                    xswipeContentWrapper.style.height = "fit-content";
                    xswipeContentWrapper.style.maxWidth = "100%";
                    xswipeContentWrapper.style.maxHeight = "100%";
                    xswipeContentWrapper.style.lineHeight = "0";
                    xswipeContentWrapper.style.position = "relative";
                    xswipeContentWrapper.style.cursor = "pointer";
                    xswipeContentWrapper.style.scrollbarWidth = "none";
                    xswipeContentWrapper.style.borderRadius =
                        variables.borderRadius + "px";
                    xswipeContentWrapper.style.maxHeight =
                        "calc(100vh - " +
                        (variables.padding +
                            variables.padding +
                            10 +
                            variables.actionsSize) +
                        "px)";
                    xswipeContentWrapper.style.overflow = "auto";
                    Zoom(xswipeContentWrapper, variables);

                    /* Content */
                    let xswiperContent = Content(
                        element,
                        currentZoom,
                        variables
                    );

                    /* Navigation */
                    let xswipeNavigation = Navigation(
                        variables,
                        element,
                        currentIndex,
                        maxIndex
                    );

                    /* Controls */
                    let xswipeControls = Controls(
                        variables,
                        index,
                        currentIndex,
                        maxIndex
                    );

                    /* Title */
                    let xswipeTitle = Title(element, variables);

                    /* Append Wrappers */

                    xswipeContentWrapper.appendChild(xswiperContent);
                    xswipeContainer.appendChild(xswipeControls.previous);
                    xswipeContainer.appendChild(xswipeControls.next);
                    xswipeContainer.appendChild(xswipeContentWrapper);
                    xswipeWrapper.appendChild(xswipeContainer);
                    xswipeWrapper.appendChild(xswipeNavigation.actions);
                    if (xswipeTitle) {
                        xswipeWrapper.appendChild(xswipeTitle);
                    }

                    document.body.appendChild(xswipeWrapper);

                    function initActions() {
                        /* Close Button */
                        xswipeNavigation.close.addEventListener("click", () => {
                            xswipeWrapper.remove();
                            dispatchXSwipeEvent(onCloseClick, "close-button");
                        });
                        xswipeNavigation.zoomPlus.addEventListener(
                            "click",
                            () => {
                                if (currentZoom < variables.zoomLevel) {
                                    currentZoom++;
                                    xswiperContent.remove();
                                    xswiperContent = Content(
                                        elementsList[currentIndex],
                                        currentZoom,
                                        variables
                                    );
                                    xswipeContentWrapper.appendChild(
                                        xswiperContent
                                    );
                                }
                            }
                        );
                        xswipeNavigation.zoomMinus.addEventListener(
                            "click",
                            () => {
                                if (currentZoom > 0) {
                                    currentZoom--;
                                    xswiperContent.remove();
                                    xswiperContent = Content(
                                        elementsList[currentIndex],
                                        currentZoom,
                                        variables
                                    );
                                    xswipeContentWrapper.appendChild(
                                        xswiperContent
                                    );
                                }
                            }
                        );
                        xswipeNavigation.fullscreen.addEventListener(
                            "click",
                            () => {
                                if (!document.fullscreenElement) {
                                    xswipeWrapper.requestFullscreen();
                                } else {
                                    document.exitFullscreen();
                                }
                            }
                        );
                    }

                    function refreshActions() {
                        xswipeNavigation.actions.remove();
                        xswipeNavigation = Navigation(
                            variables,
                            elementsList[currentIndex],
                            currentIndex,
                            maxIndex
                        );
                        xswipeWrapper.appendChild(xswipeNavigation.actions);
                        initActions();
                    }

                    function initControls() {
                        /* Next */
                        xswipeControls.next.addEventListener("click", () => {
                            if (currentIndex < maxIndex) {
                                currentIndex++;
                                currentZoom = 0;
                                xswiperContent.remove();
                                xswiperContent = Content(
                                    elementsList[currentIndex],
                                    currentZoom,
                                    variables
                                );
                                xswipeContentWrapper.appendChild(
                                    xswiperContent
                                );
                                if (xswipeTitle) {
                                    xswipeTitle.remove();
                                }
                                xswipeTitle = Title(
                                    elementsList[currentIndex],
                                    variables
                                );
                                if (xswipeTitle) {
                                    xswipeWrapper.appendChild(xswipeTitle);
                                }
                                refreshActions();
                                refreshControls();
                                dispatchXSwipeEvent(onNextClick, "click-next");
                            }
                        });

                        /* Previous */
                        xswipeControls.previous.addEventListener(
                            "click",
                            () => {
                                if (currentIndex > 0) {
                                    currentIndex--;
                                    currentZoom = 0;
                                    xswiperContent.remove();
                                    xswiperContent = Content(
                                        elementsList[currentIndex],
                                        currentZoom,
                                        variables
                                    );
                                    xswipeContentWrapper.appendChild(
                                        xswiperContent
                                    );
                                    if (xswipeTitle) {
                                        xswipeTitle.remove();
                                    }
                                    xswipeTitle = Title(
                                        elementsList[currentIndex],
                                        variables
                                    );
                                    if (xswipeTitle) {
                                        xswipeWrapper.appendChild(xswipeTitle);
                                    }
                                    refreshActions();
                                    refreshControls();
                                    dispatchXSwipeEvent(
                                        onPrevClick,
                                        "click-prev"
                                    );
                                }
                            }
                        );
                    }

                    function refreshControls() {
                        xswipeControls.previous.remove();
                        xswipeControls.next.remove();
                        xswipeControls = Controls(
                            variables,
                            index,
                            currentIndex,
                            maxIndex
                        );
                        xswipeContainer.appendChild(xswipeControls.previous);
                        xswipeContainer.appendChild(xswipeControls.next);
                        initControls();
                    }

                    initActions();

                    initControls();

                    /* Click Close */
                    xswipeWrapper.addEventListener("click", (event) => {
                        if (event.target === xswipeWrapper) {
                            xswipeWrapper.remove();
                            dispatchXSwipeEvent(onCloseClick, "click-close");
                        }
                    });

                    /* Double Click */
                    if (variables.zoomDoubleTap) {
                        xswipeContentWrapper.addEventListener(
                            "dblclick",
                            () => {
                                if (currentZoom > 0) {
                                    currentZoom = 0;
                                    xswiperContent.remove();
                                    xswiperContent = Content(
                                        elementsList[currentIndex],
                                        currentZoom,
                                        variables
                                    );
                                    xswipeContentWrapper.appendChild(
                                        xswiperContent
                                    );
                                } else if (currentZoom < variables.zoomLevel) {
                                    currentZoom++;
                                    xswiperContent.remove();
                                    xswiperContent = Content(
                                        elementsList[currentIndex],
                                        currentZoom,
                                        variables
                                    );
                                    xswipeContentWrapper.appendChild(
                                        xswiperContent
                                    );
                                }
                            }
                        );
                    }
                });
            });
        });
    }
}
