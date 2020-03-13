import { Point } from './point.js';
export class Food extends Point {
    constructor(ctx, canvasHeight, canvasWidth) {
        super(0, 0, 10);
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
        this.x = Math.floor(Math.random() * (this.canvasWidth - this.size));
        this.y = Math.floor(Math.random() * (this.canvasHeight - this.size));
    }
}
//# sourceMappingURL=food.js.map