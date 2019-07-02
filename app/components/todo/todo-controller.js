import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function drawTodos() {
	//WHAT IS MY PURPOSE?
	let todoElem = document.querySelector('#todos')
	let todo = _todoService.Todos
	document.querySelector("#todo-count").innerHTML = todo.length.toString()
	let template = ''
	todo.forEach(t => template += t.Template)
	todoElem.innerHTML = template
	console.log("am i drawing?")
}

// function _drawError() {
// 	console.error('[TODO ERROR]', _todoService.TodoError)
// 	//document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
// }
export default class TodoController {
	constructor() {
		_todoService.addSubscriber('todos', drawTodos)
		_todoService.getTodos()
		// Don't forget to add your subscriber
		console.log("todo controller")
	}

	addTodo(e) {
		e.preventDefault()
		let form = e.target
		let todo = {
			// DONT FORGET TO BUILD YOUR TODO OBJECT
			description: form.description.value
		}
		form.reset()
		_todoService.addTodo(todo)
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}
}
