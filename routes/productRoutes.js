import express from "express";
import { createProduct,getAllProducts,getProductById, updateProduct, deleteProduct,deleteAllProducts } from "../controllers/productController.js";
import userAuthCheck from "../middleware/authCheck.js";


const productrouter = express.Router();

userAuthCheck();

productrouter.post("/", createProduct);
productrouter.get("/", getAllProducts);
productrouter.get("/:id", getProductById);
productrouter.put("/:id", updateProduct);
productrouter.delete("/:id", deleteProduct);
productrouter.delete("/", deleteAllProducts);

export default productrouter;
