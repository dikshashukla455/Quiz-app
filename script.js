
const quizdata =[
    {
        question:'Which of the following is not a storage class specifier in C?',
        a:'auto',
        b:'register',
        c:'volatile',
        d:'extern',
        correct:'c'
    },
    {
        question:'What is the most used programming language in 2019?',
        a:'Java',
        b:'C',
        c:'Python',
        d:'Javascript',
        correct:'a' 
    },
    {
        question:'Which one of the following operator takes only integer operands?',
        a:'+',
        b:'*',
        c:'/',
        d:'%',
        correct:'d'
    },
    {
        question:'C preprocessor',
        a:'Takes cares of conditional compilation',
        b:'Acts before compilation',
        c:'Takes care of include files',
        d:'All of the above',
        correct:'d'
    },
    {
        question:'Any C program',
        a:'Must contain at least one function.',
        b:'Need not contain any function',
        c:'Needs input data',
        d:'None of the data',
        correct:'a'
    }
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questions = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz(){
    deselectanswers();
    const currentQuizData = quizdata[currentQuiz];
    questions.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}
function deselectanswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked=false;
    });
}
submitBtn.addEventListener('click', () =>{
    const answer = getSelected();
    console.log(answer);
    if(answer){
        if(answer===quizdata[currentQuiz].correct){
            score++;
        }
    currentQuiz++;
    if(currentQuiz < quizdata.length){
        loadQuiz();
    }
    else{
       quiz.innerHTML=`<h2>You answered correctly at ${score}/${quizdata.length} questions`;
    }
}
});
