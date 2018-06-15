
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

    app.use(express.static('public'));

    app.get('index.html', function (req, res) {
        res.sendFile(__dirname + '/' + index.html);
    })

    app.post('/process_post', urlencodedParser, function (req, res) {
        var response = {
            names: req.body.names,
            passwords: req.body.passwords
        }
    })
}