import HttpError from "../helpers/httpError.js";
import { Product } from "../models/Product.js";


export const createProduct = async (req, res, next) => {
    try {

        if (req.userData.userRole !== "admin") {
            return next(new HttpError("Unauthorized: Admin access required", 403));
        }
        

        const { name, category, colour, price, quantity, description } = req.body;

        if (!name || !category || !colour || !price || !quantity || !description) {
            return next(new HttpError("All fields are required", 400));
        }


        const newProduct = new Product({
            name,
            category,
            colour,
            price,
            quantity,
            description,
        });

        await newProduct.save();

        return res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: newProduct,
        });

    } catch (error) {
        return next(new HttpError(error.message || "Internal Server Error", 500));
    }

};

export const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        return res.status(200).json({
            success: true,
            message: "Products retrieved successfully",
            data: products,
        });
    } catch (error) {
        return next(new HttpError(error.message || "Internal Server Error", 500));
    }
};


export const getProductById = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);

        if (!product) {
            return next(new HttpError("Product not found", 404));
        }
        return res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            data: product,
        });
    } catch (error) {
        return next(new HttpError(error.message || "Internal Server Error", 500));
    }
};


export const updateProduct = async (req, res, next) => {
    try {
        if (req.userData.userRole !== "admin") {
            return next(new HttpError("Unauthorized: Admin access required", 403));
        }
        const productId = req.params.id;
        const { name, category, colour, price, quantity, description } = req.body;
        const product = await Product.findByIdAndUpdate(
            productId,
            { name, category, colour, price, quantity, description },
            { new: true }
        );

        if (!product) {
            return next(new HttpError("Product not found", 404));
        }

        return res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: product,
        });
    } catch (error) {
        return next(new HttpError(error.message || "Internal Server Error", 500));
    }
};

export const deleteProduct = async (req, res, next) => {
    try {
        if (req.userData.userRole !== "admin") {
            return next(new HttpError("Unauthorized: Admin access required", 403));
        }
        const productId = req.params.id;
        const product = await Product.findByIdAndDelete(productId);

        if (!product) {
            return next(new HttpError("Product not found", 404));
        }

        return res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: product,
        });
    } catch (error) {
        return next(new HttpError(error.message || "Internal Server Error", 500));
    }
};

export const deleteAllProducts = async (req, res, next) => {
    try {
        if (req.userData.userRole !== "admin") {
            return next(new HttpError("Unauthorized: Admin access required", 403));
        }
        const result = await Product.deleteMany({});
        return res.status(200).json({
            success: true,
            message: "All products deleted successfully",
            data: result,
        });
    } catch (error) {
        return next(new HttpError(error.message || "Internal Server Error", 500));
    }
};
