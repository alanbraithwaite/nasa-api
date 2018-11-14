import Apod from "./models/apod.js";

// @ts-ignore
let _nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/'
})
let _apiwithKey = 'apod?api_key=hAOiq3DnmcK9YxzDAlryCe022LSxNMAcxxPiFvrs'
let _apiDate = 'date='


export default class NasaService {
  constructor(_date) {
    _apiDate += _date || '';
  }

  getApod(_draw, img_date) {
    let requestString = _apiwithKey;
    if (_apiDate.length > 5) {
      requestString += '&' + _apiDate;
    };

    _nasaApi.get(requestString)
      .then(res => {
        let _apod = new Apod(res.data);
        _draw(_apod);
      })
      .catch(err => {
        console.log(err);
      });
  }
}