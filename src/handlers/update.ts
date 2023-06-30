import db from "../db";

export const getUpdate = async (req, res) => {
  const update = await db.update.findUnique({
    where: {
      id: req.params.id,
    },
  });
  res.json({ data: update });
};
export const getUpdates = async (req, res) => {
  const products = await db.product.findMany({
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
};
export const createUpdate = async (req, res) => {
  const product = await db.product.findUnique({
    where: {
      id: req.body.productId,
    },
  });

  if (!product) {
    res.json({ message: "nope" });
  }

  const update = await db.update.create({
    data: {
      title: req.body.title,
      body: req.body.body,
      product: { connect: { id: req.body.productId } },
    },
  });

  res.json({ data: update });
};
export const updateUpdate = async (req, res) => {
  const products = await db.product.findMany({
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

  const updateUpdate = await db.update.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });

  res.json({ data: updateUpdate });
};

export const deleteUpdate = async (req, res) => {
  const products = await db.product.findMany({
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
  const deleted = await db.update.delete({
    where: {
      id: req.params.id,
    },
  });

  res.json({ data: deleted });
};
