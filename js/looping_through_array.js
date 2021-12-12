const todos = [
	{
		id: 1,
		task: 'Take out trash',
		isCompleted: true
	},
	{
		id: 2,
		task: 'Movie',
		isCompleted: true
	},
	{
		id: 3,
		task: 'Party tonight',
		isCompleted: false
	}
]

//Not recommended
for(let i = 0; i <= todos.length; i++) {
	console.log(todos[i]);
}

//Slightly better
for(let todo of todos) {
	console.log(todo);
}

//Recommended way
todos.forEach(function(todo) {
	console.log(todo);
});

console.log('Start');
todos.forEach((todo) => console.log(todo));
console.log('End');

//Returns an array
const todoTask = todos.map(function(todo) {
	return todo.task;
});

console.log(todoTask);

const todoCompleted = todos.filter(function(todo) {
	return todo.isCompleted === true;
});

console.log(todoCompleted);
