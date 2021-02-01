"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabase = void 0;
exports.getDatabase = () => {
    const MySql = require('sync-mysql');
    var connection = new MySql({
        host: 'localhost',
        user: 'root',
        password: 'marex',
        database: 'isilav'
    });
    return connection;
};
//# sourceMappingURL=test.js.map