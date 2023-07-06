const productsRouter = require("express").Router();

const {
  createProduct,
  updateProduct,
  getAllProducts,
  getProductById,
  destroyProduct,
} = require("../db/adapters/products");
const { authRequired } = require("./utils");

// What endpoints are admin???

productsRouter.post("/", async (req, res, next) => {
  try {
    const { name, price, description, stock } = req.body;
    const createdProduct = await createProduct(name, price, description, stock);
    res.send({
      success: true,
      message: "Successfully created product.",
      data: createdProduct,
    });
  } catch (error) {
    next(error);
  }
});

productsRouter.patch("/:id", authRequired, async (req, res, next) => {
  const { id } = req.params;
  const { name, price, description, stock } = req.body;
  try {
    const order = await getProductById(id);
    if (order.length) {
      const updatedProduct = await updateProduct(
        name,
        price,
        description,
        stock,
        id
      );
      res.send({
        success: true,
        message: "Successfully updated product.",
        data: updatedProduct,
      });
    } else {
      next({
        name: "NotFound",
        message: "A product with that id does not exist.",
      });
    }
  } catch (error) {
    next(error);
  }
});

productsRouter.get("/", async (req, res, next) => {
  try {
    const products = await getAllProducts();
    res.send({
      success: true,
      message: "Successfully fetched products.",
      data: products,
    });
  } catch (error) {
    next(error);
  }
});

productsRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await getProductById(id);
    res.send({
      success: true,
      message: "Successfully fetched product.",
      data: product,
    });
  } catch (error) {
    next(error);
  }
});

productsRouter.delete("/:id", authRequired, async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await getProductById(id);
    if (product.length) {
      const order = await destroyProduct(id);
      res.send({
        success: true,
        message: "Successfully deleted product.",
        data: null,
      });
    } else {
      next({
        name: "NotFound",
        message: "A product with that id does not exist.",
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = productsRouter;
