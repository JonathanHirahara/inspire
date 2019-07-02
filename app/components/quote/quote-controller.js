import QuoteService from "./quote-service.js";

let _quoteService = new QuoteService()

function drawQuote() {
  let quoteElem = document.querySelector("#quote")
  let quote = _quoteService.Quote
  quoteElem.innerHTML = quote.Template
}

export default class QuoteController {
  constructor() {
    _quoteService.addSubscriber('quote', drawQuote)
    _quoteService.getQuote()
  }
}
