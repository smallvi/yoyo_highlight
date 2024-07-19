document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('animateButton').addEventListener('click', function () {
        yoyoHighlight.fire({
            class: ['.highlight'],
            id: ['#a', '#b', '#c'],
            animation: 'button-shadow-throb 1s infinite',
            boxShadow: 'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px',
            border: '2px solid red',
        });
    });

    document.getElementById('borderButton').addEventListener('click', function () {
        yoyoHighlight.fire({
            class: ['.highlight'],
            id: ['#a', '#b', '#c'],
            // animation: 'pulse 5s infinite',
            // boxShadow: 'red 0px 3px 8px',
            border: '2px solid red',
        });
    });
});
