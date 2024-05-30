export function Content(element: any, currentZoom: number, variables: any) {
    let xswipeContent: HTMLImageElement | HTMLVideoElement | HTMLIFrameElement;
    switch (element.dataset?.xswipeType) {
        case "image":
            xswipeContent = document.createElement("img");
            xswipeContent.src = element.getAttribute("href") || "";
            xswipeContent.style.pointerEvents = "none";
            xswipeContent.classList.add("xswipe-loading");
            xswipeContent.classList.remove("xswipe-loaded");
            xswipeContent.style.backgroundPosition = "center";
            xswipeContent.style.backgroundRepeat = "no-repeat";
            xswipeContent.style.backgroundImage = `url('data:image/svg+xml;utf8,<svg width="24" height="24" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_V8m1{transform-origin:center;animation:spinner_zKoa 2s linear infinite}.spinner_V8m1 circle{stroke-linecap:round;animation:spinner_YpZS 1.5s ease-in-out infinite}@keyframes spinner_zKoa{100%{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%{stroke-dasharray:42 150;stroke-dashoffset:-16}95%,100%{stroke-dasharray:42 150;stroke-dashoffset:-59}}</style><g class="spinner_V8m1"><circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3"></circle></g></svg>')`;
            xswipeContent.onload = () => {
                xswipeContent.classList.remove("xswipe-loading");
                xswipeContent.classList.add("xswipe-loaded");
                xswipeContent.style.backgroundImage = "none";
            };
            break;
        case "video":
            xswipeContent = document.createElement("video");
            xswipeContent.src = element.getAttribute("href") || "";
            xswipeContent.classList.add("xswipe-loading");
            xswipeContent.classList.remove("xswipe-loaded");
            xswipeContent.style.backgroundPosition = "center";
            xswipeContent.style.backgroundRepeat = "no-repeat";
            xswipeContent.style.backgroundImage = `url('data:image/svg+xml;utf8,<svg width="24" height="24" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_V8m1{transform-origin:center;animation:spinner_zKoa 2s linear infinite}.spinner_V8m1 circle{stroke-linecap:round;animation:spinner_YpZS 1.5s ease-in-out infinite}@keyframes spinner_zKoa{100%{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%{stroke-dasharray:42 150;stroke-dashoffset:-16}95%,100%{stroke-dasharray:42 150;stroke-dashoffset:-59}}</style><g class="spinner_V8m1"><circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3"></circle></g></svg>')`;
            xswipeContent.oncanplaythrough = () => {
                xswipeContent.classList.remove("xswipe-loading");
                xswipeContent.classList.add("xswipe-loaded");
                xswipeContent.style.backgroundImage = "none";
            };
            break;
        case "iframe":
            xswipeContent = document.createElement("iframe");
            xswipeContent.src = element.getAttribute("href") || "";
            xswipeContent.style.border = "none";
            xswipeContent.style.outline = "none";
            xswipeContent.classList.add("xswipe-loading");
            xswipeContent.classList.remove("xswipe-loaded");
            xswipeContent.style.backgroundPosition = "center";
            xswipeContent.style.backgroundRepeat = "no-repeat";
            xswipeContent.style.backgroundImage = `url('data:image/svg+xml;utf8,<svg width="24" height="24" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_V8m1{transform-origin:center;animation:spinner_zKoa 2s linear infinite}.spinner_V8m1 circle{stroke-linecap:round;animation:spinner_YpZS 1.5s ease-in-out infinite}@keyframes spinner_zKoa{100%{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%{stroke-dasharray:42 150;stroke-dashoffset:-16}95%,100%{stroke-dasharray:42 150;stroke-dashoffset:-59}}</style><g class="spinner_V8m1"><circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3"></circle></g></svg>')`;
            xswipeContent.onload = () => {
                xswipeContent.classList.remove("xswipe-loading");
                xswipeContent.classList.add("xswipe-loaded");
                xswipeContent.style.backgroundImage = "none";
            };
            break;
        default:
            xswipeContent = document.createElement("img");
            xswipeContent.src = element.getAttribute("href") || "";
            xswipeContent.style.pointerEvents = "none";
            xswipeContent.classList.add("xswipe-loading");
            xswipeContent.classList.remove("xswipe-loaded");
            xswipeContent.style.backgroundPosition = "center";
            xswipeContent.style.backgroundRepeat = "no-repeat";
            xswipeContent.style.backgroundImage = `url('data:image/svg+xml;utf8,<svg width="24" height="24" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_V8m1{transform-origin:center;animation:spinner_zKoa 2s linear infinite}.spinner_V8m1 circle{stroke-linecap:round;animation:spinner_YpZS 1.5s ease-in-out infinite}@keyframes spinner_zKoa{100%{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%{stroke-dasharray:42 150;stroke-dashoffset:-16}95%,100%{stroke-dasharray:42 150;stroke-dashoffset:-59}}</style><g class="spinner_V8m1"><circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3"></circle></g></svg>')`;
            xswipeContent.onload = () => {
                xswipeContent.classList.remove("xswipe-loading");
                xswipeContent.classList.add("xswipe-loaded");
                xswipeContent.style.backgroundImage = "none";
            };
            break;
    }
    if (element.dataset?.xswipeHeight || element.dataset?.xswipeWidth) {
        if (element.dataset?.xswipeHeight) {
            xswipeContent.style.height = element.dataset.xswipeHeight + "px";
        } else {
            xswipeContent.style.height = "auto";
        }
        if (element.dataset?.xswipeWidth) {
            xswipeContent.style.maxWidth =
                "min(100%, " + element.dataset.xswipeWidth + "px" + ")";
            xswipeContent.style.width = "100%";
        } else {
            xswipeContent.style.width = "auto";
        }
    } else {
        if (!variables.allowZoom || currentZoom <= 0) {
            xswipeContent.style.maxWidth = "100%";
            xswipeContent.style.maxHeight =
                "calc(100vh - " +
                (variables.padding +
                    variables.padding +
                    variables.space +
                    variables.actionsSize) +
                "px)";
        }
    }

    if (
        variables.allowZoom &&
        currentZoom > 0 &&
        currentZoom <= variables.zoomLevel
    ) {
        let numberWidth = Number(xswipeContent.width);
        if (numberWidth > 0) {
            xswipeContent.style.width =
                Number(xswipeContent.width) * (currentZoom + 0.5) + "px";
            xswipeContent.style.maxWidth = "none";
        } else if (element.dataset?.xswipeWidth) {
            xswipeContent.style.maxWidth = "none";
            xswipeContent.style.width =
                Number(element.dataset.xswipeWidth) * (currentZoom + 0.5) +
                "px";
            if (element.dataset?.xswipeHeight) {
                xswipeContent.style.height =
                    Number(element.dataset.xswipeHeight) * (currentZoom + 0.5) +
                    "px";
            }
        } else {
            console.error(
                "XSwipe: The image width is not set, so the zoom will not work."
            );
        }
    }
    xswipeContent.style.borderRadius = variables.borderRadius + "px";
    return xswipeContent;
}
