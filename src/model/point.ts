export class Point {
  constructor(public x: number, public y: number, public size?) {
    if (!size) {
      this.size = 1;
    }
  }

  multiply(num: number): Point {
    return new Point(this.x * num, this.y * num);
  }

  overlapsWith(other: Point) {
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

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}
