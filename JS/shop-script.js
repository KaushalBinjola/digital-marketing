let app = angular.module('Shop', []);

let controller = function ($scope) {
    $scope.message = "Angular";
}

app.controller("MainController", function ($scope) {
    $scope.list = [
        {
            image: "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png",
            title: "Nike Shoes",
            description: "Are you all ready for this.The next era of style collides with comfort. These ZX 2K Boost Shoes build on a legacy of adidas innovation that started in the 80s and hasnt stopped. By combining energy returning cushioning with progressive styling, the ZX dynasty moves into the future withrefreshed spirit.",
            sizes: ["9", "10", "11", "12"],
            price: 100
        },
        {
            image: "http://pngimg.com/uploads/barbell/barbell_PNG16339.png",
            title: "Barbell",
            description: "UA HOVR™ Machina are the best men's running shoes, and then some. Yes, they give you energy return and the speed of a Pebax® propulsion plate, but they also coach you in real-time when you connect them to UA MapMyRun®.",
            sizes: ["M", "L"],
            price: 20
        },
        {
            image: "http://pngimg.com/uploads/football_boots/football_boots_PNG52.png",
            title: "Adidas Studs",
            description: "Royal Enterprises has created a genuine niche amongst the trusted companies in the industry. The ownership type of our firm is Sole Proprietorship (Individual). ",
            sizes: ["8", "9", "10", "11", "12"],
            price: 100
        },
        {
            image: "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5821.png",
            title: "Kids Shoes",
            description: "Royal Enterprises has created a genuine niche amongst the trusted companies in the industry. The ownership type of our firm is Sole Proprietorship (Individual). ",
            sizes: ["5","6"],
            price: 50
        },
    ];

})