import { Point } from './point.js';
export class Food extends Point {
    constructor(ctx, canvasHeight, canvasWidth, nodeSize) {
        super(canvasWidth / 2, canvasHeight / 2, nodeSize);
        this.ctx = ctx;
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
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
    getRandomBySize(max) {
        let number = Math.floor(Math.random() * max);
        return number - (number % this.size);
    }
}
//# sourceMappingURL=food.js.map