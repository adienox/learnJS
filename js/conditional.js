const x = 11;
// if statement like in C so not shown

const color = x > 10 ? 'red' : 'blue';

switch (color) {
	case 'red':
		console.log('It is red');
		break;
	case 'blue':
		console.log('It is blue');
		break;
	default:
		console.log('It is not red nor blue');
		break;
}
