var request = require("request");
var _ = require("underscore");
var wmCtrl = {};
var config = require("../config/config");

wmCtrl.searchProduct = function (req, response) {
    var query = "&query="+req.body.product;
    var options = {
        url:config.wallMartUrl+query
    };

    function callback(error,res, body){
        if(!error && res.statusCode == 200){
            var products = JSON.parse(body);
            response.send(getFilteredData(products.items));
        }else{
            response.send(error);
        }
    }
    request(options, callback);
};

function getFilteredData(products){
    var filteredOutput = [];
    console.log(products);
    _.each(products,function(item){
        var product = _.pluck(item,'salePrice','shortDescription','thumbnailImage','name');
        console.log(product);
    });
    return filteredOutput;
}

module.exports = wmCtrl;
