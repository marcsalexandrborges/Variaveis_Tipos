function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); // Remover caracteres não alfanuméricos e tornar minúsculas
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

const string1 = "arara";
const string2 = "javascript";

console.log("Antes do primeiro log");
console.log(isPalindrome(string1)); // true
console.log(isPalindrome(string2)); // false
console.log("Depois do segundo log");
