/*! Yoyo Highlight v1.0.0 (https://github.com/smallvi/yoyo_highlight) */
(function () {
    var yoyoHighlight = {
        fire: function (options) {

            document.querySelectorAll('.yoyoHighlight').forEach(function (element) {
                element.remove();
            });

            // class
            if (options.class && Array.isArray(options.class)) {
                options.class.forEach(function (className) {
                    document.querySelectorAll(className).forEach(function (element) {
                        var yoyoHighlight = document.createElement('div');
                        yoyoHighlight.className = 'yoyoHighlight';

                        if (options.animation === false) {
                            yoyoHighlight.style.animation = '';
                        } else {
                            yoyoHighlight.style.animation = options.animation;
                        }

                        if (options.boxShadow) {
                            yoyoHighlight.style.boxShadow = '';
                            yoyoHighlight.style.boxShadow = options.boxShadow;
                        }

                        if (options.border) {
                            yoyoHighlight.style.border = '';
                            yoyoHighlight.style.border = options.border;
                        }

                        var rect = element.getBoundingClientRect();
                        yoyoHighlight.style.width = `${rect.width}px`;
                        yoyoHighlight.style.height = `${rect.height}px`;
                        yoyoHighlight.style.top = `${rect.top + window.scrollY}px`;
                        yoyoHighlight.style.left = `${rect.left + window.scrollX}px`;

                        document.body.appendChild(yoyoHighlight);
                    });
                });
            }

            // id
            if (options.id && Array.isArray(options.id)) {
                options.id.forEach(function (id) {
                    var targetElement = document.getElementById(id.substring(1));
                    if (targetElement) {
                        var yoyoHighlight = document.createElement('div');
                        yoyoHighlight.className = 'yoyoHighlight';

                        if (options.animation === false) {
                            yoyoHighlight.style.animation = '';
                        } else {
                            yoyoHighlight.style.animation = options.animation;
                        }

                        if (options.boxShadow) {
                            yoyoHighlight.style.boxShadow = '';
                            yoyoHighlight.style.boxShadow = options.boxShadow;
                        }

                        if (options.border) {
                            yoyoHighlight.style.border = '';
                            yoyoHighlight.style.border = options.border;
                        }

                        var rect = targetElement.getBoundingClientRect();
                        yoyoHighlight.style.width = `${rect.width}px`;
                        yoyoHighlight.style.height = `${rect.height}px`;
                        yoyoHighlight.style.top = `${rect.top + window.scrollY}px`;
                        yoyoHighlight.style.left = `${rect.left + window.scrollX}px`;

                        document.body.appendChild(yoyoHighlight);
                    }
                });
            }
        }
    };

    window.yoyoHighlight = yoyoHighlight; // 将 yoyoHighlight 暴露到全局作用域
})();
