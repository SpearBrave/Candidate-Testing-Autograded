const quiz = require('./candidate-testing');
quiz.runProgram();
function askQuestion() {
    // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
  for (let i = 0; i < 5; i++){
    candidateAnswers=candidateAnswers+ "," + input.question(questions[i].toLowerCase);
  
  
  candidateAnswers=candidateAnswers.split(",");
  candidateAnswers.splice(0,1);
  
  candidateAnswer=candidateAnswers
  return candidateAnswer;
  
  }return (candidateAnswer);}
  
  //Now need to turn string into Array