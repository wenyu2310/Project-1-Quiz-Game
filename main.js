/*-------------------------------- Questions --------------------------------*/
const pmQuestions = [ 
{
  question: "1. What is the first step in a park development project?",
  answers: {
    a: "Landuse Planning",
    b: "Environmental Impact Assessment",
    c: "Design",
    d: "Funding",
  },
  correctAnswer: "a: Landuse Planning"
},
{
  question: "2. What is the first step that a park development manager take decide if the project requires Environmental Impact Assessment?",
  answers: {
    a: "Check with the Park Planning team",
    b: "Consult the nature groups",
    c: "Email National Biodiversity Centre",
    d: "Refer to Enviromental Impact Assessment Framework and submit Form A",
  },
  correctAnswer: "d: Refer to Enviromental Impact Assessment Framework and submit Form A" 
},
{
  question: "3. What conditions does a park development manager NOT decide when deciding on method of contracting method to develop a park? ",
  answers: {
    a: "Project timeline",
    b: "Funding",
    c: "Public Feedback",
    d: "None of the above"
  },
  correctAnswer:"d: None of the above"
},
]

const cmQuestions = [
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

/*-------------------------------- Constants --------------------------------*/
const startContainer = document.getElementById('start');
const startMessage = document.getElementById('startmsg');
const startButton = document.getElementById('startbutton')

const scoreContainer = document.getElementById("score");

const questionContainer = document.getElementById('question');
const optionsElement = document.querySelectorAll('.options')
const optionaElement = document.getElementById('a');
const optionbElement = document.getElementById('b');
const optioncElement = document.getElementById('c');
const optiondElement = document.getElementById('d');

const compareContainer = document.getElementById('compare');
const resultsContainer = document.getElementById('results');

const changeQuestionButton = document.getElementById('changeQuestion');

/*---------------------------- Variables (state) ----------------------------*/

let scoreTotal = 0
let questionCounter = 0

/*------------------------ Cached Element References ------------------------*/
const displayStart = () => {
  startMessage.innerText = "Build a Nature Park Quiz"
  startButton.innerText = "Start"
}
const init = () =>{
  displayStart()
}
init()

const displayquiz = () => {
  for (let i= 0; i < pmQuestions.length; i++){
    // console.log(displayquiz)
  }
}
/*-------------------------------- Functions --------------------------------*/


  const displayQuestion =() => {
    questionContainer.innerText = pmQuestions[questionCounter].question
  }
  const displayOptiona=() => {
    optionaElement.innerText = "a: "+ pmQuestions[questionCounter].answers.a
  }
  const displayOptionb=() => {
    optionbElement.innerText = "b: "+ pmQuestions[questionCounter].answers.b
  }
  const displayOptionc=() => {
    optioncElement.innerText = "c: "+ pmQuestions[questionCounter].answers.c
  }
  const displayOptiond=() => {
    optiondElement.innerText = "d: "+ pmQuestions[questionCounter].answers.d
  }

  const displayResults =() => {
    resultsContainer.innerText = "The correct answer is " + pmQuestions[questionCounter].correctAnswer
  }
  const displayScore = () => {
    scoreContainer.innerText = "Score : " + scoreTotal + " / 6"
  }

  const displayChangeQuestionButton = (questionCounter,pmQuestions) => {
    if (questionCounter < (pmQuestions.length-1) ){
    changeQuestionButton.innerText = 'Next Question'
  }
  if (questionCounter === pmQuestions.length-1){
    changeQuestionButton.innerText = 'Completed Category'
  }  
}

  const removeStart =() => {
    startMessage.innerText = ""
  startButton.innerText = ""
  }
  const resetDisplayResults = () => {
    resultsContainer.innerText = "",
    compareContainer.innerText = "" 
  }
  const resetChangeQuestionButton =() => {
    changeQuestionButton.innerText=""
  }


const compareAnswer =(event)=> {
  if (event.target.innerText === pmQuestions[questionCounter].correctAnswer) {
    compareContainer.innerText = "Correct ! +2 points "
    scoreTotal = scoreTotal + 2
    displayScore()
  }
  if (event.target.innerText !== pmQuestions[questionCounter].correctAnswer ){
    compareContainer.innerText = "Incorrect ! no points for you. "
    displayScore()
  }
  }

  const changeQuestionCounter = ()=> {
    questionCounter= questionCounter + 1
    console.log(questionCounter)
  }
  
/*----------------------------- Event Listeners -----------------------------*/
startButton.addEventListener('click', () =>{
  displayQuestion()
  displayOptiona()
  displayOptionb()
  displayOptionc()
  displayOptiond()
  removeStart()
}
)
optionsElement.forEach((option) => {
  option.addEventListener('click', (event) =>{
    displayResults()
    compareAnswer(event)
    displayChangeQuestionButton(questionCounter,pmQuestions)
    displayquiz ()
  }
)})

changeQuestionButton.addEventListener('click', () =>{
  if( questionCounter < pmQuestions.length-1){
      changeQuestionCounter()
      displayQuestion()
      displayOptiona()
      displayOptionb()
      displayOptionc()
      displayOptiond()
      resetDisplayResults()
      resetChangeQuestionButton()
  }
}
)


