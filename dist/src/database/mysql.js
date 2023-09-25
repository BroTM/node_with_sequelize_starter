"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require("../../config/db.config"));
const sequelize = new sequelize_1.Sequelize(db_config_1.default.database, db_config_1.default.username, db_config_1.default.password, {
    host: db_config_1.default.db_host,
    dialect: "mysql",
    timezone: db_config_1.default.timezone,
    pool: {
        max: 20,
        idle: 10000 //Remove a connection from the pool after the connection has been idle (not been used) for 10 seconds
    }
});
exports.default = sequelize;
