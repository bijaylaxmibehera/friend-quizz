var readlineSync=require('readline-sync');
var score=0;
var userName=readlineSync.question("May I have your name? ");
console.log("Welcome "+userName+" to Do You Know Bijaylaxmi")

//list of question
var questionList=[
  {
    question:"where do I live? a.Baripada b.BBSR c.BLS",
    answer:"a"
  },
  {
    question:"What is my favourite color? a.Blue b.Black c.Pink ",
    answer:"b"
  },
  {
    question:"What is my favourite food? a.salad b.ice-cream c.fruit",
    answer:"c"
  },
   {
    question:"what is my birthday month? a.Oct b.Nov c.Jan",
    answer:"b" 
  },
];



//play function
function play(question,answer){
  var userAnswer=readlineSync.question(question);
  console.log("You have entered : ",userAnswer);
  if(userAnswer.toUpperCase()==answer.toUpperCase()){
    console.log("You are right!");
    score=score+1;
  } else{
    console.log("You are wrong!");
    score=score-1;
  }
 console.log("Your current score is : ",score);
 console.log("---------------");
}

//traverse the question list
for(var i=0; i<questionList.length; i++){
  var currentQuestion=questionList[i];
  play(currentQuestion.question,currentQuestion.answer);
}
console.log("YAY! You SCORED ",score);

//keep highest score
var highScore=[
  {
    name:"Bijaylaxmi",
    score:4
  },
  {
    name:"Mama",
    score:3
  }
];
