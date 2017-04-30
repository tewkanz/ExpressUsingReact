var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendfile(path.join(global.__rootPath, '/bin/index.html'));
});
router.get('/bin/browserifiedFile.js', (req, res, next) => {
    res.sendFile(path.join(global.__rootPath,'bin/browserifiedFile.js'));
});
router.get('/bin/shell.js', (req, res, next) => {
    res.sendFile(path.join(global.__rootPath,'bin/shell.js'));
});

module.exports = router;
