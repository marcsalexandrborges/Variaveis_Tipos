function replaceEvenWithZero(array) {
    if (array.length === 0) {
        return -1;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0 && array[i] % 2 === 0) {
            array[i] = 0;
        }
    }

    console.log('Modified Array:', array); // Adiciona essa linha para mostrar o array modificado
    return array;
}

const array1 = [1, 3, 4, 6, 80, 33, 23, 90];
const array2 = [];

console.log(replaceEvenWithZero(array1)); // [1, 3, 0, 0, 0, 33, 23, 0]
console.log(replaceEvenWithZero(array2)); // -1
