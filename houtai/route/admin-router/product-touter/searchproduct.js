const { Product } = require("../../../mongodb/product")

module.exports = async(req, res) => {
    console.log(req.query);

    let page = Number(req.query.page) || 1;

    let size = Number(req.query.size) || 2;

    let min = Number(req.query.price1) || 0;

    let max = Number(req.query.price2) || 1000000000;

    let total = await Product.countDocuments({
        title: new RegExp(req.query.title, "gi"),
        price: { $gte: min, $lte: max }
    });
    console.log(total);

    let startpage = (page - 1) * size;

    let totalpage = Math.ceil(total / size);

    const result = await Product.find({
        title: new RegExp(req.query.title, "gi"),
        price: { $gte: min, $lte: max }
    }).limit(size).skip(startpage);

    res.render("./admin/product/searchproduct", {
        lists: result,
        page: page,
        size: size,
        total: total,
        totalpage: totalpage,
        price1: req.query.price1,
        price2: req.query.price2,
        title: req.query.title
    })
}