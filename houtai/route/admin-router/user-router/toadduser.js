const { User } = require("../../../mongodb/user");
const md5 = require("md5");
module.exports = async(req, res) => {
    let userInfo = {
        username: req.body.username,
        password: md5(req.body.password),
        age: req.body.age,
        sex: req.body.sex,
        address: req.body.address
    }
    let result = await User.create(userInfo)
    console.log(result);
    if (result) {
        res.redirect("/admin/userlist");
    }
}