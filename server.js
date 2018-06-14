
// 表单提交
form_submit();

function form_submit() {
    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');

    // 创建编码解析
    var urlencodedParser = bodyParser.urlencodeed({
        extended: false
    });

    app.use('/index')
}