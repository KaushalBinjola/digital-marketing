let app = angular.module('Blogs', []);

let controller = function ($scope) {
    $scope.message = "Angular";
}

app.controller("MainController", function ($scope) {
    $scope.list = [
        { image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/63021c32544989.568a0ce900a76.gif", title: "Indian Cricket", author: "Ram Sinha", occupation: "Cricketer", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam felis, tempus nec lobortis at, convallis vitae ante. Ut in placerat enim, non fringilla mauris. Orci varius natoque penatibus et.", type: "Cricket", anchor: "#" },
        { image: "https://i.pinimg.com/originals/3e/fd/68/3efd687b0b5210b6018dd56fd304aa50.gif", title: "Women Football", author: "Ryan", occupation: "Football Enthusiast", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam felis, tempus nec lobortis at, convallis vitae ante. Ut in placerat enim, non fringilla mauris. Orci varius natoque penatibus et.", type: "Football", anchor: "#" },
        { image: "https://cdn.dribbble.com/users/1640928/screenshots/5051628/marathon_4x3.gif", title: "Pro Run", author: "Jay Andrew", occupation: "Marathon runner", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam felis, tempus nec lobortis at, convallis vitae ante. Ut in placerat enim, non fringilla mauris. Orci varius natoque penatibus et.", type: "Running", anchor: "#" },
        { image: "https://i.pinimg.com/originals/64/41/61/644161b5ce15397473f2c4a49620ee8f.gif", title: "Yoga Benefits", author: "Lucy Anderson", occupation: "Yoga Instructor", content: "If you’ve done your “downward dog” yoga pose today, you’re probably feeling more relaxed. Regardless of your level of yoga expertise, if you’re practicing regularly, you can feel better from head to toe. Yoga offers physical and mental health benefits for people of all ages. And, if you’re going through an illness, recovering from surgery or living with a chronic condition, yoga can become an integral part of your treatment and potentially hasten healing. A yoga therapist can work with patients and put together individualized plans that work together with their medical and surgical therapies. That way, yoga can support the healing process and help the person experience symptoms with more centeredness and less distress.", type: "Yoga", anchor: "yoga-benefits.html" },
        { image: "https://stylesatlife.com/wp-content/uploads/2019/05/Yoga-Poses-For-Children-Steps-Benefits.jpg.webp", title: "Kids Yoga", author: "Karen Philip", occupation: "Yoga instructor", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam felis, tempus nec lobortis at, convallis vitae ante. Ut in placerat enim, non fringilla mauris. Orci varius natoque penatibus et.", type: "Yoga", anchor: "#" },
        { image: "https://images.herzindagi.info/image/2021/Jun/Dog-yoga-m_g.jpg", title: "Dog Yoga", author: "Michael Hound", occupation: "Yoga instructor", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam felis, tempus nec lobortis at, convallis vitae ante. Ut in placerat enim, non fringilla mauris. Orci varius natoque penatibus et.", type: "Yoga", anchor: "#" }
    ];

})
