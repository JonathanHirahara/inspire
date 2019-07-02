export default class Quote {
  constructor(data) {
    this.text = data.quote.body
    this.author = data.quote.author
  }
  get Template() {
    return `
   <div class="card">
     <div class="card-body">
         <blockquote class="blockquote mb-1">
            <p>"${this.text}"</p>
          <footer clas="blockquote-footer"><cite title="Source Title">${this.author}</cite></footer>
       </blockquote>
     </div>
  </div>
      `
  }

}