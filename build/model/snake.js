System.register(["./point"], function (exports_1, context_1) {
    "use strict";
    var point_1, Snake;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (point_1_1) {
                point_1 = point_1_1;
            }
        ],
        execute: function () {
            Snake = (function () {
                function Snake(ctx, canvasHeight, canvasWidth) {
                    this.ctx = ctx;
                    this.canvasHeight = canvasHeight;
                    this.canvasWidth = canvasWidth;
                    this.translations = {
                        ArrowLeft: new point_1.Point(-1, 0),
                        ArrowRight: new point_1.Point(1, 0),
                        ArrowDown: new point_1.Point(0, 1),
                        ArrowUp: new point_1.Point(0, -1)
                    };
                    this.stack = [];
                    this.body = [];
                    this.currentSpeed = 2;
                    this.initialLength = 5;
                    this.nodeSize = 10;
                    this.updateSpeedOn = 10;
                    var origin = new point_1.Point(this.canvasWidth / 2, this.canvasHeight / 2);
                    var key = 'ArrowRight';
                    for (var i = 0; i < this.initialLength; i++) {
                        this.body.push(new point_1.Point(origin.x, origin.y, this.nodeSize));
                        this.stack.push(key);
                    }
                }
                Snake.prototype.draw = function (key, food) {
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
                };
                Snake.prototype.updateSpeed = function () {
                    if (this.length() % this.updateSpeedOn === 0) {
                        this.currentSpeed++;
                    }
                };
                Snake.prototype.addOperation = function (key) {
                    this.stack.unshift(key);
                    this.stack.pop();
                };
                Snake.prototype.moveSnake = function () {
                    this.moveHead();
                    this.moveTail();
                };
                Snake.prototype.moveHead = function () {
                    var head = this.body[0];
                    var op = this.stack[0];
                    var translation = this.translations[op].multiply(this.currentSpeed);
                    this.translate(head, translation);
                    head.draw(this.ctx);
                };
                Snake.prototype.moveTail = function () {
                    var index = 1;
                    while (index < this.body.length) {
                        var prevNode = this.body[index - 1];
                        var node = this.body[index];
                        node.x = prevNode.x;
                        node.y = prevNode.y;
                        var op = this.stack[index - 1];
                        var translation = this.translations[op].multiply(-1 * this.currentSpeed);
                        this.translate(node, translation);
                        node.draw(this.ctx);
                        index++;
                    }
                };
                Snake.prototype.addNode = function () {
                    var last = this.body[this.body.length - 1];
                    var lastOp = this.stack[this.stack.length - 1];
                    var newNode = new point_1.Point(last.x, last.y, last.size);
                    this.body.push(newNode);
                    this.stack.push(lastOp);
                };
                Snake.prototype.translate = function (node, translation) {
                    node.x += translation.x;
                    node.y += translation.y;
                    node.x = this.checkBounds(node.x, 0, this.canvasWidth - this.nodeSize);
                    node.y = this.checkBounds(node.y, 0, this.canvasHeight - this.nodeSize);
                };
                Snake.prototype.checkBounds = function (num, min, max) {
                    if (num <= min) {
                        return min;
                    }
                    else if (num >= max) {
                        return max;
                    }
                    else {
                        return num;
                    }
                };
                Snake.prototype.length = function () {
                    return this.body.length;
                };
                Snake.prototype.speed = function () {
                    return this.currentSpeed;
                };
                return Snake;
            }());
            exports_1("Snake", Snake);
        }
    };
});
//# sourceMappingURL=snake.js.map