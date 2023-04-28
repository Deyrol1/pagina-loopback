"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogoDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'catalogo',
    connector: 'mysql',
    url: '',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'catalogo'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let CatalogoDataSource = class CatalogoDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
CatalogoDataSource.dataSourceName = 'catalogo';
CatalogoDataSource.defaultConfig = config;
CatalogoDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.catalogo', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], CatalogoDataSource);
exports.CatalogoDataSource = CatalogoDataSource;
//# sourceMappingURL=catalogo.datasource.js.map