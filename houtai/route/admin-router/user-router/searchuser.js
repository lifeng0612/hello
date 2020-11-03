const { User } = require("../../../mongodb/user");

module.exports = async(req, res) => {
    let page = Number(req.query.page) || 1;

    let size = Number(req.query.size) || 2;

    let total = await User.countDocuments({ username: new RegExp(req.query.username, "gi") });

    let startpage = (page - 1) * size

    let totalpage = Math.ceil(total / size)

    const result = await User.find({ username: new RegExp(req.query.username, "gi") }).limit(size).skip(startpage);
    console.log(result);
    res.render("./admin/user/searchuser", {
        lists: result,
        page: page,
        size: size,
        total: total,
        totalpage: totalpage,
        username: req.query.username
    })
}