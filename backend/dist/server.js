"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.status(200).send("Hello World");
    return;
});
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
