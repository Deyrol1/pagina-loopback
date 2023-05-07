"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Postear = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Postear = class Postear extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Postear.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Postear.prototype, "detalle", void 0);
Postear = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Postear);
exports.Postear = Postear;
//# sourceMappingURL=postear.model.js.map