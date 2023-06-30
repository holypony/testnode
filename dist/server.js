"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const auth_1 = require("./modules/auth");
const router_1 = __importDefault(require("./router"));
const user_1 = require("./handlers/user");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//app.get("/todo/:id", myMiddleware, my2ndMiddleware, handler);
app.get("/", (req, res) => {
    throw new Error("oops");
});
app.use("/api", auth_1.protect, router_1.default);
app.post("/user", user_1.createNewUser);
app.post("/signin", user_1.signin);
// app.listen(port, () => {
//   console.log(process.argv);
//   return console.log(`Express is listening at http://localhost:${port}`);
// });
exports.default = app;
//# sourceMappingURL=server.js.map