// CONTROLLER - accepts instructions from the VIEW and informs the MODEL
// what actions or changes to carry out, which will (potentially) go on to
// affect whatever is rendered to the user via the VIEW

import MutableNumberModel from './model'
import MutableNumberView from './view'

class MutableNumberController {
  model: MutableNumberModel
  view: MutableNumberView

  constructor(model: MutableNumberModel, view: any) {
    this.model = model
    this.view = view
    this.model.registerChangeCallback(() => this.view.renderUpdate())
    this.view.registerIncrementHandler(() => this.model.increment())
    this.view.registerDecrementHandler(() => this.model.decrement())
  }
}

export default MutableNumberController
