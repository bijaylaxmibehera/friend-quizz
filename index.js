var readlineSync=require('readline-sync');
var score=0;
var userName=readlineSync.question("May I have your name? ");
console.log("Welcome "+userName+" to Do You Know Bijaylaxmi")

//list of question
var questionList = [
  {
    question: "1.where do I live? a.Baripada b.BBSR c.BLS",
    answer: "a"
  },
  {
    question: "2.What is my favourite color? a.Blue b.Black c.Pink ",
    answer: "b"
  },
  {
    question: "3.What is my favourite food? a.salad b.ice-cream c.fruit",
    answer: "c"
  },
  {
    question: "4.what is my birthday month? a.Oct b.Nov c.Jan",
    answer: "b"
  },
  {
    question: "5.What is my highest qualification? a.BSc b.MCA c.MSc",
    answer: "c"
  },
  {
    question: "6.What is my nickname? a.Priya b.Mama c.Lata",
    answer: "b"
  },
  {
    question: "7.Which type of weather I prefer? a.rainy b.cold c.modorate",
    answer: "c"
  },
  {
    question: "8.Which is my favourite flower? a.rose b.lily c.jasmine",
    answer: "a"
  },
  {
    question: "9.How do I prefer to communicate with my friends? a.texting b.phone call c.e-mail",
    answer: "a"
  },
  {
    question: "10.What is my favourite ice-cream flavor? a.vanilla b.chocolate c.raspberry",
    answer: "a"
  }
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
// var highScore=[
//   {
//     name:"Bijaylaxmi",
//     score:10
//   },
//   {
//     name:"Mama",
//     score:9
//   }
// ];
