export function Zoom(
    container: HTMLElement,
    variables: { allowZoom: boolean }
) {
    if (variables.allowZoom) {
        let startY: number = 0;
        let startX: number = 0;
        let scrollLeft: number = 0;
        let scrollTop: number = 0;
        let isDown: boolean = false;

        container.addEventListener("mousedown", (e: MouseEvent) =>
            mouseIsDown(e)
        );
        container.addEventListener("mouseup", (e: MouseEvent) => mouseUp(e));
        container.addEventListener("mouseleave", (e: MouseEvent) =>
            mouseLeave(e)
        );
        container.addEventListener("mousemove", (e: MouseEvent) =>
            mouseMove(e)
        );

        function mouseIsDown(e: MouseEvent) {
            isDown = true;
            startY = e.pageY - container.offsetTop;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
            scrollTop = container.scrollTop;
        }
        function mouseUp(e: MouseEvent) {
            isDown = false;
        }
        function mouseLeave(e: MouseEvent) {
            isDown = false;
        }
        function mouseMove(e: MouseEvent) {
            if (isDown) {
                e.preventDefault();
                // Move vertically
                const y = e.pageY - container.offsetTop;
                const walkY = y - startY;
                container.scrollTop = scrollTop - walkY;

                // Move horizontally
                const x = e.pageX - container.offsetLeft;
                const walkX = x - startX;
                container.scrollLeft = scrollLeft - walkX;
            }
        }
    }
}
