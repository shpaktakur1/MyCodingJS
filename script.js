'use strict';

// const box = document.getElementById('box'); // данный метод может быть только один на странице. Получаем элемент

// console.log(box); // существует только внутри браузера

// const btns = document.getElementsByTagName('button')[1]; // получили псвевдомассив. [1] - получаем только один элемент

// console.log(btns);

// const circles = document.getElementsByClassName('circle'); // метод ищет элементы через класс
// console.log(circles);

// const hearts = document.querySelectorAll('.heart'); // метод, который во внутри помещаем css-селектор

// hearts.forEach(item => {
//     console.log(item);     // item - каждый элемент находящийся в псевдомассиве
// });

// const oneHeart = document.querySelector('.heart'); // метод позволяет получить только один элемент со страницы
// console.log(oneHeart);


const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue'; 
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item =>{
    item.style.backgroundColor = 'blue';
});


const div = document.createElement('div'); // элемент существует только в JS
// const text = document.createTextNode('Тут был я') // помещаем текст в nodы 

div.classList.add('black'); // создан класс
 wrapper.append(div);            

// wrapper.prepend(div);            Эти элементы позволяют легко управлять страницей

// hearts[0].before(div);

// hearts[0].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

div.innerHTML = "<h1>Hello World!</h1>";

// div.textContent= "Hello";

div.insertAdjacentHTML("afterbegin", '<h2>Hello</h2'); //beforeend, afterend