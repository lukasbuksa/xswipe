export function Content(element: any, currentZoom: number, variables: any) {
    let xswipeContent: HTMLImageElement | HTMLVideoElement | HTMLIFrameElement;
    switch (element.dataset?.xswipeType) {
        case "image":
            xswipeContent = document.createElement("img");
            xswipeContent.src = element.getAttribute("href") || "";
            xswipeContent.style.pointerEvents = "none";
            break;
        case "video":
            xswipeContent = document.createElement("video");
            xswipeContent.src = element.getAttribute("href") || "";
            break;
        case "iframe":
            xswipeContent = document.createElement("iframe");
            xswipeContent.src = element.getAttribute("href") || "";
            xswipeContent.style.border = "none";
            xswipeContent.style.outline = "none";
            break;
        default:
            xswipeContent = document.createElement("img");
            xswipeContent.src = element.getAttribute("href") || "";
            xswipeContent.style.pointerEvents = "none";
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
