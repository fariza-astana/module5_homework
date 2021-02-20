// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
let string = "Hello";
let reverseString = string.split('').reverse().join('');

console.log(reverseString); 