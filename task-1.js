import users from "./users.js";
// console.log(users)
// Получить массив имен всех пользователей (поле name).
const getUserNames = users => users.map((user) => {
    return user.name;
});
// твой код

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
