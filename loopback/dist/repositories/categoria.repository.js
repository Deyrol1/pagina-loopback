"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let CategoriaRepository = class CategoriaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, productoRepositoryGetter) {
        super(models_1.Categoria, dataSource);
        this.productoRepositoryGetter = productoRepositoryGetter;
        this.productos = this.createHasManyRepositoryFactoryFor('productos', productoRepositoryGetter);
        this.registerInclusionResolver('productos', this.productos.inclusionResolver);
    }
};
CategoriaRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.catalogo')),
    tslib_1.__param(1, repository_1.repository.getter('ProductoRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.CatalogoDataSource, Function])
], CategoriaRepository);
exports.CategoriaRepository = CategoriaRepository;
//# sourceMappingURL=categoria.repository.js.map