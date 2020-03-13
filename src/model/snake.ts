import {Food} from './food';
import {Point} from './point';

export class Snake {
  private translations = {
    ArrowLeft: new Point(-1, 0),
    ArrowRight: new Point(1, 0),
    ArrowDown: new Point(0, 1),
    ArrowUp: new Point(0, -1)
  };

  private stack: string[] = [];
  private body: Point[] = [];
  private currentSpeed = 2;
  private initialLength = 5;
  private nodeSize = 10;
  private updateSpeedOn = 10;

  constructor(private ctx: CanvasRenderingContext2D, private canvasHeight: number, private canvasWidth: number) {
    const origin = new Point(this.canvasWidth / 2, this.canvasHeight / 2);
    const key = 'ArrowRight';

    for (let i = 0; i < this.initialLength; i++) {
      this.body.push(new Point(origin.x, origin.y, this.nodeSize));
      this.stack.push(key);
    }
  }

  draw(key: string, food: Food) {
    if (!this.translations[key]) {
      key = this.stack[0];
    }

    this.addOperation(key);
    this.moveSnake();

    if (this.body[0].overlapsWith(food)) {
      this.addNode();
      food.renew();
      this.updateSpeed();
    }
  }

  private updateSpeed() {
    if (this.length() % this.updateSpeedOn === 0) {
      this.currentSpeed++;
    }
  }

  private addOperation(key: string) {
    this.stack.unshift(key);
    this.stack.pop();
  }

  private moveSnake() {
    this.moveHead();
    this.moveTail();
  }

  private moveHead() {
    const head = this.body[0];
    const op = this.stack[0];
    const translation = this.translations[op].multiply(this.currentSpeed);
    this.translate(head, translation);
    head.draw(this.ctx);
  }

  private moveTail() {
    let index = 1;
    while (index < this.body.length) {
      const prevNode = this.body[index - 1];
      const node = this.body[index];
      node.x = prevNode.x;
      node.y = prevNode.y;

      const op = this.stack[index - 1];
      const translation = this.translations[op].multiply(-1 * this.currentSpeed);
      this.translate(node, translation);
      node.draw(this.ctx);
      index++;
    }
  }


  private addNode() {
    const last = this.body[this.body.length - 1];
    const lastOp = this.stack[this.stack.length - 1];
    const newNode = new Point(last.x, last.y, last.size);
    this.body.push(newNode);
    this.stack.push(lastOp);
  }

  private translate(node: Point, translation: Point) {
    node.x += translation.x;
    node.y += translation.y;
    node.x = this.checkBounds(node.x, 0, this.canvasWidth - this.nodeSize);
    node.y = this.checkBounds(node.y, 0, this.canvasHeight - this.nodeSize);
  }

  private checkBounds(num: number, min: number, max: number) {
    if (num <= min) {
      return min;
    } else if (num >= max) {
      return max;
    } else {
      return num;
    }
  }

  length() {
    return this.body.length;
  }

  speed() {
    return this.currentSpeed;
  }
}
