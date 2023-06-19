/* SPECIFIC REFERENCE TO THE BUTTON Past button tap */
exports.onLoaded = args => {
  const button = args.object
  const page = button.page
  const questionsTest = ["Who ssare you and what's your relationship to Max?",
  "Why do you love Max?","What's your favourite memory with Max?",
  "What's your best Max impression?",
  "What are your final birthday wishes to Max?"]

  page.bindingContext ={
    message: questionsTest,/*"Welcome to Yustalgia V, please select event type:" *//* Quesitons can go here */
    questions: [
      { question: "Who are you and what's your relationship to Dana?" },
      { question: "Why do you love Dana?" },
      { question: "What's your favourite memory with Dana?" },
      { question: "What's your best Dana impression?" },
      { question: "What are your final birthday wishes to Dana?" },
    ]
  }
}

exports.getQuestions = args => {
  const questions = ["Who are you and what's your relationship to Karamjit?",
  "Why do you love Karamjit?","What's your favourite memory with Karamjit?",
  "What's your best Karamjit impression?",
  "What are your final birthday wishes to Karamjit?"]

  return questions
}

/* SPECIFIC REFERENCE TO THE BUTTON Past button tap */
exports.onLastButtonTap = args => {
  const button = args.object
  const page = button.page
  page.frame.navigate('1-birthday')
}

