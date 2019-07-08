export default class Quote {
  constructor(data) {
    this.text = data.quote.body
    this.author = data.quote.author
  }
  get Template() {
    return `
   <div class="col-12 d-flex justify-content-center align-items-center">
     <div class="">
         <blockquote class="blockquote mb-1">
            <p>"${this.text}"</p>
          <footer clas="blockquote-footer"><cite title="Source Title">${this.author}</cite></footer>
       </blockquote>
     </div>
  </div>
      `
  }

}