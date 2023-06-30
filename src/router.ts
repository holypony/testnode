/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from "express";
import { body } from "express-validator";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
} from "./handlers/product";
import { handleInputError } from "./modules/middleware";
import {
  createUpdate,
  deleteUpdate,
  getUpdate,
  getUpdates,
  updateUpdate,
} from "./handlers/update";

const router = Router();

router.get("/product", getProducts, (req, res) => {
  res.json({ message: "product" });
});

router.get("/product/:id", getProduct, (req, res) => {});

router.post(
  "/product",
  body("name").isString(),
  handleInputError,
  createProduct,
  (req, res) => {}
);

router.put(
  "/product/:id",
  body("name").isString(),
  handleInputError,
  (req, res) => {
    res.send("product/:id");
  }
);

router.delete("/product/:id", deleteProduct, (req, res) => {
  res.send("product/:id");
});

/**
 * Update
 */

router.get("/update", getUpdates, (req, res) => {
  res.send("product/:id");
});

router.get("/update/:id", getUpdate, (req, res) => {
  res.send("product/:id");
});

router.post(
  "/update",
  createUpdate,
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isString(),

  (req, res) => {
    res.send("product/:id");
  }
);

router.put(
  "/update/:id",
  updateUpdate,
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  body("version").optional(),
  (req, res) => {
    res.send("product/:id");
  }
);

router.delete("/update/:id", deleteUpdate, (req, res) => {
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

router.post(
  "/updatepoint",
  body("name").isString(),
  body("description").isString(),
  body("updateId").exists().isString(),
  (req, res) => {
    res.send("product/:id");
  }
);

router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  (req, res) => {
    res.send("product/:id");
  }
);

router.delete("/updatepoint/:id", (req, res) => {
  res.send("product/:id");
});

export default router;
