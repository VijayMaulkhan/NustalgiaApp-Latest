/* SPECIFIC REFERENCE TO THE BUTTON Past button tap */
let karamjitQuestions = [
  "What's your name and what's your relationship to REPLACE_ME?" ,
  "Why do you love Dana?",
  "What's your favourite memory with Dana?",
  "What's your best Dana impression?",
  "What are your final birthday wishes to Dana?" 
]

exports.onLoaded = args => {
  const button = args.object
  const page = button.page
  const initialQuestion = karamjitQuestions[0]

  page.bindingContext ={
    message: initialQuestion,/*"Welcome to Yustalgia V, please select event type:" *//* Quesitons can go here */
    questions: [
      { question: "Who are you and what's your relationship to Danay?" },
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

exports.getQuestions = args => {
  const questions = ["Who ssare you and what's your relationship to Dana?",
  "Why do you love Dana?","What's your favourite memory with Dana?",
  "What's your best Dana impression?",
  "What are your final birthday wishes to Dana?"]

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
  page.frame.navigate('2.1-BIQ1')   /* page.frame.navigate('page2','.\page2\page2') */
}

/* SPECIFIC REFERENCE TO THE BUTTON Past button tap */
exports.onCancelButtonTap = args => {
  const button = args.object
  const page = button.page
  page.frame.navigate('1.1-birthday')
}

exports.currentlyDisplayQuestion = args => {

  return "hello from JS"
}