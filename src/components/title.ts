export function Title(element: any, variables: any) {
    let title: HTMLDivElement | null = null;
    if (element.dataset?.xswipeTitle) {
        let title = document.createElement("div");
        title.classList.add("xswipe-title");
        title.style.position = "absolute";
        title.style.left = "50%";
        title.style.transform = "translateX(-50%)";
        title.style.maxWidth = "100%";
        title.style.color = "white";
        title.style.fontSize = "18px";
        title.style.fontWeight = "500";
        title.style.textAlign = "center";
        title.style.whiteSpace = "wrap";
        title.style.wordBreak = "break-word";
        title.textContent = element.dataset.xswipeTitle;

        if (variables.navigationPosition === "top") {
            title.style.bottom = variables.padding / 2 - 5 + "px";
        } else if (variables.navigationPosition === "bottom") {
            title.style.top = variables.padding / 2 - 5 + "px";
        } else {
            console.error("XSwipe: Invalid navigation position");
        }

        return title;
    }
    return title;
}
