System.register(["./point"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var point_1, Food;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (point_1_1) {
                point_1 = point_1_1;
            }
        ],
        execute: function () {
            Food = (function (_super) {
                __extends(Food, _super);
                function Food(ctx, canvasHeight, canvasWidth) {
                    var _this = _super.call(this, 0, 0, 10) || this;
                    _this.ctx = ctx;
                    _this.canvasHeight = canvasHeight;
                    _this.canvasWidth = canvasWidth;
                    return _this;
                }
                Food.prototype.draw = function () {
                    var previousColor = this.ctx.fillStyle;
                    this.ctx.fillStyle = 'Red';
                    _super.prototype.draw.call(this, this.ctx);
                    this.ctx.fillStyle = previousColor;
                };
                Food.prototype.renew = function () {
                    this.x = Math.floor(Math.random() * (this.canvasWidth - this.size));
                    this.y = Math.floor(Math.random() * (this.canvasHeight - this.size));
                };
                return Food;
            }(point_1.Point));
            exports_1("Food", Food);
        }
    };
});
//# sourceMappingURL=food.js.map