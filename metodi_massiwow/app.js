/*Дано: массив чисел const numbers = [5, 10, 15, 20, 25].
 Используя map, создайте новый массив,
 где каждый элемент будет увеличен на 3.
Ожидаемый результат: [8, 13, 18, 23, 28]*/

const numbers = [5, 10, 15, 20, 25];
//Создать новый массив. Добавить 3 к каждому числу.
const newNumbers = numbers.map(number => number + 3);
console.log(newNumbers); // Результат: [8, 13, 18, 23, 28].



/*Дан массив строк const words = ["apple", "banana", "cherry", "date"].
 Используя метод map, создайте новый массив,
  который будет содержать длины каждой строки 
  из исходного массива.
Ожидаемый результат: [5, 6, 6, 4]*/

const words = ["apple", "banana", "cherry", "date", "pear"];

// Создать новый массив, содержащий длины каждой строки
const wordLengths = words.map(word => word.length);

console.log(wordLengths); // Результат: [5, 6, 6, 4, 4]



/*Дан массив объектов с информацией о товарах:
const products = [
    { name: "laptop", price: 1000 },
    { name: "phone", price: 600 },
    { name: "tablet", price: 450 }
];
Используя map, создайте новый массив,
 где каждый объект будет содержать 
 только name товара и price с 20%-ной скидкой.

Ожидаемый результат:
[
    { name: "laptop", price: 800 },
    { name: "phone", price: 480 },
    { name: "tablet", price: 360 }
]*/

const products = [
    { name: "laptop", price: 1000 },
    { name: "phone", price: 600 },
    { name: "tablet", price: 450 }
];


// Создать новый массив с 20%-ной скидкой на цену
const discountedProducts = products.map(product => ({
    name: product.name,
    price: product.price * 0.8
}));

console.log(discountedProducts);
/* Результат:
[   { name: "laptop", price: 800 },
    { name: "phone", price: 480 },
    { name: "tablet", price: 360 } ]*/
