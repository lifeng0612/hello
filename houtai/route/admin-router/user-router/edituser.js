//修改用户
const { User } = require("../../../mongodb/user");
module.exports = (req, res) => {
    // console.log(req.query);
    User.findOne({ "_id": req.query.id }).then(result => {
        // console.log(result);
        res.render("./admin/user/edituser.ejs", {
            edituser: result
        })
    })
}