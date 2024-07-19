# Yoyo Highlight

## Author
- Yeo
- smallvi@gmail.com

## Introduction

This plugin provides a customizable highlight without any dependencies.

## Installation

Include the following files in your project:

- `yoyo-highlight.min.css`
- `yoyo-highlight.min.js`

## Usage

1. Include `yoyo-highlight.min.css` and `yoyo-highlight.min.js` in your HTML file:

   ```html
   <link rel="stylesheet" href="path/to/yoyo-highlight.min.css">
   <script src="path/to/yoyo-highlight.min.js"></script>
   ```

2. Initialize the plugin in your JavaScript:
    
    ### Simple Yoyo Highlight

    ```javascript
    yoyoHighlight.fire({
        class: ['.highlight'],
        id: ['#a', '#b', '#c'],
        animation: 'pulse 5s infinite',
        boxShadow: 'red 0px 3px 8px',
        border: '2px solid red',
    });
    ```

## Param

- type: Icon type {'info','question','success','warning','danger'}
- title: Title Text (optional)
- message: Main Text
- subtext: Sub Text (optional)
- timeOut: auto close modal (1000 = 1 sec),
- position: {'top-left', 'top-right', 'bottom-left', 'bottom-right'}

## Sample

[Demo](https://smallvi.github.io/yoyo_highlight/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.