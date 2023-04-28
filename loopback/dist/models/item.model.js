"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Item = class Item extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Item.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Item.prototype, "detalle", void 0);
Item = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Item);
exports.Item = Item;
//# sourceMappingURL=item.model.js.map