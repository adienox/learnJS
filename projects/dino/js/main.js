const character = document.querySelector('.character');
const block = document.querySelector('.block');

function jump(){
	character.classList.add('jump');
	setTimeout(() => character.classList.remove('jump'), 500);
}

function keydetect(event){
	if(event.keyCode === 32){
		jump();
	}
}

setInterval( () => {
	const characterTop = parseInt(getComputedStyle(character).top);
	const blockLeft = parseInt(getComputedStyle(block).left);
	if(blockLeft <= 20 && blockLeft >= 0 && characterTop > 380){
		block.style.animation = 'none';
		alert('Game Over');
	}
}, 10);
