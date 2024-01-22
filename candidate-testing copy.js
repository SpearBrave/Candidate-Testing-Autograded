let questions=["Who was the first American woman in space?	"   ,
              "True or false: 5 kilometer == 5000 meters?	"   ,
              "(5 + 3)/2 * 10 = ?"   ,
              "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?"   ,
               "What is the minimum crew size for the ISS?	" ];


               let correctAnswers=['Sally Ride'   ,
                    "true"   ,
                  '“40”'   ,
                  'Trajectory'   ,
                  '3'   ];
let candidateAnswers=[];



for (let i = 0; i < 5; i++){
  console.log(questions[i])
  candidateAnswer.push(input.questions(questions[i]));