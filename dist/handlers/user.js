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
exports.createNewUser = exports.signin = void 0;
const db_1 = __importDefault(require("../db"));
const auth_1 = require("../modules/auth");
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("req.body.password:" + req.body.password);
    const user = yield db_1.default.user.findUnique({
        where: { username: req.body.username },
    });
    const isValid = yield (0, auth_1.comparePasswords)(req.body.password, user.password);
    if (!isValid) {
        res.status(401);
        res.send("Invalid username or password");
        return;
    }
    const token = (0, auth_1.createJWT)(user);
    res.json({ token });
});
exports.signin = signin;
const createNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hash = yield (0, auth_1.hashPassword)(req.body.password);
    const user = yield db_1.default.user.create({
        data: {
            username: req.body.username,
            password: hash,
        },
    });
    const token = (0, auth_1.createJWT)(user);
    res.json({ token });
});
exports.createNewUser = createNewUser;
//# sourceMappingURL=user.js.map