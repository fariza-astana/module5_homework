// Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
  console.log(getRandomNumber(0, 101))