import { Snake } from './model/snake.js';
import { Food } from './model/food.js';
export class AppComponent {
    constructor() {
        this.title = 'snake';
        this.width = 400;
        this.height = 200;
        this.context = document.getElementById('canvas').getContext('2d');
        this.snake = new Snake(this.context, this.height, this.width);
        this.food = new Food(this.context, this.height, this.width);
        window.requestAnimationFrame(this.animate.bind(this));
    }
    animate() {
        this.redraw();
        window.requestAnimationFrame(this.animate.bind(this));
    }
    move($event) {
        this.snake.draw($event.key, this.food);
    }
    redraw() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.food.draw();
        this.snake.draw(null, this.food);
    }
    score() {
        return this.snake.length();
    }
    speed() {
        return this.snake.speed();
    }
}
//# sourceMappingURL=app.component.js.map