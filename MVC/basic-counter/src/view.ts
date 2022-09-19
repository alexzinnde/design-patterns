// VIEW - Describes how the MODEL is rendered to the UI and invokes the
// controller whenever there is an ation that needs to occur.

import MutableNumberModel from './model'

class MutableNumberView {
  private _model: MutableNumberModel
  handleIncrement!: Function
  handleDecrement!: Function
  container!: HTMLDivElement
  numberSpan!: HTMLSpanElement
  incrementButton!: HTMLButtonElement
  decrementButton!: HTMLButtonElement

  constructor(model: MutableNumberModel) {
    this._model = model
  }

  registerIncrementHandler(cb: Function) {
    this.handleIncrement = cb
  }

  registerDecrementHandler(cb: Function) {
    this.handleDecrement = cb
  }

  renderUpdate() {
    this.numberSpan.textContent = this._model.value.toString()
  }

  renderInitial() {
    this.container = document.createElement('div')
    this.numberSpan = document.createElement('span')
    this.incrementButton = document.createElement('button')
    this.decrementButton = document.createElement('button')

    this.incrementButton.textContent = '+'
    this.decrementButton.textContent = '-'
    this.incrementButton.onclick = () => this.handleIncrement()
    this.decrementButton.onclick = () => this.handleDecrement()

    this.container.appendChild(this.decrementButton)
    this.container.appendChild(this.numberSpan)
    this.container.appendChild(this.incrementButton)
    this.renderUpdate()
    return this.container
  }
}

export default MutableNumberView
