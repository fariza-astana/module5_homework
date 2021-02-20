//Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
//Используйте шаблонные строки.
let jobs = new Map();
jobs.set("Maxim", "teacher");
jobs.set("Marzhan", "doctor");
jobs.set("Nikolai", "developer");
jobs.set("Dimash", "singer");

  for (let [key, value] of jobs) {
    console.log(`Ключ - ${key}, значение - ${value}`);
  }
