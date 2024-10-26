/*-------------------------------- Constants --------------------------------*/
const myQuestions = [ 
{
  question: "What is the first step in a park development project?",
  answers: {
    a: "Landuse Planning",
    b: "Environmental Impact Assessment",
    c: "Design",
    d: "Funding",
  },
  correctAnswer: "a: Landuse Planning"
},
{
  question: "What is the first step that a park development manager take decide if the project requires Environmental Impact Assessment?",
  answers: {
    a: "Check with the Park Planning team",
    b: "Consult the nature groups",
    c: "Email National Biodiversity Centre",
    d: "Refer to Enviromental Impact Assessment Framework and submit Form A",
  },
  correctAnswer: "d: Refer to Enviromental Impact Assessment Framework and submit Form A" 
},
{
  question: "What conditions does a park development manager NOT decide when deciding on method of contracting method to develop a park? ",
  answers: {
    a: "Project timeline",
    b: "Funding",
    c: "Public Feedback",
    d: "None of the above"
  },
  correctAnswer:"d: None of the above"
},
{
  question: " Who signs off the project brief?",
answers:{
  a: "CEO",
  b: "Cluster Head",
  c: "Park Planning",
  d:" Director level of the operations team taking over",
},
 correctAnswer: "d: Director level of the operations team taking over"
},
]
const questionContainer = document.getElementById('question');
const optionaElement = document.getElementById('a')
const optionbElement = document.getElementById('b')
const optioncElement = document.getElementById('c')
const optiondElement = document.getElementById('d')
const optionsElement = document.querySelectorAll('.options')
const resultsContainer = document.getElementById('results');
const compareContainer = document.getElementById('compare');
const submitButton = document.getElementById("submit")
const scoreContainer = document.getElementById("score")
const changeQuestionButton = document.getElementById('changeQuestion')
/*---------------------------- Variables (state) ----------------------------*/

let scoreTotal = 0
let questionCounter = 0

/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
const displayquiz = () => {
  for (let i= 0; i < myQuestions.length; i++){
    // console.log(displayquiz)
  }
}
  const displayQuestion =() => {
    questionContainer.innerText = myQuestions[questionCounter].question
  }
  const displayOptiona=() => {
    optionaElement.innerText = "a: "+ myQuestions[questionCounter].answers.a
  }
  const displayOptionb=() => {
    optionbElement.innerText = "b: "+ myQuestions[questionCounter].answers.b
  }
  const displayOptionc=() => {
    optioncElement.innerText = "c: "+ myQuestions[questionCounter].answers.c
  }
  const displayOptiond=() => {
    optiondElement.innerText = "d: "+ myQuestions[questionCounter].answers.d
  }

  const displayResults =() => {
    resultsContainer.innerText = "The correct answer is " + myQuestions[questionCounter].correctAnswer
  }
  const displayScore = () => {
    scoreContainer.innerText = "Score : " + scoreTotal + " / 6"
  }

  const displayChangeQuestionButton = () => {
    changeQuestionButton.innerText = 'Next Question'
  }
  const resetDisplayResults = () => {
    resultsContainer.innerText = "",
    compareContainer.innerText = "" 
  }
  displayQuestion()
  displayOptiona()
  displayOptionb()
  displayOptionc()
  displayOptiond()
  // console.log (optionsElement)
  // displayResults()

const compareAnswer =(event)=> {
  if (event.target.innerText === myQuestions[questionCounter].correctAnswer) {
    compareContainer.innerText = "Correct ! +2 points "
    scoreTotal = scoreTotal + 2
    displayScore()
  }
  if (event.target.innerText !== myQuestions[questionCounter].correctAnswer ){
    compareContainer.innerText = "Incorrect ! no points for you. "
    displayScore()
  }
  }

  const changeQuestionCounter = ()=> {
    questionCounter= questionCounter + 1
    console.log(questionCounter)
  }
  
/*----------------------------- Event Listeners -----------------------------*/
optionsElement.forEach((option) => {
  option.addEventListener('click', (event) =>{
    displayResults()
    compareAnswer(event)
    displayChangeQuestionButton()
    displayquiz ()
  }
)})

changeQuestionButton.addEventListener('click', () =>{
      changeQuestionCounter()
      displayQuestion()
      displayOptiona()
      displayOptionb()
      displayOptionc()
      displayOptiond()
      resetDisplayResults()
}
)
