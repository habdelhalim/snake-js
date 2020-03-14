import {Point} from './point.js';

export class Food extends Point {

    constructor(private ctx: CanvasRenderingContext2D, private canvasHeight, private canvasWidth, nodeSize) {
        super(0, 0, nodeSize);
    }

    draw() {
        const previousColor = this.ctx.fillStyle;
        this.ctx.fillStyle = 'Red';
        super.draw(this.ctx);
        this.ctx.fillStyle = previousColor;
    }

    renew() {
        this.x = this.getRandomBySize(this.canvasWidth);
        this.y = this.getRandomBySize(this.canvasHeight);
    }

    private getRandomBySize(max: number) {
        let number = Math.floor(Math.random() * max);
        return number - (number % this.size);
    }
}
