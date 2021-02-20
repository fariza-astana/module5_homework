//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let myArray = [15, 20, 0, 40, null, 88, "programming", 12, 23, 65];
let oddNumbers = 0;
let evenNumbers = 0;
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 == 0 && !isNaN(myArray[i]) && myArray[i] != null && myArray[i] != 0) {
        oddNumbers += 1;  
    }
    else if (myArray[i] % 2 != 0 && myArray[i] != 0 && !isNaN(myArray[i])) {
        evenNumbers += 1;    
    } 
} 
console.log(oddNumbers);
console.log(evenNumbers);



