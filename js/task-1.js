/*white
З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

1 Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
2 Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль 
текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).


На що буде звертати увагу ментор при перевірці:

Кількість категорій, їх назва та кількість елементів отримані за допомогою властивостей і методів DOM-елементів
Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach()
У консолі має бути виведено наступне повідомлення:*/

const item = document.querySelectorAll("li.item");
console.log(`Number of categories: ${item.length}`);

for (const it of item) {
    const h = it.querySelector("h2");
    console.log(`Category: ${h.textContent}`);
    const list = it.querySelectorAll("ul>li");
    console.log(`Elements: ${list.length}`);
        }


