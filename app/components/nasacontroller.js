import NasaService from "./nasaservice.js";

let _nasaService = new NasaService();

function _draw(objApod) {
  let template = ''
  if (objApod.media_type == 'image')
    template = `
      <img src = "${objApod.url}" >
        <p> Title: ${objApod.title}</p>

        <p> Copyright: ${objApod.copyright}</p>
        <p>Explanation: ${objApod.explanation}</p>
`
  else
    template = `
      <video src = "${objApod.url}" controls></video>
        <p> Title: ${objApod.title}</p>
        <p>Explanation: ${objApod.explanation}</p>
`

  document.getElementById("apod").innerHTML = template;
}

export default class NasaController {
  constructor() {
    console.log("from nasa controller")
    _nasaService.getApod(_draw, null);

  }

  // getApod(date) {
  //   _nasaService.getApod(_draw, date);
  // }
  getApod(_imageDate = '') {
    _nasaService.getApod(_draw, _imageDate);
  }
}