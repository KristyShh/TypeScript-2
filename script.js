var users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
];
//1. Создать строку из имен пользователей через запятую
var names = users.map(function (user) { return user.name; }).join(", ");
console.log(names);
//2. Подсчитать общее количество машин у пользователей
var carsCount = users.reduce(function (acc, user) { return user.cars ? acc + user.cars.length : acc; }, 0);
console.log(carsCount);
//3. Создать функцию, которая бы принимала массив пользователей и
//отфильтровывала пользователей на наличие образования
function filterByEducation(users) {
    return users.filter(function (user) { return user.hasEducation; });
}
console.log(filterByEducation(users));
//4. Создать функцию, которая бы принимала массив пользователей и
//отфильтровывала пользователей на наличие животных
function filterByAnimals(users) {
    return users.filter(function (user) { return user.animals && user.animals.length > 0; });
}
console.log(filterByAnimals(users));
//5. Создать функцию, которая бы принимала массив пользователей и отдавала бы
//строку с названиями марок автомобилей через запятую 
function getCarNames(users) {
    return users
        .filter(function (user) { return user.cars && user.cars.length > 0; })
        .map(function (user) { return user.cars ? user.cars.join(", ") : ""; })
        .join(", ");
}
console.log(getCarNames(users));
