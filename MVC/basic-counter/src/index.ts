import MutableNumberModel from './model'
import MutableNumberView from './view'
import MutableNumberController from './controller'

const model = new MutableNumberModel(33)
const view = new MutableNumberView(model)
const controller = new MutableNumberController(model, view)

document.body.appendChild(view.renderInitial())
