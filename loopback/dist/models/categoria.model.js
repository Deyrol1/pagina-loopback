"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const producto_model_1 = require("./producto.model");
let Categoria = class Categoria extends repository_1.Entity {
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
], Categoria.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Categoria.prototype, "nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => producto_model_1.Producto),
    tslib_1.__metadata("design:type", Array)
], Categoria.prototype, "productos", void 0);
Categoria = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Categoria);
exports.Categoria = Categoria;
//# sourceMappingURL=categoria.model.js.map