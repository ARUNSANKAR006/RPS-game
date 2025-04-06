let playGame=confirm("Shall we play rock,paper or scissors ?")

if(playGame){
        let playerChoice=prompt("please enter rock,paper or scissor");

        if(playerChoice){
               let player=playerChoice.trim().toLowerCase();

               if(
                player==="rock" ||  
                player=== "paper" ||
                player === "scissor") {

                        let computerChoice=Math.floor(Math.random()*3+1);

                        let computer=computerChoice===1? "rock"
                        :computerChoice===2? "paper"
                        :"scissor";

                        let result=player==computer? "Tie game"
                        
                        :player==="rock" && computer=="paper" ? "Computer Win"

                        :player==="paper" && computer==="scissor"? "Computer Win"

                        :player==="scissor" && computer==="rock"? "Computer Win"

                        :"Player Win";

                        alert(result);
                        let playAgain=confirm("Play Again");

                        playAgain ? location.reload():alert("Ok, thanks for Playing.");

               }
               else{
                  alert("You didn't Enter rock ,paper or scissor .");
               }
        }

        else{
                alert("I guess you changed your mind ,Maybe next time.");

        }
} else{
        alert("Ok,Maybe next time.");

}



