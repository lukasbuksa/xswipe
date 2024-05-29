export function Zoom(
    container: HTMLElement,
    variables: { allowZoom: boolean }
) {
    if (variables.allowZoom) {
        let startY: number = 0;
        let startX: number = 0;
        let scrollLeft: number = 0;
        let scrollTop: number = 0;
        let isButtonDown: boolean = false;

        container.addEventListener("mousedown", (e: MouseEvent) => {
            return mouseIsDown(e);
        });
        container.addEventListener("mouseup", (e: MouseEvent) => {
            mouseUp(e);
        });
        container.addEventListener("mouseleave", (e: MouseEvent) => {
            mouseLeave(e);
        });
        container.addEventListener("mousemove", (e: MouseEvent) => {
            mouseMove(e);
        });

        function mouseIsDown(e: MouseEvent) {
            isButtonDown = true;
            startY = e.pageY - container.offsetTop;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
            scrollTop = container.scrollTop;
        }

        function mouseUp(e: MouseEvent) {
            isButtonDown = false;
        }

        function mouseLeave(e: MouseEvent) {
            isButtonDown = false;
        }

        function mouseMove(e: MouseEvent) {
            if (isButtonDown) {
                e.preventDefault();
                const y = e.pageY - container.offsetTop;
                const moveToY = y - startY;
                container.scrollTop = scrollTop - moveToY;

                const x = e.pageX - container.offsetLeft;
                const moveToX = x - startX;
                container.scrollLeft = scrollLeft - moveToX;
            }
        }
    }
}
