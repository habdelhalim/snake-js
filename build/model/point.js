System.register([], function (exports_1, context_1) {
    "use strict";
    var Point;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Point = (function () {
                function Point(x, y, size) {
                    this.x = x;
                    this.y = y;
                    this.size = size;
                    if (!size) {
                        this.size = 1;
                    }
                }
                Point.prototype.multiply = function (num) {
                    return new Point(this.x * num, this.y * num);
                };
                Point.prototype.overlapsWith = function (other) {
                    if (this.x > other.x + other.size ||
                        other.x > this.x + this.size) {
                        return false;
                    }
                    if (this.y > other.y + other.size
                        || other.y > this.y + this.size) {
                        return false;
                    }
                    return true;
                };
                Point.prototype.draw = function (ctx) {
                    ctx.fillRect(this.x, this.y, this.size, this.size);
                };
                return Point;
            }());
            exports_1("Point", Point);
        }
    };
});
//# sourceMappingURL=point.js.map