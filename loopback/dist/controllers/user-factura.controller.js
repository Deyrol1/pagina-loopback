"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFacturaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const authentication_1 = require("@loopback/authentication");
let UserFacturaController = class UserFacturaController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async find(id, filter) {
        return this.userRepository.facturas(id).find(filter);
    }
    async create(id, factura) {
        return this.userRepository.facturas(id).create(factura);
    }
    async patch(id, factura, where) {
        return this.userRepository.facturas(id).patch(factura, where);
    }
    async delete(id, where) {
        return this.userRepository.facturas(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.get)('/users/{id}/facturas', {
        responses: {
            '200': {
                description: 'Array of User has many Factura',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Factura) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserFacturaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/users/{id}/facturas', {
        responses: {
            '200': {
                description: 'User model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Factura) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Factura, {
                    title: 'NewFacturaInUser',
                    exclude: ['id'],
                    optional: ['userId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserFacturaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/users/{id}/facturas', {
        responses: {
            '200': {
                description: 'User.Factura PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Factura, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Factura))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserFacturaController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/users/{id}/facturas', {
        responses: {
            '200': {
                description: 'User.Factura DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Factura))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserFacturaController.prototype, "delete", null);
UserFacturaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository])
], UserFacturaController);
exports.UserFacturaController = UserFacturaController;
//# sourceMappingURL=user-factura.controller.js.map