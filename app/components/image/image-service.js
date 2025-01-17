// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	image: {}
}
let _subscribers = {
	image: []
}
function setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())
}

export default class ImageService {
	constructor() {

	}

	get Image() {
		return _state.image
	}

	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}

	getImage() {
		imgApi.get()
			.then(res => {
				console.log("image request", res.data)
				setState("image", res.data.large_url)
			})
			.catch(err => console.error(err))
	}

}
