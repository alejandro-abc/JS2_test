// Поиск элементов
const mainDiv = document.getElementById('main');
const firstParagraph = document.querySelector('.text');
const allParagraphs = document.querySelectorAll('.text');
const buttons = document.getElementsByClassName('btn');

console.log(mainDiv);        // <div id="main">...

console.log(firstParagraph); // <p class="text">Первый...
console.log(allParagraphs);  // NodeList [p.text, p.text]
console.log(buttons);        // HTMLCollection [button.btn]