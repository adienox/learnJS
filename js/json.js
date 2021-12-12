const todo = [
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

const todoJSON = JSON.stringify(todo);

console.log(todoJSON);
