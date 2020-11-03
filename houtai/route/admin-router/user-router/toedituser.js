const { User } = require("../../../mongodb/user");
module.exports = (req, res) => {
    console.log(req.body);
    let obj = req.body;
    User.updateOne({ "_id": req.query.id }, obj).then((result) => {
        // console.log(result);
        res.redirect("/admin/userlist")
    });
}