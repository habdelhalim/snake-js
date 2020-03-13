import {Point} from './point';

export class Food extends Point {

  constructor(private ctx: CanvasRenderingContext2D, private canvasHeight, private canvasWidth) {
    super(0, 0, 10);
  }

  draw() {
    const previousColor = this.ctx.fillStyle;
    this.ctx.fillStyle = 'Red';
    super.draw(this.ctx);
    this.ctx.fillStyle = previousColor;
  }

  renew() {
    this.x = Math.floor(Math.random() * (this.canvasWidth - this.size));
    this.y = Math.floor(Math.random() * (this.canvasHeight - this.size));
  }

}
