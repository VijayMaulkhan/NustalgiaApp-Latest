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
    transitionWords: [
      { word: "Amazing" },
      { word: "Astonishing" },
      { word: "Astounding" },
      { word: "Inspiring" },
      { word: "Breathtaking" },
      { word: "Magnificient" },
      { word: "Fascinating" },
      { word: "Incredible" },
      { word: "Marvelous" },
      { word: "Wonderful" },
      { word: "Admirable" },
      { word: "Brilliant" },
      { word: "Cool" },
      { word: "Excellent" },
      { word: "Great" },
      { word: "Unreal" }
    ],
    questions: [
      { question: "Who are you and what's your relationship to Max?" },
      { question: "Why do you love Max?" },
      { question: "What's your favourite memory with Max?" },
      { question: "What's your best Max impression?" },
      { question: "What are your final birthday wishes to Max?" },
    ],

  }
}

exports.getQuestions = args => {
  const questions = ["Who ssare you and what's your relationship to Max?",
  "Why do you love Max?","What's your favourite memory with Max?",
  "What's your best Max impression?",
  "What are your final birthday wishes to Max?"]

  return questions
}

/* SPECIFIC REFERENCE TO THE BUTTON Past button tap */
exports.onLastQuestionButtonTap = args => {
  const button = args.object
  const page = button.page
  alert('Sorry bozo, your clown friend has yet to add functionality here :(')
}

exports.onNextQuestionButtonTap = args => {
  const button = args.object
  const page = button.page
  alert('Sorry you psycho, your clown friend has yet to add functionality here :(')
}

/* SPECIFIC REFERENCE TO THE BUTTON Past button tap */
exports.onLastButtonTap = args => {
  const button = args.object
  const page = button.page
  page.frame.navigate('1-birthday')
}

