
(function (){

  let teamoneShootButton = document.querySelector("#teamone-shoot");
  let teamoneNumshots = document.querySelector("#teamone-numshots");
  let teamoneNumhits = document.querySelector("#teamone-numhits");

  let resetButton = document.querySelector("#reset");
  let numResets = document.querySelector("#num-resets");


  let teamtwoShootButton = document.querySelector("#teamtwo-shoot");
  let teamtwoNumshots = document.querySelector("#teamtwo-numshots");
  let teamtwoNumhits = document.querySelector("#teamtwo-numhits");

//Team One Shoot-------------------
  teamoneShootButton.addEventListener("click", function() {
    teamoneNumshots.innerHTML = parseInt(teamoneNumshots.innerHTML) + 1

      let randomNumber1 = Math.random();
        console.log(randomNumber1);
        if(randomNumber1 > .90) {
          teamoneNumhits.innerHTML = parseInt(teamoneNumhits.innerHTML) + 1
          goal.play()
          shot.play()
        }
      }
    )

//Team Two Shoot-------------------

  teamtwoShootButton.addEventListener("click", function() {
    teamtwoNumshots.innerHTML = parseInt(teamtwoNumshots.innerHTML) + 1

        let randomNumber2 = Math.random();
          console.log(randomNumber2);
          if(randomNumber2 > .90){
            teamtwoNumhits.innerHTML = parseInt(teamtwoNumhits.innerHTML) + 1
            goal.play()
            shot.play()
          }
        }
      )

//Reset Button-------------------

    resetButton.addEventListener("click", function() {
      teamtwoNumshots.innerHTML = 0;
      teamoneNumshots.innerHTML = 0;
    })

//Reset counter

    resetButton.addEventListener("click", function() {
      numResets.innerHTML = parseInt(numResets.innerHTML) + 1
    })

})();
