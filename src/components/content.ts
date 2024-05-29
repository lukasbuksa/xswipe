export function Content(element: any, variables: any) {
    let xswiperContent = element.children[0].cloneNode(true) as any;
    xswiperContent.src = element.getAttribute("href") || "";
    xswiperContent.style.maxWidth = "100%";
    xswiperContent.style.maxHeight = "100%";
    xswiperContent.style.borderRadius = variables.borderRadius + "px";
    return xswiperContent;
}
