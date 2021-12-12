const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
const counter = document.querySelector('.counter');

let count = 0;

increase.addEventListener('click', () => {
	count += 1;
	counter.innerHTML = count;
});

reset.addEventListener('click', () => {
	count = 0;
	counter.innerHTML = count;
});

decrease.addEventListener('click', () => {
	count -= 1;
	counter.innerHTML = count;
});

setInterval(() => {
	if(count > 0){
		counter.style.color = 'green';
	} else if(count < 0){
		counter.style.color = 'red';
	} else {
		counter.style.color = 'black';
	}
}, 10);
