const productsRouter = require("express").Router();

const {
    createProduct,
  updateProduct,
  getAllProducts,
  getProductById,
  destroyProduct,
} = require("../db/adapters/products");


productsRouter.post("/", async (req, res, next) =>)  {
    try {
        const { name, price, description, stock } = req.body;
        const createdProduct = await createProduct({
            name,
            price,
            description,
            stock,
        });
        res.send(createdProduct);
    }  catch (error)  {
        next(error);
    }};



productsRouter.patch("/:id", authRequired, async (req, res, next) => {
        const { id } = req.params;
        const { name, price, description, stock, id } = req.body;
        try {
            const order = await getProductById(+id);
            if (+req.products.id === order.id) {
                const updatedProduct = await updateProduct(+name, price, description, stock, id);
                res.send(updatedProduct);
            } else {
                res.send("Update unsuccessful");
            }
        } catch (error) {
            next(error);
        }
    });



productsRouter.get("/", async (req, res, next) => {
        try {
          const users = await getAllProducts();
          res.send(products);
        } catch (error) {
          next(error);
        }
      });  


      
productsRouter.delete("/:id", authRequired, async (req, res, next) => {
        try {
            const { orderId } = req.params;
            if ((req.order.id = productId.id)) {
                const order = await destroyProduct(id);
                res.send(order);
            } else {
                next({ message: "Delete unsuccessful" });
            }
        } catch (error) {
            next(error);
        }
    });
















module.exports = productsRouter;
