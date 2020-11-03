const express = require("express");
const router = express.Router();

//登录
router.get("/login", require("./admin-router/user-router/login"))

// 用户登录
router.post("/tologin", require("./admin-router/user-router/tologin"))

//退出
router.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/admin/user-router/login")
})

//用户列表
router.get("/userlist", require("./admin-router/user-router/userlist"))

//添加用户
router.get("/adduser", require("./admin-router/user-router/adduser"))

//添加用户提交数据
router.post("/toadduser", require("./admin-router/user-router/toadduser"))

//修改用户
router.get("/edituser", require("./admin-router/user-router/edituser"))

//修改用户提交数据
router.post("/toedituser", require("./admin-router/user-router/toedituser"))

//删除用户
router.post("/deleuser", require("./admin-router/user-router/deleuser"))

//搜索用户
router.get("/searchuser", require("./admin-router/user-router/searchuser"))




//商品列表
router.get("/productlist", require("./admin-router/product-touter/productlist"))

//添加商品
router.get("/productadd", require("./admin-router/product-touter/productadd"))

//添加商品提交数据
router.post("/toproudctadd", require("./admin-router/product-touter/toproudctadd"))

//修改商品
router.get("/productedit", require("./admin-router/product-touter/productedit"))
    //修改商品提交数据
router.post("/toproductedit", require("./admin-router/product-touter/toproductedit"))
    //删除商品
router.post("/productdel", require("./admin-router/product-touter/productdel"))

//搜索商品
router.get("/searchproduct", require("./admin-router/product-touter/searchproduct"))




module.exports = router