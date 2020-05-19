import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "item" ]
  connect(){
    console.log('con')
    console.log(this.itemTarget)
  }
  run(){
    let left = 0
    setInterval(() => {
      if (left >= 300){
        clearInterval(this.refreshTimer)
      }else{
        left += 1
        this.itemTarget.style.left = left + "px"
      }
    }, 20)
  }
}
