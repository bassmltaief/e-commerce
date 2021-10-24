const Product = require("../models/productModel");

const addProduct = async (req, res) => {
  const { name, image, category, Price, countInStock } = req.body;
  try {
    let product = await Product.findOne({ Article });

    //1 check if the product already exist
    if (product)
      return res.status(400).json([{ msg: "product already exist" }]);

    //2 create a new product
    product = new Product({ name, image, category, Price, countInStock });
    //3 save the product
    await product.save();

    res.send({
      product,
    });
  } catch (error) {
    console.error(error);
  }
};

const modifiedProduct = async (req, res) => {
  // const { Article, Image, Description, Price ,Category } = req.body
  const productId = req.params.id;
  try {
    let product = await Product.findByIdAndUpdate(
      productId,
      { ...req.body },
      { new: true }
    );
   
    res.send(product);
    
  } catch (error) {
    res.send([{ msg: "failed to update" }]);
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    let product = await Product.findByIdAndDelete(productId);
    res.send(product);
  } catch (error) {
    res.send([{ msg: "failed to delete" }]);
  }
};

module.exports = { addProduct, modifiedProduct, deleteProduct };
