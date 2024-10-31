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
  category : "Project Management"
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
  category : "Project Management"
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
  category : "Project Management"
},
{
question: " Who signs off the project brief?",
answers:{
  a: "CEO",
  b: "Cluster Head",
  c: "Park Planning",
  d:" Director level of the operations team taking over",
},
 correctAnswer: "Director level of the operations team taking over",
 category : "Contract Management"
},
{
  question: " When can term contract civil works be used for park development?",
  answers:{
    a: "When cost of development works is more than $1,000,000",
    b: "When there are many star rate items as part of the development work",
    c: "When cost of development works is less than $500,000 and works are in the price schedule of rates",
    d: "When the funding timeline is tight",
  },
   correctAnswer: "When cost of development works is less than $500,000 and works are in the price schedule of rates",
   category : "Contract Management"
  },
  {
    question: " According to PSCCOC, what is the contractor's responsibility when applying for an Extension of Time (EOT)?",
    answers:{
    a: "To submit a written application only after the project completion date",
    b: "To provide evidence of the delay and its impact on the project timeline",
    c: "To automatically receive the EOT as soon as an application is submitted",
    d: "To submit an EOT request only if instructed by the Engineer or Project Manager",
  },
    correctAnswer: "To provide evidence of the delay and its impact on the project timeline",
    category : "Contract Management"
  },
  {
    question: "What is one of the main benefits of planting native trees in Singapore's urban landscapes?",
    answers:{
      a: "Native trees require more frequent watering than non-native species",
      b: "They enhance biodiversity by providing food and habitat for local wildlife",
      c: "Native trees grow faster and require less pruning than imported trees",
      d: "They improve soil quality for agricultural crop planting",
    },
     correctAnswer: "They enhance biodiversity by providing food and habitat for local wildlife",
     category : "Horticulture"
    },
    {
      question: "In Singapore's park development, how does horticulture contribute to sustainable urban planning?",
      answers:{
        a: "By introducing foreign plant species that require more water",
        b: "By using native and adaptive plants that reduce maintenance and water needs",
        c: "By focusing on monoculture planting for consistent landscaping",
        d: "By planting exclusively ornamental species for aesthetic purposes",
      },
       correctAnswer: "By using native and adaptive plants that reduce maintenance and water needs",
       category : "Horticulture"
      },
      {
        question: "Which of the following native tree species is commonly chosen in Singapore’s park development for its low maintenance requirements?",
        answers:{
        a: "Tembusu (Fagraea fragrans)",
        b: "Rain Tree (Samanea saman)",
        c: "African Mahogany (Khaya senegalensis)",
        d: "Angsana (Pterocarpus indicus)",
      },
        correctAnswer: "Tembusu (Fagraea fragrans)",
        category : "Park Design"
      },
      {
        question: "What is one of the main benefits of planting native trees in Singapore's urban landscapes?",
        answers:{
          a: "Native trees require more frequent watering than non-native species",
          b: "They enhance biodiversity by providing food and habitat for local wildlife",
          c: "Native trees grow faster and require less pruning than imported trees",
          d: "They improve soil quality for agricultural crop planting",
        },
         correctAnswer: "They enhance biodiversity by providing food and habitat for local wildlife",
         category : "Park Design"
        },
        {
          question: "In Singapore's park development, how does horticulture contribute to sustainable urban planning?",
          answers:{
            a: "By introducing foreign plant species that require more water",
            b: "By using native and adaptive plants that reduce maintenance and water needs",
            c: "By focusing on monoculture planting for consistent landscaping",
            d: "By planting exclusively ornamental species for aesthetic purposes",
          },
           correctAnswer: "By using native and adaptive plants that reduce maintenance and water needs",
           category : "Park Design"
          },
          {
            question: "  Which of the following native tree species is commonly chosen in Singapore’s park development for its low maintenance requirements?",
            answers:{
            a: "Tembusu (Fagraea fragrans)",
            b: "Rain Tree (Samanea saman)",
            c: "African Mahogany (Khaya senegalensis)",
            d: "Angsana (Pterocarpus indicus)",
          },
            correctAnswer: "Tembusu (Fagraea fragrans)",
            category : "Horticulture"
          }
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
    category: 'Park Design',
    score:[],
    selected: false,
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
let currentCategory =""
let selectedCategoryQuestions= []


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
    questionContainer.innerText = selectedCategoryQuestions[questionCounter].question
  }
  const resetQuestion =() => {
    questionContainer.innerText = ""
  }


  const displayOptiona=() => {
    optionaElement.innerText = selectedCategoryQuestions[questionCounter].answers.a
  }
  const resetOptiona=() => {
    optionaElement.innerText = ""
  }


  const displayOptionb=() => {
    optionbElement.innerText = selectedCategoryQuestions[questionCounter].answers.b
  }
  const resetOptionb=() => {
    optionbElement.innerText = ""
  }

  const displayOptionc=() => {
    optioncElement.innerText = selectedCategoryQuestions[questionCounter].answers.c
  }
  const resetOptionc=() => {
    optioncElement.innerText = ""
  }

  const displayOptiond=() => {
    optiondElement.innerText = selectedCategoryQuestions[questionCounter].answers.d
  }
  const resetOptiond=() => {
    optiondElement.innerText = ""
  }


  const displayResults =() => {
    resultsContainer.innerText = "The correct answer is " + selectedCategoryQuestions[questionCounter].correctAnswer
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
    if (questionCounter < (selectedCategoryQuestions.length-1) ){
    changeQuestionButton.innerText = 'Next Question'
  }
  if (questionCounter === (selectedCategoryQuestions.length-1)){
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
  if (event.target.innerText === selectedCategoryQuestions[questionCounter].correctAnswer) {
    scoreTotal = scoreTotal + 2
    correctWrong = true
  }
  if (event.target.innerText !== selectedCategoryQuestions[questionCounter].correctAnswer ){
    correctWrong = false
  }
  }
  
const categorySelected = (event)=>{
  console.log(event.target.innerText)
  for (let i=0 ; i<categorylist.length; i++){
    if(categorylist[i].category === event.target.innerText){
      categorylist[i].selected = true
      currentCategory =event.target.innerText
      console.log(currentCategory)
      selectedCategoryQuestions= pmQuestions.filter( pmQuestion => pmQuestion.category === currentCategory)
    }
  }
  console.log(selectedCategoryQuestions)
}


/*----------------------------- Event Listeners -----------------------------*/
startButton.addEventListener('click', () =>{
  gameState = 2
  play()
  console.log("Question"+ questionCounter)
  console.log("Game state"+gameState)
})

categoryElement.forEach((category) => {
  category.addEventListener('click',(event) => {
    questionCounter = 0
    questionAnswered= false
    gameState = 1
    categorySelected(event)
    play()
    console.log(questionCounter)
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
})

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
  console.log()
}

if ((questionCounter === selectedCategoryQuestions.length-1) && (questionAnswered === true)){
  displayCompletedCategoryButton()
  scoreArray.push(questionCounter)
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
  questionCounter = 0
  }
}

Start()
