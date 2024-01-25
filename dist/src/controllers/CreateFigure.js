"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const PublicFigure_1 = __importDefault(require("../models/PublicFigure"));
const createFigure = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const PublicFigureData = req.body;
    try {
        const publicFigure = yield PublicFigure_1.default.create(PublicFigureData);
        return res.status(http_status_codes_1.StatusCodes.CREATED).json(publicFigure);
    }
    catch (error) {
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: error.message });
    }
});
exports.default = createFigure;
