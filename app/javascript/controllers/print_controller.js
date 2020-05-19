import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "output", "input" ]

  connect() {
    this.outputTarget.textContent = 'Hello, Stimulus!'
  }
  copy() {
    this.outputTarget.textContent = this.inputTarget.value
  }
}
