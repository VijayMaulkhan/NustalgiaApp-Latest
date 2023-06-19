/* SPECIFIC REFERENCE TO THE BUTTON Past button tap */
const karamjitQuestions = [
  "Who are you and what's your relationship to Dana?" ,
  "Why do you love Dana?",
  "What's your favourite memory with Dana?",
  "What's your best Dana impression?",
  "What are your final birthday wishes to Dana?" 
]

exports.onLoaded = args => {
  const button = args.object
  const page = button.page
  const nextQuestion = karamjitQuestions[1]

  page.bindingContext ={
    message: nextQuestion,/*"Welcome to Yustalgia V, please select event type:" *//* Quesitons can go here */
    questions: [
      { question: "Who are you and what's your relationship to Dana?" },
      { question: "Why do you love Dana?" },
      { question: "What's your favourite memory with Dana?" },
      { question: "What's your best Dana impression?" },
      { question: "What are your final birthday wishes to Dana?" },
    ],
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
    ]
  }
}

/* SPECIFIC REFERENCE TO THE BUTTON Past button tap */
exports.onLastQuestionButtonTap = args => {
  const button = args.object
  const page = button.page
  page.frame.navigate('2-beginInterview')   /* page.frame.navigate('page2','.\page2\page2') */
}

exports.onNextQuestionButtonTap = args => {
  const button = args.object
  const page = button.page
  page.frame.navigate('2.2-BIQ2')   /* page.frame.navigate('page2','.\page2\page2') */
}

/* SPECIFIC REFERENCE TO THE BUTTON Past button tap */
exports.onCancelButtonTap = args => {
  const button = args.object
  const page = button.page
  page.frame.navigate('1.1-birthday')
}

/* Reset */
exports.onResetButtonTap = args => {
  const button = args.object
  const page = button.page
  page.frame.navigate('2-beginInterview')
}