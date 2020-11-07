//添加用户
const { Product } = require("../../../mongodb/product");
module.exports = async(req, res) => {
    // res.render("./admin/product/productclassify.ejs")

    let page = Number(req.query.page) || 1;

    let size = Number(req.query.size) || 3;

    let total = await Product.countDocuments({ "cate_id": "女装" });

    let startpage = (page - 1) * size;

    let totalpage = Math.ceil(total / size)

    const result = await Product.find({ "cate_id": "女装" }).limit(size).skip(startpage);

    res.render("./admin/product/productclassifynv", {
        lists: result,
        page: page,
        size: size,
        total: total,
        totalpage: totalpage
    })
}