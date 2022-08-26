let app = angular.module('Cart', []);

let controller = function ($scope) {
    $scope.message = "Angular";
}

app.controller("MainController", function ($scope) {
    $scope.list = [
        {
            image: "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png",
            title: "Nike Shoes",
            description: "Are you all ready for this.The next era of style collides with comfort. These ZX 2K Boost Shoes build on a legacy of adidas innovation that started in the 80s and hasnt stopped. By combining energy returning cushioning with progressive styling, the ZX dynasty moves into the future withrefreshed spirit.",
            sizes: "M",
            price: 100,
            qty: 2
        },
        {
            image: "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5821.png",
            title: "Mizucho Kids Shoes (Light Up) ",
            description: "UA HOVR™ Machina are the best men's running shoes, and then some. Yes, they give you energy return and the speed of a Pebax® propulsion plate, but they also coach you in real-time when you connect them to UA MapMyRun®.",
            sizes: "L",
            price: 120,
            qty: 1
        },
    ];
})