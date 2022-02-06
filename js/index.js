function getResult(){
    var score = 0;
    var answer1 = document.game.question1.value;
    var answer2 = document.game.question2.value;
    var answer3 = document.game.question3.value;
    var answer4 = document.game.question4.value;
    var answer5 = document.game.question5.value;
    var answer6 = document.game.question6.value;
    var result = document.getElementById("last");
    if(answer1=="script"){score+=20};
    if(answer2=="Undefinded"){score+=20};
    if(answer3=="global variable"){score+=20};
    if(answer4=="reverse()"){score+=20};
    if(answer5=="slice()"){score+=20};
    if(answer6=="concat()"){score+=20};

    questions.style.display = "none";
    
    if (score>=100) {
        result.textContent="your score is" + " " + score + " " + "excellent perfomance";
        
    }else if (score>=60) {
        result.textContent='your score is' + " " + score + " " + "fair perfomance";
        
    } else {
        result.textContent='your score is:' + " " + score + " " + "poor perfomance retake the test"; 
  
    };
}