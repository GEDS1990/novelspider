var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {
        isShowNav:true,
        isShowCategory:false,
        title: '首页',
        subtitle: '长兴小说',
        content: '请搜索'
    })
});
module.exports = router;
