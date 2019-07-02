import Todo from "../../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Jonathan/todos/',
	timeout: 3000
});

let _state = {
	todos: []

}
let _subscribers = {
	todos: []

}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	constructor() {
		console.log("todo service")
	}

	get Todos() {
		return _state.todos.map(todo => new Todo(todo))
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {

		console.log("Getting the Todo List")
		todoApi.get()
			.then(res => {
				// WHAT DO YOU DO WITH THE RESPONSE?
				console.log("getstodos", res.data)
				_setState("todos", res.data.data)
			})
			.catch(err => console.error(err))
	}

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				// WHAT DO YOU DO AFTER CREATING A NEW TODO?
				// _setState(" ", res.data)
				console.log(res.data)
				this.getTodos()
			})
			.catch(err => console.log(err))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		// Be sure to change the completed property to its opposite
		todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(res => {
				this.getTodos()
				console.log("todocompleted", todo.completed)
			})
			.catch(err => console.log(err))
	}

	removeTodo(todoId) {
		// This one is on you to write.... 
		// The http method is delete at the todoId
		todoApi.delete(todoId)
			.then(res => {
				console.log(res.data.message)
				this.getTodos()

			})
			.catch(err => console.error(err))
	}

}
