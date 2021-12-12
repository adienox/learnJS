const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const form = document.querySelector('#my-form');
const ul = document.querySelector('#users');

document.querySelector('.items').remove();

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
	e.preventDefault();

	if(nameInput.value === '' || emailInput.value ==='') {
		msg.classList.remove('hidden');
		msg.innerHTML = 'Please input values';

		setTimeout(() => msg.classList.add('hidden'), 3000);
	} else {
		//creating li
		const li = document.createElement('li');

		//adding value inside li
		li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

		//adding li to ul
		ul.appendChild(li);

		//clear fields
		nameInput.value = '';
		emailInput.value = '';
	}
}
