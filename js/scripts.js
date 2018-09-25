function score(){
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question5.value;
  var question6 = document.quiz.question6.value;
  var correct = 0;

   if (question1 == "=") {
     correct++;
   }
   if (question2 == "myNumber") {
     correct++;
   }
   if (question3 == "string") {
     correct++;
   }
   if (question4 == "Dom") {
     correct++;
   }
   if (question5 == "undefined") {
     correct++;
   }
   if (question6 == ".parseInt"){
     correct++;
   }

   if (correct < 3) {
     var messages = "That's just okay, you really need to do better";
   }
   if (correct > 3) {
     var messages = "Great job! You got three correct! keep it up!";
   }
   if (correct >5){
     var messages = "Outstanding! You got five correct!";
   }



   // var range;
   // if (correct < 1) {
   //   range = 2
   // }
   //
   // if (correct > 0 && correct < 3){
   //   range = 1;
   // }
   //
   // if (correct > 4) {
   //   range = 0;
   // }
   document.getElementById("message").innerHTML = messages;
   document.getElementById("number_correct").innerHTML = "You got " + correct + " correct";
 };
