"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./src/config/connection"));
const Server_1 = __importDefault(require("./src/Server"));
connection_1.default
    .authenticate()
    .then(() => {
    console.log('Connection established successfully!');
    Server_1.default.listen(8080, () => {
        console.log(`Server running at http://localhost:${process.env.PORT}`);
    });
}).catch((error) => {
    console.error(`Database connection failed: ${error}`);
});
