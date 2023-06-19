const { Observable } = require('@nativescript/core')
let dog = "cat"
//global.name = "pppx" // FLAG #2
//let globalModel
//global.name = globalModel.name
//global.name = getName()

exports.onLoaded = args => {
  const namePage = args.object
  const model = new Observable({}) // {}
  model.set("name", "")  // trying to figure out how to set this to a variable that can be passed!
  namePage.bindingContext = model
  setName(namePage.bindingContext)
  global.name = namePage.bindingContext.get("name")
 // global.name = "catcat"  //WORKS!! //namePage.bindingContext.name // FLAG #1
  //global.name = toString(model.get("name"))
  //alert(model.get("name"))
}

function setName (model){
global.name =  toString(model.get("name"))
}

function getName (){
  return global.name
  }

exports.onAlertButtonTap = args => {
  alert(model.get("name"))
}

exports.onNextButtonTap = args => {
  const button = args.object
  const page = button.page
  //global.name = "pppz" // FLAG #3
  page.frame.navigate('1.1-birthday')
}

/* SPECIFIC REFERENCE TO THE BUTTON Past button tap */
exports.onLastButtonTap = args => {
  const button = args.object
  const page = button.page
  page.frame.navigate('main-page')
}