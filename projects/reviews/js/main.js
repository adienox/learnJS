const name = document.querySelector('.name');
const job = document.querySelector('.job');
const image = document.querySelector('img');
const text = document.querySelector('p');
const btns = document.querySelectorAll('.btn');

const reviews = [
	{
		id: 1,
		name: 'Alex Suprun',
		job: 'Photographer',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		image: 'images/av1.jpg'
	},
	{
		id: 2,
		name: 'Vicky Hladynets',
		job: 'UX Designer',
		text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi.',
		image: 'images/av2.jpg'
	},
	{
		id: 3,
		name: 'Julian Wan',
		job: 'Manager',
		text: 'Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.',
		image: 'images/av3.jpg'
	},
	{
		id: 4,
		name: 'Nicolas Horn',
		job: 'Product designer',
		text: 'Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante.',
		image: 'images/av4.jpg'
	},
	{
		id: 5,
		name: 'Leio McLaren',
		job: 'HR',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.',
		image: 'images/av5.jpg'
	}
]

let count = 0;
let review = reviews[count];

function getRandomInt(max){
	return Math.floor(Math.random() * max);
};

btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const classes = e.currentTarget.classList;
		if(classes.contains('prev')){
			count -= 1;
		} else if(classes.contains('next')){
			count += 1;
		} else {
			count = getRandomInt(reviews.length);
		}
		if(count > 4){
			count = 0;
		}
		if(count < 0){
			count = 4;
		}
		review = reviews[count];
		image.src = review.image;
		name.innerHTML = review.name;
		job.innerHTML = review.job;
		text.innerHTML = review.text;
	});
});
