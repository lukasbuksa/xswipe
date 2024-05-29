export function Navigation(
    variables: any,
    element: any,
    currentIndex: number,
    maxIndex: number
) {
    /* Actions */
    let xswipeActions = document.createElement("div");
    xswipeActions.classList.add("xswipe-actions");
    xswipeActions.style.position = "absolute";
    xswipeActions.style.boxSizing = "border-box";
    xswipeActions.style.left = "50%";
    xswipeActions.style.transform = "translateX(-50%)";
    xswipeActions.style.display = "flex";
    xswipeActions.style.justifyContent = "center";
    xswipeActions.style.alignItems = "center";
    xswipeActions.style.overflow = "hidden";
    if (variables.navigationPosition === "top") {
        xswipeActions.style.top = "0";
        xswipeActions.style.borderBottomLeftRadius =
            variables.borderRadius + "px";
        xswipeActions.style.borderBottomRightRadius =
            variables.borderRadius + "px";
    } else if (variables.navigationPosition === "bottom") {
        xswipeActions.style.bottom = "0";
        xswipeActions.style.borderTopLeftRadius = variables.borderRadius + "px";
        xswipeActions.style.borderTopRightRadius =
            variables.borderRadius + "px";
    } else {
        console.error("XSwipe: Invalid navigation position");
    }

    /* Close Button */
    let xswipeCloseButton = document.createElement("button");
    xswipeCloseButton.classList.add("xswipe-close-button");
    xswipeCloseButton.style.width = variables.actionsSize + "px";
    xswipeCloseButton.style.height = variables.actionsSize + "px";
    xswipeCloseButton.style.backgroundColor = variables.closeColor;
    xswipeCloseButton.style.color = "white";
    xswipeCloseButton.style.border = "none";
    xswipeCloseButton.style.cursor = "pointer";
    xswipeCloseButton.style.outline = "none";
    xswipeCloseButton.style.display = "flex";
    xswipeCloseButton.style.justifyContent = "center";
    xswipeCloseButton.style.alignItems = "center";
    xswipeCloseButton.style.lineHeight = "0";
    xswipeCloseButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width=${
        variables.actionsSize / 1.5 + "px"
    } height=${variables.actionsSize / 1.5 + "px"}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>`;

    /* Fullscreen Button */
    let xswipeFullscreenButton = document.createElement("button");
    xswipeFullscreenButton.classList.add("xswipe-fullscreen-button");
    xswipeFullscreenButton.style.width = variables.actionsSize + "px";
    xswipeFullscreenButton.style.height = variables.actionsSize + "px";
    xswipeFullscreenButton.style.backgroundColor = variables.actionsColor;
    xswipeFullscreenButton.style.color = "white";
    xswipeFullscreenButton.style.border = "none";
    xswipeFullscreenButton.style.cursor = "pointer";
    xswipeFullscreenButton.style.outline = "none";
    xswipeFullscreenButton.style.display = "flex";
    xswipeFullscreenButton.style.justifyContent = "center";
    xswipeFullscreenButton.style.alignItems = "center";
    xswipeFullscreenButton.style.lineHeight = "0";
    xswipeFullscreenButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width=${
        variables.actionsSize / 1.5 + "px"
    } height=${variables.actionsSize / 1.5 + "px"}>
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
    </svg>`;

    /* Zoom Plus Button */
    let xswipeZoomPlusButton = document.createElement("button");
    xswipeZoomPlusButton.classList.add("xswipe-zoom-plus-button");
    xswipeZoomPlusButton.style.width = variables.actionsSize + "px";
    xswipeZoomPlusButton.style.height = variables.actionsSize + "px";
    xswipeZoomPlusButton.style.backgroundColor = variables.actionsColor;
    xswipeZoomPlusButton.style.color = "white";
    xswipeZoomPlusButton.style.border = "none";
    xswipeZoomPlusButton.style.cursor = "pointer";
    xswipeZoomPlusButton.style.outline = "none";
    xswipeZoomPlusButton.style.display = "flex";
    xswipeZoomPlusButton.style.justifyContent = "center";
    xswipeZoomPlusButton.style.alignItems = "center";
    xswipeZoomPlusButton.style.lineHeight = "0";
    xswipeZoomPlusButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width=${
        variables.actionsSize / 1.5 + "px"
    } height=${variables.actionsSize / 1.5 + "px"}>
    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
    </svg>`;

    /* Zoom Minus Button */
    let xswipeZoomMinusButton = document.createElement("button");
    xswipeZoomMinusButton.classList.add("xswipe-zoom-minus-button");
    xswipeZoomMinusButton.style.width = variables.actionsSize + "px";
    xswipeZoomMinusButton.style.height = variables.actionsSize + "px";
    xswipeZoomMinusButton.style.backgroundColor = variables.actionsColor;
    xswipeZoomMinusButton.style.color = "white";
    xswipeZoomMinusButton.style.border = "none";
    xswipeZoomMinusButton.style.cursor = "pointer";
    xswipeZoomMinusButton.style.outline = "none";
    xswipeZoomMinusButton.style.display = "flex";
    xswipeZoomMinusButton.style.justifyContent = "center";
    xswipeZoomMinusButton.style.alignItems = "center";
    xswipeZoomMinusButton.style.lineHeight = "0";
    xswipeZoomMinusButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width=${
        variables.actionsSize / 1.5 + "px"
    } height=${variables.actionsSize / 1.5 + "px"}>
    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM13.5 10.5h-6" />
    </svg>`;

    /* Informations */
    let xswipeInformations = document.createElement("div");
    xswipeInformations.classList.add("xswipe-informations");
    xswipeInformations.style.minWidth = variables.actionsSize + "px";
    xswipeInformations.style.boxSizing = "border-box";
    xswipeInformations.style.padding = "4px";
    xswipeInformations.style.height = variables.actionsSize + "px";
    xswipeInformations.style.backgroundColor = variables.actionsColor;
    xswipeInformations.style.color = "white";
    xswipeInformations.style.border = "none";
    xswipeInformations.style.display = "flex";
    xswipeInformations.style.justifyContent = "center";
    xswipeInformations.style.alignItems = "center";
    xswipeInformations.style.lineHeight = "1";
    xswipeInformations.style.fontSize = "14px";
    xswipeInformations.textContent = `${currentIndex + 1} / ${maxIndex + 1}`;

    xswipeActions.appendChild(xswipeInformations);
    if (variables.allowZoom) {
        xswipeActions.appendChild(xswipeZoomMinusButton);
        xswipeActions.appendChild(xswipeZoomPlusButton);
    }
    if (variables.allowFullscreen) {
        xswipeActions.appendChild(xswipeFullscreenButton);
    }
    xswipeActions.appendChild(xswipeCloseButton);

    return {
        actions: xswipeActions,
        zoomMinus: xswipeZoomMinusButton,
        zoomPlus: xswipeZoomPlusButton,
        fullscreen: xswipeFullscreenButton,
        close: xswipeCloseButton,
    };
}
