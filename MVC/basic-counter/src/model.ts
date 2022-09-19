// MODEL - Describes the data and how business logic manipulates that data.
// Changes in the data will manifest in changes to the view

class MutableNumberModel {
  public value: number
  private _onChangeCallback!: Function

  constructor(value: number) {
    this.value = value
  }

  increment() {
    this.value++
    this._onChangeCallback()
  }

  decrement() {
    this.value--
    this._onChangeCallback()
  }

  registerChangeCallback(cb: Function) {
    this._onChangeCallback = cb
  }
}

export default MutableNumberModel