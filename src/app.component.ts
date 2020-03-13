import {Snake} from './model/snake';
import {Food} from './model/food';

export class AppComponent {
  title = 'snake';
  width = 400;
  height = 200;

  canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private snake: Snake;
  private food: Food;

  constructor() {
    this.context = (<HTMLCanvasElement> document.getElementById('canvas')).getContext('2d');
    this.snake = new Snake(this.context, this.height, this.width);
    this.food = new Food(this.context, this.height, this.width);

    requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    this.redraw();
    requestAnimationFrame(this.animate.bind(this));
  }

  move($event: KeyboardEvent) {
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
