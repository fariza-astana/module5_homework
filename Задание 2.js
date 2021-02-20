//Дана переменная Х, которая может принимать любое значение. 
//Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».
//Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».

let x = "String";
if (typeof x == "string") {
    console.log("x is a string")
} else if ( typeof x == "number") {
    console.log("x is a number")
} else if ( typeof x == "boolean") {
    console.log("x is a Boolean")
} else {
    console.log("Тип х не определен")
}