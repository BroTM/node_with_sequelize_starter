"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../database/mysql"));
const router = (0, express_1.Router)();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/checking_db_connection', (req, res, next) => {
    console.log(mysql_1.default);
});
exports.default = router;
// module.exports = router;
