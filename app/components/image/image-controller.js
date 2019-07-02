import ImageService from "./image-service.js";

const _imageService = new ImageService()

function drawImage() {

  let image = _imageService.Image
  document.body.style.backgroundImage = `url(${image})`

}

export default class ImageController {
  constructor() {
    _imageService.addSubscriber("image", drawImage)
    _imageService.getImage()

  }

}

