const { Product } = require("../../../mongodb/product");

let formidable = require("formidable");
let path = require("path")
console.log(formidable);
module.exports = (req, res) => {
    //1、创建一个表单解析对象
    let form = new formidable.IncomingForm()
        //2、配置上传文件存放位置，放置在public文件夹下面的uploads
    form.uploadDir = path.join(__dirname, "../", '../', '../', "public", "uploads");
    //3、保存上传文件的后缀
    form.keepExtensions = true
    form.parse(req, async(err, fields, files) => {
        console.log(fields); //文本数据
        //console.log(files);   //文件信息
        console.log(files.pic.path.split("public")[1]);
        let result = await Product.create({
            title: fields.title,
            pic: files.pic.path.split("public")[1],
            cate_id: fields.cate_id,
            postage: fields.postage,
            price: fields.price,
            description: fields.description
        })
        if (result) {
            res.redirect("/admin/productlist")
        }
    })
}