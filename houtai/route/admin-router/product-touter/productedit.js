//修改用户
const { Product } = require("../../../mongodb/product");
module.exports = (req, res) => {
    Product.findOne({ "_id": req.query.id }).then(result => {
        res.render("./admin/product/productedit.ejs", {
            productedit: result
        })
    })
}