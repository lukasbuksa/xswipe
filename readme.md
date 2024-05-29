# XSwipe v0.0.3

By Lukáš Buksa - https:

-   Vanilla JavaScript lightbox / media-box
-   TypeScript support
-   Supported formats: image, iframe
-   No jQuery
-   No dependencies

## Install

-   `npm i xswipe`

## Usage

-   ES6

```
import { XSwipe } from 'xswipe'

const xswipe = new XSwipe({
    name?: string, // optional - name
    wrapper: string, // required - wrapper selector
    elements: string, // required - gallery items selector
    onPrevClick?: () => void, // optional - callback function
    onNextClick?: () => void, // optional - callback function
    onCloseClick?: () => void, // optional - callback function
    opts: { // optional - options
        bgColor: string, // default: "rgba(0, 0, 0, 0.9)"
        zoomLevel: number, // default: 0
        allowZoom: boolean, // default: false
        allowFullscreen: boolean, // default: false
        allowDownload: boolean, // coming soon
        allowShare: boolean, // coming soon
        navigationPosition: "top" | "bottom", // default: "bottom"
        borderRadius: number, // default (pixels): 10
        closeColor: string, //default: "red"
        actionsColor: string, // default: "gray"
        actionsSize: number, // default (pixels): 42
    };
})
```
