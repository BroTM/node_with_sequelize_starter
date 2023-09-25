"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../database/mysql"));
class User extends sequelize_1.Model {
    get fullName() {
        return this.first_name + this.last_name;
    }
}
User.init({
    user_id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: new sequelize_1.DataTypes.STRING(25),
        allowNull: false
    },
    last_name: {
        type: new sequelize_1.DataTypes.STRING(25),
        allowNull: true
    },
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE,
}, {
    tableName: 'users',
    sequelize: mysql_1.default // passing the `sequelize` instance is required
});
exports.default = User;
