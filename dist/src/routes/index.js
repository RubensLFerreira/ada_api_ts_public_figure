"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateFigure_1 = __importDefault(require("../controllers/CreateFigure"));
const GetAllFigures_1 = __importDefault(require("../controllers/GetAllFigures"));
const router = (0, express_1.Router)();
router.route('/').get(GetAllFigures_1.default).post(CreateFigure_1.default);
exports.default = router;
