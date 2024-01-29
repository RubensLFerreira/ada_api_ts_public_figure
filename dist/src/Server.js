"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const figuresRoutes_1 = __importDefault(require("./routes/figuresRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: true }));
server.use('/public-figure', figuresRoutes_1.default);
server.use('/user', userRoutes_1.default);
exports.default = server;
