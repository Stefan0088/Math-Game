var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
var i;
//if we click on the start/reset button
    document.getElementById("startreset").onclick = function() {
        //if we are playing
        if(playing==true){
            location.reload(); // reload page
        }
        else{  //if we are not playing
            
            //change mode to playing
            playing=true;
            
            
            //set score to 0
            score=0; 
            document.getElementById("scorevalue").innerHTML=score;
            
            //show countdown box
            show("timeremaining");
                timeremaining = 60;
                document.getElementById("timeremainingvalue").innerHTML= timeremaining;
            
            //hide game over box
            hide("gameOver");
            
             //change button to reset
            document.getElementById("startreset").innerHTML="Reset Game";
            
            //start countdown
            startCountdown();
            
            //generate a new Q&A
            
            generateQA();
            
        }
    }

//Clicking on answer box
   
    for(i=1;i<5;i++){
         document.getElementById("box"+i).onclick = function(){
        //check if we are playing
        if(playing == true){//yes
                if(this.innerHTML == correctAnswer){
                //correct answer

                        //increse score by 1
                        score++;
                        document.getElementById("scorevalue").innerHTML = score;

                        //hide wrong box and show coorect box
                        hide("wrong");
                        show("correct");
                        setTimeout(function(){
                            hide("correct");
                        }, 1000);

                        //generate new Q&A
                        generateQA();
                   }
                else{
                //wrong answer
                     hide("correct");
                     show("wrong");
                     setTimeout(function(){
                            hide("wrong");
                        }, 1000);

                }
           }
    }
    }
//functions
    
    //start counter
    function startCountdown(){
        action = setInterval(function(){
            timeremaining -= 1;
            document.getElementById("timeremainingvalue").innerHTML=timeremaining;
            
            if(timeremaining == 0){//gameover
                stopCountdown();
                
                show("gameOver");
                
                document.getElementById("gameOver").innerHTML =
                "<p>Game over!</p><p>Your score is " + score +".</p>";
                
                hide("timeremaining");
                
                hide("correct");
                hide("wrong");
                
                playing=false;
                
                document.getElementById("startreset").innerHTML="Start Game";
                
            }
            
        },1000);
    }
    
    //stop counter
    function stopCountdown(){
        clearInterval(action);
    }

    //hide an element
    function hide(Id){
        document.getElementById(Id).style.display="none";
    }
    
    //show an element
    function show(Id){
        document.getElementById(Id).style.display="block";
    }

    //generate question and multiple answers
    function generateQA(){
        var x = 1+ Math.round(Math.random()*9);
        var y = 1+ Math.round(Math.random()*9);
        correctAnswer = x*y;
        
        document.getElementById("question").innerHTML = x + "x" + y;
        
        var correctPosition = 1+ Math.round(Math.random()*3);
        //fill one box with correct answers
        document.getElementById("box"+correctPosition).innerHTML=correctAnswer;
        
        //fill other boxes with wrong answers
        var answers = [correctAnswer];
        for(i=1; i<5; i++){
            if(i != correctPosition){
                var wrongAnswer;
                do{
                    wrongAnswer= (1+ Math.round(Math.random()*9))*(1+ Math.round(Math.random()*9)); // a wrong answer
                   
                } while(answers.indexOf(wrongAnswer) > -1)
                    
                 document.getElementById("box"+i).innerHTML=wrongAnswer;
                 answers.push(wrongAnswer);
            }
        }
    }
        




//if we click on the start/reset button
    //if we are playing
        //reload page
    //if we are not playing
        //set score to 0
        //show countdown box    
        //reduce time by 1 second in loops
            //timeleft?
                //yes->continue
                //no->gameover
       
        //generate new G&A

        

//if we click on answer box 
    //if we are playing
        //correct?
            //yes
                //increase score by 1
                //show correct box for 1 sec
                //generate new Q&A
            //no
                //show try again box for 1 sec

