"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoztController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PoztController = class PoztController {
    constructor(postearRepository) {
        this.postearRepository = postearRepository;
    }
    async create(postear) {
        return this.postearRepository.create(postear);
    }
    async count(where) {
        return this.postearRepository.count(where);
    }
    async find(filter) {
        return this.postearRepository.find(filter);
    }
    async updateAll(postear, where) {
        return this.postearRepository.updateAll(postear, where);
    }
    async findById(id, filter) {
        return this.postearRepository.findById(id, filter);
    }
    async updateById(id, postear) {
        await this.postearRepository.updateById(id, postear);
    }
    async replaceById(id, postear) {
        await this.postearRepository.replaceById(id, postear);
    }
    async deleteById(id) {
        await this.postearRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/postears'),
    (0, rest_1.response)(200, {
        description: 'Postear model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Postear) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Postear, {
                    title: 'NewPostear',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PoztController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/postears/count'),
    (0, rest_1.response)(200, {
        description: 'Postear model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Postear)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PoztController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/postears'),
    (0, rest_1.response)(200, {
        description: 'Array of Postear model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Postear, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Postear)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PoztController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/postears'),
    (0, rest_1.response)(200, {
        description: 'Postear PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Postear, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Postear)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Postear, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PoztController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/postears/{id}'),
    (0, rest_1.response)(200, {
        description: 'Postear model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Postear, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Postear, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PoztController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/postears/{id}'),
    (0, rest_1.response)(204, {
        description: 'Postear PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Postear, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Postear]),
    tslib_1.__metadata("design:returntype", Promise)
], PoztController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/postears/{id}'),
    (0, rest_1.response)(204, {
        description: 'Postear PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Postear]),
    tslib_1.__metadata("design:returntype", Promise)
], PoztController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/postears/{id}'),
    (0, rest_1.response)(204, {
        description: 'Postear DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PoztController.prototype, "deleteById", null);
PoztController = tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PostearRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PostearRepository])
], PoztController);
exports.PoztController = PoztController;
//# sourceMappingURL=pozt.controller.js.map