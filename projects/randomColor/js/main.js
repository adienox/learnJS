const displayer = document.querySelector('.displayer');
const btn = document.querySelector('.btn');
const body = document.querySelector('body');
const span = document.querySelector('span');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getHex() {
	let hexValue = '#';
	
	for(let i = 0; i < 6; i++){
		const placeValue = getRandomInt(16);
		hexValue += hex[placeValue];
	}

	return hexValue;
}

btn.addEventListener('click', () => {
	const hexValue = getHex();
	
	body.style.background = hexValue;
	span.innerHTML = hexValue;
});
