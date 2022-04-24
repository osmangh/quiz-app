const quizData=[{
    question:'Who is my best friend',
    a:'abe',
    b:'nyoyn',
    c:'xyz',
    d:'none of avobe ',
    correct:'b'
},
{
    question:'What is best Programming language',
    a:'javascript',
    b:'java',
    c:'pythone',
    d:'c++',
    correct:'a'
},
{
    question:'Who is the Primister of bangladesh',
    a:'sk hasina',
    b:'osman ghani',
    c:'nyoyn',
    d:'abdul Hamid',
    correct:'a',
},
{
    question:'what is the capital city of The Bangladesh',
    a:'Dhaka',
    b:'jashore',
    c:'chougaccha',
    d:'Barisal',
    correct:'a',
}

];
const questioneE1 =document.getElementById('question');
const a_text =document.getElementById('a_text');
const b_text =document.getElementById('b_text');
const c_text =document.getElementById('c_text');
const d_text =document.getElementById('d_text');

let currentQuiz = 0;
let score=0;
loadQuiz();
function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    questioneE1.innerHTML=currentQuizData.question
   a_text.innerHTML=currentQuizData.a
   b_text.innerHTML=currentQuizData.b
   c_text.innerHTML=currentQuizData.c
   d_text.innerHTML=currentQuizData.d
  

}
function getSelected(){
    const answerEls =document.querySelectorAll('.answer')
    answerEls.forEach((answerE1)=>{
        if(answerE1.checked){
            return answerE1.id
        }
    })
}
submitBtn.addEventListener('click',()=>{
    currentQuiz++;
    getSelected()

    if(currentQuiz<quizData.length){
            loadQuiz();
        }
        else {
            alert('you finished you have gotten: 4/4')
        }
    
})
