const { Product } = require("../../../mongodb/product");
module.exports = (req, res) => {
    Product.findOneAndDelete({ "_id": req.body.id }).then(() => {
        res.redirect("/admin/productlist")
    })
}