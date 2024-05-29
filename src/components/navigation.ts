export function Navigation(
    variables: any,
    index: number,
    currentIndex: number,
    maxIndex: number
) {
    /* Actions */
    let xswipeActions = document.createElement("div");
    xswipeActions.classList.add("xswipe-actions");
    xswipeActions.style.position = "absolute";
    xswipeActions.style.boxSizing = "border-box";
    xswipeActions.style.bottom = "0";
    xswipeActions.style.left = "50%";
    xswipeActions.style.transform = "translateX(-50%)";
    xswipeActions.style.display = "flex";
    xswipeActions.style.justifyContent = "center";
    xswipeActions.style.alignItems = "center";
    xswipeActions.style.borderTopLeftRadius = variables.borderRadius + "px";
    xswipeActions.style.borderTopRightRadius = variables.borderRadius + "px";
    xswipeActions.style.overflow = "hidden";

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

    /* Zoom Button */
    let xswipeZoomButton = document.createElement("button");
    xswipeZoomButton.classList.add("xswipe-fullscreen-button");
    xswipeZoomButton.style.width = variables.actionsSize + "px";
    xswipeZoomButton.style.height = variables.actionsSize + "px";
    xswipeZoomButton.style.backgroundColor = variables.actionsColor;
    xswipeZoomButton.style.color = "white";
    xswipeZoomButton.style.border = "none";
    xswipeZoomButton.style.cursor = "pointer";
    xswipeZoomButton.style.outline = "none";
    xswipeZoomButton.style.display = "flex";
    xswipeZoomButton.style.justifyContent = "center";
    xswipeZoomButton.style.alignItems = "center";
    xswipeZoomButton.style.lineHeight = "0";
    xswipeZoomButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width=${
        variables.actionsSize / 1.5 + "px"
    } height=${variables.actionsSize / 1.5 + "px"}>
    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
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
        xswipeActions.appendChild(xswipeZoomButton);
    }
    if (variables.allowFullscreen) {
        xswipeActions.appendChild(xswipeFullscreenButton);
    }
    xswipeActions.appendChild(xswipeCloseButton);

    return {
        actions: xswipeActions,
        close: xswipeCloseButton,
    };
}
