import db from "../db";

export const getProducts = async (req, res) => {
  const user = await db.user.findUnique({
    where: { id: req.user.id },
    include: {
      products: true,
    },
  });
  res.json({ data: user.products });
};

export const getProduct = async (req, res) => {
  const id = req.params.id;

  const product = await db.product.findFirst({
    where: {
      id,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: product });
};

export const createProduct = async (req, res) => {
  const product = await db.product.create({
    data: {
      name: req.body.name,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: product });
};

export const updateProduct = async (req, res) => {
  const updated = await db.product.update({
    where: { id: req.params.id },
    data: {
      name: req.body.name,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: updated });
};

export const deleteProduct = async (req, res) => {
  const deleted = await db.product.delete({
    where: {
      id_belongsToId: {
        id: req.params.id,
        belongsToId: req.user.id,
      },
    },
  });

  res.json({ data: deleted });
};
