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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUpdate = exports.updateUpdate = exports.createUpdate = exports.getUpdates = exports.getUpdate = void 0;
const db_1 = __importDefault(require("../db"));
const getUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const update = yield db_1.default.update.findUnique({
        where: {
            id: req.params.id,
        },
    });
});
exports.getUpdate = getUpdate;
const getUpdates = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield db_1.default.product.findMany({
        where: {
            belongsToId: req.user.id,
        },
        include: {
            updates: true,
        },
    });
    const updates = products.reduce((acc, product) => {
        return [...acc, ...product.updates];
    }, []);
    res.json({ data: updates });
});
exports.getUpdates = getUpdates;
const createUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { productId } = _a, rest = __rest(_a, ["productId"]);
    const product = yield db_1.default.product.findUnique({
        where: {
            id: productId,
        },
    });
    if (!product) {
        res.json({ message: "nope" });
    }
    const update = yield db_1.default.update.create({
        data: rest,
    });
    res.json({ data: update });
});
exports.createUpdate = createUpdate;
const updateUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield db_1.default.product.findMany({
        where: {
            belongsToId: req.user.id,
        },
        include: {
            updates: true,
        },
    });
    const updates = products.reduce((acc, product) => {
        return [...acc, ...product.updates];
    }, []);
    const match = updates.find((update) => update.id === req.params.id);
    if (!match) {
        //handle error
        return res.json({ message: "nope" });
    }
    const updateUpdate = yield db_1.default.update.update({
        where: {
            id: req.params.id,
        },
        data: req.body,
    });
    res.json({ data: updateUpdate });
});
exports.updateUpdate = updateUpdate;
const deleteUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield db_1.default.product.findMany({
        where: {
            belongsToId: req.user.id,
        },
        include: {
            updates: true,
        },
    });
    const updates = products.reduce((acc, product) => {
        return [...acc, ...product.updates];
    }, []);
    const match = updates.find((update) => update.id === req.params.id);
    if (!match) {
        //handle error
        return res.json({ message: "nope" });
    }
    const deleted = yield db_1.default.update.delete({
        where: {
            id: req.params.id,
        },
    });
    res.json({ data: deleted });
});
exports.deleteUpdate = deleteUpdate;
//# sourceMappingURL=update.js.map