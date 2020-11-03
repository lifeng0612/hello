//用户列表
const { User } = require("../../../mongodb/user");
module.exports = async(req, res) => {
    // console.log(req.query);

    let page = Number(req.query.page) || 1;

    let size = Number(req.query.size) || 3;

    let total = await User.countDocuments({});
    // console.log(total);

    let startpage = (page - 1) * size;

    let totalpage = Math.ceil(total / size);

    const result = await User.find({}).limit(size).skip(startpage);
    // console.log(result);

    res.render("./admin/user/userlist.ejs", {
        lists: result,
        page: page,
        size: size,
        total: total,
        totalpage: totalpage
    });
};