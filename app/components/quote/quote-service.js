import Quote from "../../models/quote.js";

// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});
let _state = {
	quote: {}
}
let _subscribers = {
	quote: []
}
function setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())
}

export default class QuoteService {
	getQuote() {
		_quoteApi.get()
			.then(res => {
				let quote = new Quote(res.data)
				setState('quote', quote)
				console.log("say what", res.data)
			})
	}
	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}
	get Quote() {
		return _state.quote
	}
}
