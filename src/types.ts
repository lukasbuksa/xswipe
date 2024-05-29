export type XSwipeProps = {
    name?: string;
    wrapper: string;
    elements: string;
    onPrevClick?: () => void;
    onNextClick?: () => void;
    onCloseClick?: () => void;
    opts?: {
        bgColor?: string;
        zoomLevel?: number;
        allowZoom?: boolean;
        allowFullscreen?: boolean;
        allowDownload?: boolean;
        allowShare?: boolean;
        navigationPosition?: "top" | "bottom";
        borderRadius?: number;
        closeColor?: string;
        actionsColor?: string;
        actionsSize?: number;
    };
};
