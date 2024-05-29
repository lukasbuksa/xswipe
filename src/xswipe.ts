import { Content } from "./components/content";
import { Controls } from "./components/controls";
import { Navigation } from "./components/navigation";
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
        let wrapperElement = document.querySelector(wrapper) as HTMLElement;
        let elementsList = document.querySelectorAll(
            elements
        ) as NodeListOf<HTMLElement>;

        if (wrapperElement === null) {
            console.error(`XSwipe: Wrapper element "${wrapper}" not found.`);
            return;
        }

        if (elementsList.length === 0) {
            console.error(`XSwipe: Elements "${elements}" not found.`);
            return;
        }

        const variables = {
            name: name ?? "XSwipe",
            zoomLevel: opts?.zoomLevel ?? 1,
            allowZoom: opts?.allowZoom ?? false,
            allowFullscreen: opts?.allowFullscreen ?? false,
            allowDownload: opts?.allowDownload ?? false,
            allowShare: opts?.allowShare ?? false,
            bgColor: opts?.bgColor ?? "rgba(0, 0, 0, 0.9)",
            navigationPosition: opts?.navigationPosition ?? "bottom",

            padding: 30,
            borderRadius: 10,
            closeColor: "red",
            actionsColor: "gray",
            actionsSize: 42,
        };

        elementsList.forEach((element, index) => {
            element.addEventListener("click", (event) => {
                event.preventDefault();

                let currentIndex = index;
                let maxIndex = elementsList.length - 1;

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
                xswipeWrapper.style.paddingTop = variables.padding + "px";
                xswipeWrapper.style.paddingLeft = variables.padding + "px";
                xswipeWrapper.style.paddingRight = variables.padding + "px";
                xswipeWrapper.style.paddingBottom =
                    variables.padding + variables.actionsSize + "px";
                xswipeWrapper.style.boxSizing = "border-box";

                /* Wrapper Container */
                let xswipeContainer = document.createElement("div");
                xswipeContainer.classList.add("xswipe-container");
                xswipeContainer.style.position = "relative";
                xswipeContainer.style.width = "fit-content";
                xswipeContainer.style.height = "fit-content";

                /* Content Wrapper */
                let xswipeContentWrapper = document.createElement("div");
                xswipeContentWrapper.classList.add("xswipe-content-wrapper");
                xswipeContentWrapper.style.width = "fit-content";
                xswipeContentWrapper.style.height = "fit-content";
                xswipeContentWrapper.style.lineHeight = "0";
                xswipeContentWrapper.style.borderRadius =
                    variables.borderRadius + "px";
                xswipeContentWrapper.style.maxHeight =
                    "calc(100vh - " + variables.padding * 2 + "px)";
                xswipeContentWrapper.style.overflow = "auto";

                /* Content */
                let xswiperContent = Content(element, variables);

                /* Navigation */
                let xswipeNavigation = Navigation(
                    variables,
                    index,
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

                /* Append Wrappers */

                xswipeContentWrapper.appendChild(xswiperContent);
                xswipeContainer.appendChild(xswipeControls.previous);
                xswipeContainer.appendChild(xswipeControls.next);
                xswipeContainer.appendChild(xswipeContentWrapper);
                xswipeWrapper.appendChild(xswipeContainer);
                xswipeWrapper.appendChild(xswipeNavigation.actions);

                document.body.appendChild(xswipeWrapper);

                function initActions() {
                    /* Close Button */
                    xswipeNavigation.close.addEventListener("click", () => {
                        xswipeWrapper.remove();
                        dispatchXSwipeEvent(onCloseClick, "close-button");
                    });
                }

                function refreshActions() {
                    xswipeNavigation.actions.remove();
                    xswipeNavigation = Navigation(
                        variables,
                        currentIndex,
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
                            xswiperContent.remove();
                            xswiperContent = Content(
                                elementsList[currentIndex],
                                variables
                            );
                            xswipeContentWrapper.appendChild(xswiperContent);
                            refreshActions();
                            refreshControls();
                            dispatchXSwipeEvent(onNextClick, "click-next");
                        }
                    });

                    /* Previous */
                    xswipeControls.previous.addEventListener("click", () => {
                        if (currentIndex > 0) {
                            currentIndex--;
                            xswiperContent.remove();
                            xswiperContent = Content(
                                elementsList[currentIndex],
                                variables
                            );
                            xswipeContentWrapper.appendChild(xswiperContent);
                            refreshActions();
                            refreshControls();
                            dispatchXSwipeEvent(onPrevClick, "click-prev");
                        }
                    });
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
            });
        });
    }
}
