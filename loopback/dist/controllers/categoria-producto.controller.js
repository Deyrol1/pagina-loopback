"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaProductoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CategoriaProductoController = class CategoriaProductoController {
    constructor(categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }
    async find(id, filter) {
        return this.categoriaRepository.productos(id).find(filter);
    }
    async create(id, producto) {
        return this.categoriaRepository.productos(id).create(producto);
    }
    async patch(id, producto, where) {
        return this.categoriaRepository.productos(id).patch(producto, where);
    }
    async delete(id, where) {
        return this.categoriaRepository.productos(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/categorias/{id}/productos', {
        responses: {
            '200': {
                description: 'Array of Categoria has many Producto',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Producto) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriaProductoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/categorias/{id}/productos', {
        responses: {
            '200': {
                description: 'Categoria model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Producto) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Producto, {
                    title: 'NewProductoInCategoria',
                    exclude: ['id'],
                    optional: ['categoriaId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriaProductoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/categorias/{id}/productos', {
        responses: {
            '200': {
                description: 'Categoria.Producto PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Producto, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Producto))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriaProductoController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/categorias/{id}/productos', {
        responses: {
            '200': {
                description: 'Categoria.Producto DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Producto))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoriaProductoController.prototype, "delete", null);
CategoriaProductoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CategoriaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CategoriaRepository])
], CategoriaProductoController);
exports.CategoriaProductoController = CategoriaProductoController;
//# sourceMappingURL=categoria-producto.controller.js.map