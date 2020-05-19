import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "output" ]

  bang() {
    this.outputTarget.innerHTML += "<div>bang ⭐️</div>"
  }
}
