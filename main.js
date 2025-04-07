let playGame=confirm("Shall we play rock,paper or scissors ?")

if(playGame){
        let playerChoice=prompt("please enter rock,paper or scissor");

        if(playerChoice){
               let player=playerChoice.trim().toLowerCase();

               if(
                player==="rock" ||  
                player=== "paper" ||
                player === "scissor") {

                        const computerChoice=Math.floor(Math.random()*3+1);

                        const rpsArray=["rock","paper","scissor"];
                        const computer=rpsArray[computerChoice];

                        

                        let result=player==computer? "Tie game"
                        
                        :player==="rock" && computer=="paper" ? `Player:${player}\nComputer:${computer}/n Computer Win !`

                        :player==="paper" && computer==="scissor"? `Player:${player}\nComputer:${computer}/n Computer Win !`

                        :player==="scissor" && computer==="rock"? `Player:${player}\nComputer:${computer}/n Computer Win !`

                        :`Player:${player}\nComputer:${computer}/n Player Win !`;

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



