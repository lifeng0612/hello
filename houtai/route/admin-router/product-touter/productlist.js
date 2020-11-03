//用户列表
const { Product } = require("../../../mongodb/product");
module.exports = async(req, res) => {

    let page = Number(req.query.page) || 1;

    let size = Number(req.query.size) || 3;

    let total = await Product.countDocuments({});

    let startpage = (page - 1) * size;

    let totalpage = Math.ceil(total / size)

    const result = await Product.find({}).limit(size).skip(startpage);

    res.render("./admin/product/productlist", {
        lists: result,
        page: page,
        size: size,
        total: total,
        totalpage: totalpage
    })
};