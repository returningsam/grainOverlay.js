# Grain Overlay

A simple tool to add real random grain to any html element.

<img title="Size Limit logo" src="./preview.gif">

Current functions:
- Add grain to an element
- Randomize grain in existing grain element.

## How

This tool adds a grain overlay to any element by:
1. Creating an HTML canvas element
2. Placing the canvas into the specified parent element. Canvas element has absolute position, and a high zIndex to allow it to fully cover the parent element.
3. Randomizes the [image data](https://developer.mozilla.org/en-US/docs/Web/API/ImageData) of the canvas to create real grain.
4. Canvas elements can be passed back to the tool to re-randomize the grain.

## Why

Grain can add a nice sense of texture to an element. This makes it easy.

## Installation

Include either grainOverlay.js or grainOverlay.min.js in your html head tag:

    <head>
        ...
        <script src="grainOverlay.js" charset="utf-8"></script>
        // your javascript
        ...
    </head>

npm integration in progress...

## Usage

The init method takes a parent element and adds the grain element as a child of it. The other arguments are for adjusting the strength and look of the grain.

    grainOverlay.init(parent, color, opacity, zIndex);

    // parent:  [Optional] Element to recieve the grain overlay.
                Defaults to 'document.body' if not provided.

    // color:   [Optional] Each pixel in the grain will be a random
                rgba color where the r, g, and b values are random
                in the range [0,color]. Max is 255. Defaults to 200.

    // opacity: [Optional] Each pixel in the grain will be a random
                rgba color where the a value is random
                in the range [0,opacity]. Max is 255.
                Defaults to 25.

    // zIndex:  [Optional] Custom zIndex value for the grain element.
                Defaults to 1000.

    // returns: The newly created canvas element for potential future use.

The regrain method takes any canvas element, and will redraw the grain onto it. The optional arguments are for adjusting the strength and look of the grain.

    grainOverlay.regrain(element, color, opacity, zIndex);

    // element: Element to which new grain will be drawn.

    // color:   [Optional] Each pixel in the grain will be a random
                rgba color where the r, g, and b values are random
                in the range [0,color]. Max is 255. Defaults to 200.

    // opacity: [Optional] Each pixel in the grain will be a random
                rgba color where the a value is random
                in the range [0,opacity]. Max is 255.
                Defaults to 25.

    // zIndex:  [Optional] Custom zIndex value for the grain element.
                Defaults to 1000.

## Examples

`test.html`, `test.css` and `test.js` have some usage examples. Feel free to open those files in your browser to see how it works.

## TODO

 - allow install via npm
 - create live examples

## License

IDC
