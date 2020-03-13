import { Food } from './model/food.js';
import { Snake } from './model/snake.js';

export class AppComponent {
  title = 'snake';
  width = 400;
  height = 200;

  canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private snake: Snake;
  private food: Food;

  constructor() {
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');

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

  private redraw() {
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
