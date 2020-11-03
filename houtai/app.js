const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const session = require("express-session");

//实例化一个服务器对象
const app = new express();

//配置ejs模板引擎
app.set("view engine", "ejs");

//配置模板路径
app.set("views", __dirname + "/views");

app.use(express.static("public"))
    //使用bodyParser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 30 * 60 * 1000
    },
    rolling: true
}))

app.use((req, res, next) => {
    if (req.url != "/admin/login" && req.url != "/admin/tologin" && !req.session.username) {
        res.redirect("/admin/login")
    } else {
        next()
    }
})


const admin = require("./route/admin.js");
//配置路径
app.use("/admin", admin)



//监听一个端口号
app.listen(9527, () => {
    console.log("9527来了");
})