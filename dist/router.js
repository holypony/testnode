"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const product_1 = require("./handlers/product");
const middleware_1 = require("./modules/middleware");
const update_1 = require("./handlers/update");
const router = (0, express_1.Router)();
router.get("/product", product_1.getProducts, (req, res) => {
    res.json({ message: "product" });
});
router.get("/product/:id", product_1.getProduct, (req, res) => { });
router.post("/product", (0, express_validator_1.body)("name").isString(), middleware_1.handleInputError, product_1.createProduct, (req, res) => { });
router.put("/product/:id", (0, express_validator_1.body)("name").isString(), middleware_1.handleInputError, (req, res) => {
    res.send("product/:id");
});
router.delete("/product/:id", product_1.deleteProduct, (req, res) => {
    res.send("product/:id");
});
/**
 * Update
 */
router.get("/update", update_1.getUpdates, (req, res) => {
    res.send("product/:id");
});
router.get("/update/:id", update_1.getUpdate, (req, res) => {
    res.send("product/:id");
});
router.post("/update", update_1.createUpdate, (0, express_validator_1.body)("title").exists().isString(), (0, express_validator_1.body)("body").exists().isString(), (0, express_validator_1.body)("productId").exists().isString(), (req, res) => {
    res.send("product/:id");
});
router.put("/update/:id", update_1.updateUpdate, (0, express_validator_1.body)("title").optional(), (0, express_validator_1.body)("body").optional(), (0, express_validator_1.body)("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(), (0, express_validator_1.body)("version").optional(), (req, res) => {
    res.send("product/:id");
});
router.delete("/update/:id", update_1.deleteUpdate, (req, res) => {
    res.send("product/:id");
});
/**
 * UpdatePoint
 */
router.get("/updatepoint", (req, res) => {
    res.send("product/:id");
});
router.get("/updatepoint/:id", (req, res) => {
    res.send("product/:id");
});
router.post("/updatepoint", (0, express_validator_1.body)("name").isString(), (0, express_validator_1.body)("description").isString(), (0, express_validator_1.body)("updateId").exists().isString(), (req, res) => {
    res.send("product/:id");
});
router.put("/updatepoint/:id", (0, express_validator_1.body)("name").optional().isString(), (0, express_validator_1.body)("description").optional().isString(), (req, res) => {
    res.send("product/:id");
});
router.delete("/updatepoint/:id", (req, res) => {
    res.send("product/:id");
});
exports.default = router;
//# sourceMappingURL=router.js.map