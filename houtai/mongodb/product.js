const mongoose = require("mongoose");
require("./database")


//创建一个用户集合
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "商品名不能为空"],
        minlength: 3,
        maxlength: 18,
        trim: true
    },
    cate_id: {
        type: String
    },
    pic: {
        type: String
    },
    price: {
        type: Number
    },
    postage: {
        type: Number
    },
    description: String
})

//使用集合规则创建集合
const Product = mongoose.model("Product", ProductSchema);

//暴露
module.exports = {
    Product
}