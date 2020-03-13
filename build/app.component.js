System.register(["./model/snake", "./model/food"], function (exports_1, context_1) {
    "use strict";
    var snake_1, food_1, AppComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (snake_1_1) {
                snake_1 = snake_1_1;
            },
            function (food_1_1) {
                food_1 = food_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'snake';
                    this.width = 400;
                    this.height = 200;
                    this.context = document.getElementById('canvas').getContext('2d');
                    this.snake = new snake_1.Snake(this.context, this.height, this.width);
                    this.food = new food_1.Food(this.context, this.height, this.width);
                    requestAnimationFrame(this.animate.bind(this));
                }
                AppComponent.prototype.animate = function () {
                    this.redraw();
                    requestAnimationFrame(this.animate.bind(this));
                };
                AppComponent.prototype.move = function ($event) {
                    this.snake.draw($event.key, this.food);
                };
                AppComponent.prototype.redraw = function () {
                    this.context.clearRect(0, 0, this.width, this.height);
                    this.food.draw();
                    this.snake.draw(null, this.food);
                };
                AppComponent.prototype.score = function () {
                    return this.snake.length();
                };
                AppComponent.prototype.speed = function () {
                    return this.snake.speed();
                };
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map