var request = require("request");
var _ = require("underscore");
var wmCtrl = {};
var config = require("../config/config");

wmCtrl.searchProduct = function (req, response) {
    var query = "&query=" + req.body.product;
    var url = config.wallMartUrl + query;
    //console.log(url);
    var options = {
        url: url

    };

    function callback(error, res, body) {
        if (!error && res.statusCode == 200) {
            var product = JSON.parse(body);
            var data = getFilteredData(product.items);
            //console.log(data);
            response.send(data);

        } else {
            response.send(error);
        }
    }

    request(options, callback);
};

function getFilteredData(products){
    var filteredOutput = [];
    //console.log(products);
    _.each(products,function(item){
        var product = _.pick(item,'salePrice','shortDescription','thumbnailImage','name');
        //console.log(product);
        filteredOutput.push(product);
    });
    return filteredOutput;
}

module.exports = wmCtrl;
