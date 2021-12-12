const btn = document.querySelector('.btn');
const nameField = document.querySelector('#name');

//nameField.addEventListener('click', (e) => {
//	document.querySelector('.items').remove();
//});

btn.addEventListener('click', (e) => {
	e.preventDefault();
	//document.querySelector('#my-form').style.background = '#555';
	document.querySelector('body').classList.add('bg-dark');
});
