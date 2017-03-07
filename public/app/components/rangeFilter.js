angular.module("components")
    .filter("princeRange", [function () {

        return function (products, criteria) {
            //console.log(products);
            //console.log(criteria);
            var filteredProducts = [];
            angular.forEach(products, function (item) {
                if (item.salePrice >= parseInt(criteria.price)) {
                    filteredProducts.push(item);
                }
            });
            if (criteria.price != undefined) {
                return filteredProducts;
            } else {
                return products;
            }
        };
            }]);
