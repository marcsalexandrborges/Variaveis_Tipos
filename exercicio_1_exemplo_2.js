function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); // Remover caracteres não alfanuméricos e tornar minúsculas
    const reversedStr = str.split('').reverse().join('');
    console.log('Original:', str); // Mostrar a string original
    console.log('Reversed:', reversedStr); // Mostrar a string invertida
    return str === reversedStr;
}

const string1 = "arara";
const string2 = "javascript";

console.log(isPalindrome(string1)); // true
console.log(isPalindrome(string2)); // false
