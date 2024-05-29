export function Controls(
    variables: any,
    index: number,
    currentIndex: number,
    maxIndex: number
) {
    /* Next Button */
    let xswipeNextButton = document.createElement("button");
    xswipeNextButton.classList.add("xswipe-next-button");
    xswipeNextButton.style.width = "fit-content";
    xswipeNextButton.style.height = "100%";
    xswipeNextButton.style.boxSizing = "border-box";
    xswipeNextButton.style.paddingLeft = variables.padding + "px";
    xswipeNextButton.style.backgroundColor = "transparent";
    xswipeNextButton.style.position = "absolute";
    xswipeNextButton.style.right = "-" + variables.padding + "px";
    xswipeNextButton.style.top = "50%";
    xswipeNextButton.style.transform = "translateY(-50%)";
    xswipeNextButton.style.color = "white";
    xswipeNextButton.style.border = "none";
    xswipeNextButton.style.cursor = "pointer";
    xswipeNextButton.style.outline = "none";
    xswipeNextButton.style.display = "flex";
    xswipeNextButton.style.justifyContent = "center";
    xswipeNextButton.style.alignItems = "center";
    xswipeNextButton.style.lineHeight = "0";
    xswipeNextButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width=${
        variables.actionsSize / 1.5 + "px"
    } height=${variables.actionsSize / 1.5 + "px"}>
    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>`;

    /* Previous Button */
    let xswipePreviousButton = document.createElement("button");
    xswipePreviousButton.classList.add("xswipe-previous-button");
    xswipePreviousButton.style.width = "fit-content";
    xswipePreviousButton.style.height = "100%";
    xswipePreviousButton.style.boxSizing = "border-box";
    xswipePreviousButton.style.paddingRight = variables.padding + "px";
    xswipePreviousButton.style.backgroundColor = "transparent";
    xswipePreviousButton.style.position = "absolute";
    xswipePreviousButton.style.left = "-" + variables.padding + "px";
    xswipePreviousButton.style.top = "50%";
    xswipePreviousButton.style.transform = "translateY(-50%)";
    xswipePreviousButton.style.color = "white";
    xswipePreviousButton.style.border = "none";
    xswipePreviousButton.style.cursor = "pointer";
    xswipePreviousButton.style.outline = "none";
    xswipePreviousButton.style.display = "flex";
    xswipePreviousButton.style.justifyContent = "center";
    xswipePreviousButton.style.alignItems = "center";
    xswipePreviousButton.style.lineHeight = "0";
    xswipePreviousButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width=${
        variables.actionsSize / 1.5 + "px"
    } height=${variables.actionsSize / 1.5 + "px"}>
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>`;

    if (currentIndex <= 0) {
        xswipePreviousButton.style.display = "none";
    }

    if (currentIndex >= maxIndex) {
        xswipeNextButton.style.display = "none";
    }

    return {
        next: xswipeNextButton,
        previous: xswipePreviousButton,
    };
}
