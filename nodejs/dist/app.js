"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var app = express_1.default();
const body_parser_1 = __importDefault(require("body-parser"));
const todos_1 = __importDefault(require("./routes/todos"));
app.use(body_parser_1.default.json());
app.use('/todos', todos_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
var port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
