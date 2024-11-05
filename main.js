/*-------------------------------- Questions --------------------------------*/
import { pmQuestions } from "./questions";

  const categorylist =[ 
    {
      category: 'Horticulture',
      score:0,
      selected: false,
    },
    {
      category: 'Project Management',
      score:0,
      selected: false,
    },
    {
      category: 'Contract Management',
      score:0,
      selected: false,
    },
    {
      category: 'Park Design',
      score:0,
      selected: false,
    },
  ]
  
  /*-------------------------------- Constants --------------------------------*/

  const startMessage = document.getElementById('startmsg');
  const startButton = document.getElementById('startbutton')
  
  const scoreContainer = document.getElementById("score");
  
  const questionPage = document.getElementById('questionpage');
  const questionContainer = document.getElementById('question');
  const optionsContainer = document.getElementById('optionscontainer');
  const optionsElement = document.querySelectorAll('.options')

  
  const compareContainer = document.getElementById('compare');
  const resultsContainer = document.getElementById('results');
  
  const changeQuestionButton = document.getElementById('changeQuestion');
  
  const completedCategoryButton = document.getElementById('completedCategory')
  
  const categoryContainer= document.getElementById('categorycontainer')
  const categoryElement = document.querySelectorAll('.category')
  
  const nextLevelContainer = document.getElementById('nextLevel')
  const restartButton = document.getElementById('restart')

  /*---------------------------- Variables (state) ----------------------------*/
  let gameState = 0 
  let scoreCurrent = 0
  let questionCounter = 0
  let questionAnswered = false
  let correctWrong = false
  let currentCategory =""
  let selectedCategoryQuestions= []
  let totalScore = 0
  
  /*------------------------ Cached Element References ------------------------*/
  
  /*-------------------------------- Display Functions --------------------------------*/
  const displayStartMenu = () =>{
    startMessage.classList.remove("hide")
     startButton.classList.remove("hide")
  }
    const removeStart =() => {
      startMessage.classList.add("hide")
      startButton.classList.add("hide")
    }
    
  const displayCategoryContainer =() =>{
    categoryContainer.classList.remove('hide')
    for(let i=0; i<categoryElement.length; i++){
      if(categorylist[i].selected===false){ 
        categoryElement[i].innerText =categorylist[i].category
        categoryElement[i].classList.remove('hide');
      }
    }
  }
  
  const resetCategoryContainer =() => {
    categoryContainer.classList.add('hide')
    for(let i=0; i<categoryElement.length; i++){
      categoryElement[i].innerText=""
      categoryElement[i].classList.add("hide")
    }
  }
  
    const displayQuestion =() => {
      questionContainer.innerText = selectedCategoryQuestions[questionCounter].question
      questionPage.classList.remove('hide')
    }
    const removeQuestion =() => {
      questionPage.classList.add('hide')
      questionContainer.innerText = ""
      questionContainer.classList.add("hide")
    }
  
  
    const displayOptions=() =>{
      optionsContainer.classList.remove('hide')
      for(let i=0; i<optionsElement.length; i++){
          optionsElement[i].classList.add('hover')
          optionsElement[i].classList.remove('hide')
          optionsElement[i].classList.remove('greyoutoptions')
          optionsElement[i].innerText =selectedCategoryQuestions[questionCounter].answers[i]
        }
      }
    
      const removeOptions=() => {
        optionsContainer.classList.add('hide')
        for(let i=0; i<optionsElement.length; i++){
          optionsElement[i].innerText = '';
          optionsElement[i].classList.add('hide')
          // optionsElement[i].style.display = 'none'
      }

    }

    const greyOptions=() => {
      for(let i=0; i<optionsElement.length; i++){
        optionsElement[i].classList.add('greyoutoptions')
        optionsElement[i].classList.remove('hover')
    }
  }
  
    const displayResults =() => {
      resultsContainer.classList.remove('hide')
      resultsContainer.innerText = "The correct answer is: " + selectedCategoryQuestions[questionCounter].correctAnswer
    }

    const displayCompareContainer = () => {
      compareContainer.classList.remove('hide')
      if (correctWrong===true){
        compareContainer.innerText = "Correct ! +2 points "
      }
      if (correctWrong===false){
        compareContainer.innerText = "Incorrect ! no points for you. "
      }
    }

    const resetDisplayResults = () => {
      resultsContainer.innerText = ""
      resultsContainer.classList.add('hide')
      compareContainer.innerText = ""
      compareContainer.classList.add('hide') 
    }
    
    const displayScore = () => {
      scoreContainer.classList.remove('hide')
      scoreContainer.innerText = "Score : " + scoreCurrent + " / 6"
    }
    const resetdisplayScore = () => {
      scoreContainer.innerText = ""
      scoreContainer.classList.add('hide')
    }
  
    const displayChangeQuestionButton = () => {
      if (questionCounter < (selectedCategoryQuestions.length-1) ){
      changeQuestionButton.classList.remove('hide')
      changeQuestionButton.innerText = 'Next Question'
    }
    if (questionCounter === (selectedCategoryQuestions.length-1)){
      resetChangeQuestionButton()
    }  
  }
    const resetChangeQuestionButton =() => {
      changeQuestionButton.classList.add('hide')
      changeQuestionButton.innerText=""
    }
  
  const displayCompletedCategoryButton =() =>{
    completedCategoryButton.classList.remove('hide')
    completedCategoryButton.innerText = "Completed Category"
  }
  const resetCompletedCategoryButton =() =>{
    completedCategoryButton.innerText = ""
    completedCategoryButton.classList.add('hide')
  }
  
  const displayRestartButton = () =>{
    restartButton.classList.remove('hide')
    restartButton.innerText = "Start Again"
  }
  const removeRestartButton = () =>{
    restartButton.innerText = ""
    restartButton.classList.add('hide')
  }
  
  const resetNextLevelContainer = () => {
    nextLevelContainer.innerText=""
    nextLevelContainer.classList.add('hide')
  }
  
  
  /*-------------------------------- Event Functions --------------------------------*/
  const addScore =(event)=> {
    if (event.target.innerText === selectedCategoryQuestions[questionCounter].correctAnswer) {
      scoreCurrent = scoreCurrent + 2
      correctWrong = true
    }
    if (event.target.innerText !== selectedCategoryQuestions[questionCounter].correctAnswer ){
      correctWrong = false
    }
    }
    
  const categorySelected = (event)=>{
    for (let i=0 ; i<categorylist.length; i++){
      if(categorylist[i].category === event.target.innerText){
        categorylist[i].selected = true
        currentCategory =event.target.innerText
        selectedCategoryQuestions= pmQuestions.filter( pmQuestion => pmQuestion.category === currentCategory)
      }
    }
  }
  
  const saveScore = () =>{
    for (let i=0 ; i<categorylist.length;i++){
      if (categorylist[i].category === currentCategory){
        categorylist[i].score=scoreCurrent
      }
    }
  }
  
  const getTotalScore = () =>{
    for (let i=0 ; i<categorylist.length;i++){
      totalScore = totalScore + Number(categorylist[i].score)
      }
    }
  
  const resetCategoryList= ()=>{
    for (let i=0 ; i<categorylist.length;i++){
       categorylist[i].score=[],
       categorylist[i].selected= false
      }
    }
  /*----------------------------- Event Listeners -----------------------------*/
  startButton.addEventListener('click', () =>{
    gameState = 2
    play()
    // console.log("Question"+ questionCounter)
    // console.log("Game state"+gameState)
  })
  
  categoryElement.forEach((category) => {
    category.addEventListener('click',(event) => {
      questionCounter = 0
      questionAnswered= false
      gameState = 1
      scoreCurrent = 0
      categorySelected(event)
      play()
      // console.log(questionCounter)
    })
  })
  
  
  optionsElement.forEach((option) => {
    option.addEventListener('click', (event) =>{
      if (questionAnswered=== false){
           questionAnswered = true
            addScore(event)
            play() 
            // console.log(scoreCurrent)
            // console.log(categorylist)
      }
    })
  })
  
  changeQuestionButton.addEventListener('click', () =>{
    if( questionCounter <= pmQuestions.length-1){
        questionCounter= questionCounter + 1
        questionAnswered = false
        play()
        // console.log("Question"+ questionCounter)
        // console.log("Game state"+gameState)
        
      }
    }
  )
  
  completedCategoryButton.addEventListener('click',() =>{
    gameState= 4
    saveScore()
    getTotalScore()
    play()
    // console.log(optionsElement)
    // console.log(totalScore)
    // console.log("Game state"+gameState)
    // console.log(scoreCurrent)
    console.log(totalScore)
  })
  
  restartButton.addEventListener('click',() =>{
    gameState=0
    scoreCurrent = 0
    questionCounter = 0
    questionAnswered = false
    correctWrong = false
    currentCategory =""
    selectedCategoryQuestions= []
    resetCategoryList()
    resetCategoryContainer()
    totalScore = 0
    Start()
  })
  /*----------------------------- Renders -----------------------------*/
  const Start = () => {
    if (gameState === 0){
       displayStartMenu()
       resetDisplayResults()
       resetChangeQuestionButton()
       removeQuestion()
       removeOptions()
       resetdisplayScore()
       resetCategoryContainer()
       resetCompletedCategoryButton()
       removeRestartButton()
       resetNextLevelContainer()
    }
  }
  const play = () => {
    if (gameState === 1 ){
    if (questionAnswered=== false ){
      displayQuestion()
      displayOptions()

      resetCategoryContainer()
      resetDisplayResults()
      resetChangeQuestionButton()
      resetNextLevelContainer()
      
      displayRestartButton()
    }
      
  if (questionAnswered === true ){
    console.log(correctWrong)
    displayCompareContainer()
    displayScore()
    displayResults()
    greyOptions()
    displayChangeQuestionButton()
    
    
  }
  
  if ((questionCounter === selectedCategoryQuestions.length-1) && (questionAnswered === true)){
    displayCompletedCategoryButton()
    // console.log(scoreArray)
  }
  
  }
  
  if (gameState === 4){
    if(scoreCurrent < 4){
      removeStart()
      resetDisplayResults()
      resetChangeQuestionButton()
      removeQuestion()
      removeOptions()
      resetdisplayScore()
      nextLevelContainer.classList.remove('hide')
      nextLevelContainer.innerText= currentCategory+ ": "+ scoreCurrent+ " / 6. "+ "You failed. "
      displayRestartButton()
      resetCompletedCategoryButton()
      
      // console.log("fail with 2 points, restart quiz")
    }

    if(scoreCurrent >= 4 && totalScore <=20 ){
  
    displayCategoryContainer()
    removeStart()
    displayRestartButton()
    resetDisplayResults()
    resetChangeQuestionButton()
    console.log(optionsElement)
    removeQuestion()
    removeOptions()
    resetdisplayScore()
    resetCompletedCategoryButton()
    // console.log(totalScore)
    // console.log('pass catgegory, next category')
    nextLevelContainer.classList.remove('hide')
    nextLevelContainer.innerText= ` ${currentCategory}: ${scoreCurrent} / 6. You passed! Pick your next category`
    }

    if(scoreCurrent>= 4 && totalScore >=22 ){
  
      displayCategoryContainer()
      removeStart()
      displayRestartButton()
      resetDisplayResults()
      resetChangeQuestionButton()
      removeQuestion()
      removeOptions()
      resetdisplayScore()
      resetCompletedCategoryButton()
      // console.log("final win")
      nextLevelContainer.classList.remove('hide')
      nextLevelContainer.innerText= "Well done ! You got completed all categories! " + totalScore + " / 24."
      }

    }
  if (gameState === 2){
  displayCategoryContainer()
  removeStart()
  resetDisplayResults()
  resetChangeQuestionButton()
  removeOptions()
  resetdisplayScore()
  resetCompletedCategoryButton()
  }
  }
  
  Start()