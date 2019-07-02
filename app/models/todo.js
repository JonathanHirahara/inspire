export default class Todo {
  constructor(data) {
    this.completed = data.completed
    this._id = data._id
    this.description = data.description
    console.log("todo")
  }
  get Template() {
    if (this.completed == false) {
      return `
    <div class="row text-center">
       <div class="col-4 d-flex border border-dark">
          <div class="card">
             <div class="card-body">
    
    <li>${this.description}</li>
  
    <button class="btn btn-sm btn-primary" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">Completed?</button>
</div>
   </div>
      </div>
         </div>
    `
    } else {
      return `
     <div class="row text-center">
    <div class="col-3  d-flex border border-dark">
    <div class="card">
     <div class="card-body">
  
    <li>${this.description}</li>
  
<button class="btn btn-sm btn-primary" onclick="app.controllers.todoController.removeTodo('${this._id}')">Delete</button>
</div>
</div>
</div>
    </div>
      `
    }
  }
}