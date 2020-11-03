const { User } = require("../../../mongodb/user");
module.exports = (req, res) => {
    console.log(req.body);
    User.findOneAndDelete({ "_id": req.body.id }).then(() => {
        res.redirect("/admin/userlist")
    })
}