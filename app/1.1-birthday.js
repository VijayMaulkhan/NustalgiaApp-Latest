/* SPECIFIC REFERENCE TO THE BUTTON Past button tap */
let karamjitQuestions = [
"Who are you and what's your relationship to Danay?",
"Why do you love Dana?",
"What's your favourite memory with Dana?",
"What's your best Dana impression?",
"What are your final birthday wishes to Dana?"]

exports.onLoaded = args => {
  const button = args.object
  const page = button.page
  const initialQuestion = global.name /* karamjitQuestions[0] + "LOL" */

  page.bindingContext ={
    messagez: initialQuestion,/*"Welcome to Yustalgia V, please select event type:" *//* Quesitons can go here */
    questions: [
      { question: "Who are you and what's your relationship to Danzay?" },
      { question: "Why do you love Dana?" },
      { question: "What's your favourite memory with Dana?" },
      { question: "What's your best Dana impression?" },
      { question: "What are your final birthday wishes to Dana?" },
    ]
  }
}

exports.previewInterviewTap = args => {
  const button = args.object
  const page = button.page
  page.frame.navigate('2-previewInterview')
}

exports.modifyInterviewTap = args => {
  const button = args.object
  const page = button.page
  alert('Sorry sis, your clown friend has yet to add functionality here :(')
}

exports.beginInterviewTap = args => {
  const button = args.object
  const page = button.page
  page.frame.navigate('2-beginInterview')
}

/* SPECIFIC REFERENCE TO THE BUTTON Past button tap */
exports.onLastButtonTap = args => {
  const button = args.object
  const page = button.page
  page.frame.navigate('main-page')
}