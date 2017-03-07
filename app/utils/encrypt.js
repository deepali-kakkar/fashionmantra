var crypto = require("crypto");

var encrypt = function(input) {
    console.log(input);
    var md5 = crypto.createHash('md5');
    return md5.update(input).digest('hex');
};

module.exports = encrypt;