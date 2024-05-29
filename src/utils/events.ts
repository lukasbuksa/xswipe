export function dispatchXSwipeEvent(dispatchFunction: any, event: string) {
    document.dispatchEvent(new Event("xswipe-" + event));
    if (dispatchFunction) dispatchFunction();
}
