"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoCategoriaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductoCategoriaController = class ProductoCategoriaController {
    constructor(productoRepository) {
        this.productoRepository = productoRepository;
    }
    async getCategoria(id) {
        return this.productoRepository.categoria(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/productos/{id}/categoria', {
        responses: {
            '200': {
                description: 'Categoria belonging to Producto',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Categoria) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductoCategoriaController.prototype, "getCategoria", null);
ProductoCategoriaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ProductoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProductoRepository])
], ProductoCategoriaController);
exports.ProductoCategoriaController = ProductoCategoriaController;
//# sourceMappingURL=producto-categoria.controller.js.map