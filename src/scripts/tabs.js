import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
window.Stimulus = Application.start()

Stimulus.register("tabs", class extends Controller {
  static targets = [ "tab", "panel" ]
  static values = { index: Number }

  initialize() {
    this.showTab()
  }

  change(event) {
    event.preventDefault()
    this.indexValue = this.tabTargets.indexOf(event.currentTarget)
    this.showTab()
  }

  showTab() {
    this.panelTargets.forEach((el, index) => {
      index == this.indexValue ? el.classList.remove("hidden") : el.classList.add("hidden")
    })
    this.tabTargets.forEach((el, index) => {
      index == this.indexValue ? el.classList.add("bg-white") : el.classList.remove("bg-white")
    })
  }
})