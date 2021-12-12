const ul = document.querySelector('.items');

//ul.remove();
ul.firstElementChild.remove();
ul.children[1].textContent = 'Hello';
ul.lastElementChild.innerHTML = '<h1>World</h1>';

