export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.kelvin = data.main.temp
  }
  get Template() {
    let kelvins = this.kelvin
    let fahrenheit = 1.8 * (kelvins - 273) + 32
    return `
    	<div class="card" style="width: 10rem; text-white">
				<div class="card-body d-flex justify-content-center">
					<h1 class="card-title"><b>${Math.round(fahrenheit)}</b></h1>
				<h6><b>${this.city}</b></h6>
				</div>
			</div>
    `
  }
}