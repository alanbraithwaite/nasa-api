export default class Apod {
  constructor(data) {
    this.copyright = data.copyright || ''
    this.date = data.date
    this.explanation = data.explanation
    this.media_type = data.media_type
    this.service_version = data.service_version
    this.title = data.title
    this.url = data.url
    this.hdurl = data.hdurl || ''

  }
}
