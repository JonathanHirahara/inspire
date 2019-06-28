export default class Todo {
  constructor(data) {
    // this.completed = data.completed
    this._id = data._id
    this.description = data.description

    console.log("todo")


  }
  get Template() {
    return `
    <div class="card">
    <ol>
    <li>${this.description}</li>
    <li>${this._id}</li>
    <li>${this.completed}</pli>
    </ol>
    </div>
    `
  }
}