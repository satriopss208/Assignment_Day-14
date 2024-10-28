"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFullName(person) {
    return "".concat(person.fisrtName, " ").concat(person.lastName);
}
console.log(getFullName({ fisrtName: 'Ini', lastName: 'Budi' }));
// Jawaban nomor 2
function wrapInArray(item) {
    return [item];
}
console.log(wrapInArray(5125));
console.log(wrapInArray(false));
console.log(wrapInArray('Rio'));
console.log(wrapInArray([1, 2, 3, 4, 5]));
console.log(wrapInArray({ brand: 'Nissan', type: 'GTR', model: 'Super Car' }));
