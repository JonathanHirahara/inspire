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
    <div class="row text-center text-white">
       <div class="col-4 d-flex">
          <div class="card">
             <div class="">
    
    <li>${this.description}</li>
  
    <button class="btn btn-sm btn-primary " onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">Done?</button>
</div>
   </div>
      </div>
         </div>
    `
    } else {
      return `
     <div class="row text-center text-white">
    <div class="col-3  d-flex ">
    <div class="card">
     <div class="">
  
    <li>${this.description}</li>
  
<button class="btn btn-sm btn-danger" onclick="app.controllers.todoController.removeTodo('${this._id}')">Delete</button>
</div>
</div>
</div>
    </div>
      `
    }
  }
}