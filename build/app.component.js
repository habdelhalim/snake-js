import { Food } from './model/food.js';
import { Snake } from './model/snake.js';
export class AppComponent {
    constructor() {
        this.title = 'snake';
        this.width = 400;
        this.height = 400;
        this.scoreBoard = document.getElementById('score');
        this.canvas = document.getElementById('canvas');
        this.canvas.height = this.height;
        this.canvas.width = this.width;
        this.context = this.canvas.getContext('2d');
        this.snake = new Snake(this.context, this.height, this.width, 10);
        this.food = new Food(this.context, this.height, this.width, 10);
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
        this.scoreBoard.innerText = "Score: " + this.score().toString() + ", Speed: " + this.speed().toString();
    }
    score() {
        return this.snake.length();
    }
    speed() {
        return this.snake.speed();
    }
}
//# sourceMappingURL=app.component.js.map