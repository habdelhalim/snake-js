export class Point {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        if (!size) {
            this.size = 1;
        }
    }
    multiply(num) {
        return new Point(this.x * num, this.y * num);
    }
    overlapsWith(other) {
        if (this.x > other.x + other.size ||
            other.x > this.x + this.size) {
            return false;
        }
        if (this.y > other.y + other.size
            || other.y > this.y + this.size) {
            return false;
        }
        return true;
    }
    draw(ctx) {
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}
//# sourceMappingURL=point.js.map