import { Food } from './model/food.js';
import { Snake } from './model/snake.js';
export class AppComponent {
    constructor() {
        this.title = 'snake';
        this.width = 400;
        this.height = 400;
        this.fps = 0;
        this.prev = Date.now();
        this.init();
        document.addEventListener('keydown', ($event) => this.move($event));
        window.requestAnimationFrame(this.render.bind(this));
        const resetButton = document.getElementById('reset');
        resetButton.addEventListener('click', () => this.init());
    }
    init() {
        this.scoreBoard = document.getElementById('score');
        this.canvas = document.getElementById('canvas');
        this.canvas.height = this.height;
        this.canvas.width = this.width;
        this.context = this.canvas.getContext('2d', { alpha: false });
        this.snake = new Snake(this.context, this.height, this.width, 10);
        this.food = new Food(this.context, this.height, this.width, 10);
        this.showScore();
    }
    render() {
        let now = Date.now();
        const diff = Math.floor((now - this.prev) / 1000);
        if (diff > 0) {
            this.prev = now;
            this.fps = 0;
        }
        if (this.fps % (10 - this.speed()) === 0) {
            this.redraw();
        }
        this.fps++;
        window.requestAnimationFrame(this.render.bind(this));
    }
    redraw() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.food.draw();
        this.snake.draw(null, this.food);
    }
    move($event) {
        this.snake.draw($event.key, this.food);
        this.showScore();
    }
    showScore() {
        this.scoreBoard.innerText = "Score: " + this.score().toString() + ", Speed: " + this.speed().toString();
    }
    score() {
        return this.snake.length();
    }
    speed() {
        return Math.floor(this.snake.length() / 10);
    }
}
//# sourceMappingURL=app.component.js.map