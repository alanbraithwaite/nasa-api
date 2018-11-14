import NasaController from "./components/nasacontroller.js";



class App {
  constructor() {
    this.controller = {
      nasaController: new NasaController()

    }
  }
}

window.app = new App()