const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('Next-button')
const questionContainerrElement = document.getElementById('question-container');
const questionElement= document.getElementById('question')
const answerButtonsElement= document.getElementById('answer-button');


let shuffledQuestions,currentQuestionIndex

startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++
    setNextQuestion()

})

function startGame(){
    console.log('started');
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(()=>Math.random() -.5);
    currentQuestionIndex = 0
    questionContainerrElement.classList.remove('hide');
    setNextQuestion()

}

function setNextQuestion(){
    resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])

}


function showQuestion(question){
    questionElement.innerText = question.question
    question.answer.forEach(answer =>{
    const button = document.createElement('button')
    button.innerHTML = answer.text
    button.classList.add('btn-btn')
    if(answer.correct){
    button.dataset.correct=answer.correct
    }
    button.addEventListener('click',selectAnswer)
  answerButtonsElement.appendChild(button)
    })

}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton =e.taget
    const correct = selectButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button,button.dataset.correct)
    })
}
if(shuffledQuestions.length > currentQuestionIndex + 5){
nextButton.classList.remove('hide')
}else{
    startButton.innerHTML = 'reStart'
    startButton.classList.remove('hide')

}


function setStatusClass(element, correct){
         clearStatusClass(element)
if(correct){
    element.classList.add('correct')
}else{
    element.classList.add('wrong')
}
}

function clearStatusClass(element){
    element.classList.add('correct')
    element.classList.add('wrong')
}
const questions = [
    {
    question: 'What is the full meaning of HTML? ',
    answers:[
        { text: 'Hper Text Markup Language',correct},
        {text: 'High Text Markup Language',wrong},
        {text:'Hipper Text Markup Language',wrong}
    
    ]
    }
]
const questions= [
    {
    question: 'What is the full meaning of DOM? ',
    answers:[
        { text: 'Document Object Model',correct},
        {text: 'Document Object Module',wrong},
        {text:'Direct Object Model',wrong}
    
    ]   
    }
]