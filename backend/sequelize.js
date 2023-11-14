"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// sequelize initialization
// development mode
exports.sequelize = new sequelize_1.Sequelize((_a = process.env.DB_DATABASE) !== null && _a !== void 0 ? _a : "prueba", (_b = process.env.DB_USER) !== null && _b !== void 0 ? _b : "root", (_c = process.env.DB_PASSWORD) !== null && _c !== void 0 ? _c : "", {
    host: (_d = process.env.DB_HOST) !== null && _d !== void 0 ? _d : "localhost",
    dialect: "mysql",
});
