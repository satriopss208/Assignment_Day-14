// Jawaban nomor 1
type Person = {
    fisrtName: string;
    lastName: string;
}

function getFullName(person: Person) : string {
    

    return `${person.fisrtName} ${person.lastName}`;
}

console.log(getFullName({fisrtName : 'Ini', lastName: 'Budi'}));

// Jawaban nomor 2
function wrapInArray<T>(item : T) : T[] {
    return [item];
}
console.log(wrapInArray(5125));
console.log(wrapInArray(false));
console.log(wrapInArray('Rio'));
console.log(wrapInArray([1, 2, 3, 4, 5]));
console.log(wrapInArray({brand : 'Nissan' , type : 'GTR', model: 'Super Car'}));

export {};