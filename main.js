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
  correctAnswer: "Landuse Planning",
  category : "Project Management "
},
{
  question: "2. What is the first step that a park development manager take decide if the project requires Environmental Impact Assessment?",
  answers: {
    a: "Check with the Park Planning team",
    b: "Consult the nature groups",
    c: "Email National Biodiversity Centre",
    d: "Refer to Enviromental Impact Assessment Framework and submit Form A",
  },
  correctAnswer: "Refer to Enviromental Impact Assessment Framework and submit Form A",
  category : "Project Management "
},
{
  question: "3. What conditions does a park development manager NOT decide when deciding on method of contracting method to develop a park? ",
  answers: {
    a: "Project timeline",
    b: "Funding",
    c: "Public Feedback",
    d: "None of the above"
  },
  correctAnswer:"d: None of the above",
  category : "Project Management "
},
]
const categorylist =[ 
  {
    category: 'Horticulture',
    score:[],
    selected: false,
  },
  {
    category: 'Project Management',
    score:[],
    selected: false,
  },
  {
    category: 'Contract Management',
    score:[],
    selected: false,
  },
  {
    category: 'Landscape Architecture',
    score:[],
    selected: false,
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
   correctAnswer: "Director level of the operations team taking over"
  },
]

const scoreArray = []
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

const completedCategoryButton = document.getElementById('completedCategory')

const categoryContainer= document.getElementById('categorycontainer')
const categoryElement = document.querySelectorAll('.category')


/*---------------------------- Variables (state) ----------------------------*/
let gameState = 0 
let scoreTotal = 0
let questionCounter = 0
let questionAnswered = false
let correctWrong = false



/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Display Functions --------------------------------*/
const init = () =>{
  startMessage.innerText = "Build a Nature Park Quiz"
  startButton.innerText = "Start"
}
  const removeStart =() => {
    startMessage.innerText = ""
  startButton.innerText = ""
  }

  const displayQuestion =() => {
    questionContainer.innerText = pmQuestions[questionCounter].question
  }
  const resetQuestion =() => {
    questionContainer.innerText = ""
  }


  const displayOptiona=() => {
    optionaElement.innerText = pmQuestions[questionCounter].answers.a
  }
  const resetOptiona=() => {
    optionaElement.innerText = ""
  }


  const displayOptionb=() => {
    optionbElement.innerText = pmQuestions[questionCounter].answers.b
  }
  const resetOptionb=() => {
    optionbElement.innerText = ""
  }

  const displayOptionc=() => {
    optioncElement.innerText = pmQuestions[questionCounter].answers.c
  }
  const resetOptionc=() => {
    optioncElement.innerText = ""
  }

  const displayOptiond=() => {
    optiondElement.innerText = pmQuestions[questionCounter].answers.d
  }
  const resetOptiond=() => {
    optiondElement.innerText = ""
  }


  const displayResults =() => {
    resultsContainer.innerText = "The correct answer is " + pmQuestions[questionCounter].correctAnswer
  }
  const resetDisplayResults = () => {
    resultsContainer.innerText = "",
    compareContainer.innerText = "" 
  }
  
  const displayScore = () => {
    scoreContainer.innerText = "Score : " + scoreTotal + " / 6"
  }
  const resetdisplayScore = () => {
    scoreContainer.innerText = ""
  }

  const displayChangeQuestionButton = () => {
    if (questionCounter < (pmQuestions.length-1) ){
    changeQuestionButton.innerText = 'Next Question'
  }
  if (questionCounter === (pmQuestions.length-1)){
    changeQuestionButton.innerText = ''
  }  
}
  const resetChangeQuestionButton =() => {
    changeQuestionButton.innerText=""
  }

const displayCompareContainer = () => {
  if (correctWrong===true){
    compareContainer.innerText = "Correct ! +2 points "
  }
  if (correctWrong===false){
    compareContainer.innerText = "Incorrect ! no points for you. "
  }
}

const displayCategoryContainer =() =>{
  for(let i=0; i<categoryElement.length; i++){
    if(categorylist[i].selected===false){ 
      categoryElement[i].innerText =categorylist[i].category
    }
  }
}

const resetCategoryContainer =() => {
  for(let i=0; i<categoryElement.length; i++){
    categoryElement[i].innerText =""

  }
}

const displayCompletedCategoryButton =() =>{
  completedCategoryButton.innerText = "Completed Category"
}
const resetCompletedCategoryButton =() =>{
  completedCategoryButton.innerText = ""
}

/*-------------------------------- Event Functions --------------------------------*/
const compareAnswer =(event)=> {
  if (event.target.innerText === pmQuestions[questionCounter].correctAnswer) {
    scoreTotal = scoreTotal + 2
    correctWrong = true
  }
  if (event.target.innerText !== pmQuestions[questionCounter].correctAnswer ){
    correctWrong = false
  }
  }
  
const categorySelected = (event)=>{
  console.log(event.target.innerText)
  for (let i=0 ; i<categorylist.length; i++){
    if(categorylist[i].category === event.target.innerText){
      categorylist[0].selected = true
      console.log(categorylist)
    }
  }
}
const removeCategories = (event) => {
  categorylist.pop(event.target.innerText)
}
/*----------------------------- Event Listeners -----------------------------*/
startButton.addEventListener('click', () =>{
  gameState = 2
  play()
  console.log("Question"+ questionCounter)
  console.log("Game state"+gameState)
}
)

categoryElement.forEach((category) => {
  category.addEventListener('click',(event) => {
    gameState = 1
    categorySelected(event)
    play()

  })
})


optionsElement.forEach((option) => {
  option.addEventListener('click', (event) =>{
    if (questionAnswered=== false){
         questionAnswered = true
          compareAnswer(event)
          play() 
    }
  })
})

changeQuestionButton.addEventListener('click', () =>{
  if( questionCounter <= pmQuestions.length-1){
      questionCounter= questionCounter + 1
      questionAnswered = false
      play()
      console.log("Question"+ questionCounter)
      console.log("Game state"+gameState)
    }
  }
)

completedCategoryButton.addEventListener('click',() =>{
  gameState= 2
  play()
}

)

const Start = () => {
  if (gameState === 0){
     init()
  }
}
const play = () => {
  if (gameState === 1 ){
  if (questionAnswered=== false ){
    displayQuestion()
    displayOptiona()
    displayOptionb()
    displayOptionc()
    displayOptiond()

    resetCategoryContainer()
    resetDisplayResults()
    resetChangeQuestionButton()
    
  }
    
if (questionAnswered === true ){
  displayCompareContainer()
  displayScore()
  displayResults()
  displayChangeQuestionButton()
  // console.log(questionCounter)
}

if ((questionCounter === pmQuestions.length-1) && (questionAnswered === true)){
  displayCompletedCategoryButton()
  scoreArray.push(scoreTotal)
  // console.log(scoreArray)
}

}
if (gameState === 2){
  displayCategoryContainer()
  removeStart()
  resetDisplayResults()
  resetChangeQuestionButton()
  resetQuestion()
  resetOptiona()
  resetOptionb()
  resetOptionc()
  resetOptiond()
  resetdisplayScore()
  resetCompletedCategoryButton()
  }
}

Start()
