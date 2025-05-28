import products from "../Models/ProductSchema.js";

// Function to create a new product
export const createProduct = async (req, res) => {
  try {
    const newProducts = new products(req.body); // Create a new product instance with the request body
    await newProducts.save(); // Save the new product to the database
    res.status(200).json({
      message: "Product created successfully",
      data: newProducts,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get all products
export const getAllProducts = async (req, res) => {
  try {
    const getProduct = await products.find();
    res.status(200).json({
      message: "Products fetched successfully",
      data: getProduct,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get a product by ID
export const getProductsByID = async (req, res) => {
  try {
    const productId = req.params.id;
    const productDetail = await products.findById(productId);
    if (!productDetail) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
      message: "Product fetched successfully",
      data: productDetail,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to update a product by ID
export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, price } = req.body;
    const result = await products.findByIdAndUpdate(
        productId,
      { name, price },
      { new: true }
    );
    if (!result) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
      message: "Product updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//Function to delete a product by ID
export const deleteProduct=async(req,res)=>{
    try {
        const productId = req.params.id;
        const result = await products.findByIdAndDelete(productId);
        if (!result) {
            return res.status(404).json({ message: "Product not found" });
        }
        const product=await products.find();
        res.status(200).json({
            message: "Product deleted successfully",
            data: product,
        });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}