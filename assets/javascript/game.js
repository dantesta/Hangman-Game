// Animal Array

   var animals = [];
      animals[0] = {name: "crocodile", animalslist: '<img src="assets/images/croc.jpg" width="250"></img>'};
      animals[1] = {name: "otter", animalslist: '<img src="assets/images/otter.jpg" width="250"></img>'};
      animals[2] = {name: "giraffe", animalslist: '<img src="assets/images/giraffe.jpg" width="250"></img>'};
      animals[3] = {name: "chimpanzee", animalslist: '<img src="assets/images/chimp.jpg" width="250"></img>'};
      animals[4] = {name: "lion", animalslist: '<img src="assets/images/lion.jpg" width="250"></img>'};
      animals[4] = {name: "tiger", animalslist:'<img src="assets/images/tiger.jpg" width="250"></img>'};
      animals[5] = {name: "panda", animalslist: '<img src="assets/images/panda.jpg" width="250"></img>'};
      animals[6] = {name: "gorilla", animalslist: '<img src="assets/images/gorilla.jpg" width="250"></img>'};  
      animals[7] = {name: "flamingo", animalslist: '<img src="assets/images/flamingo.jpg" width="250"></img>'}; 
      animals[8] = {name: "orangutan", animalslist: '<img src="assets/images/orangutan.jpg" width="250"></img>'};


 // Variables

    var animalName;
    var animalslist;
    var wins = 0;
    var losses = 0;
    var lettersGuessed;
    var triesRemaining;

    var input;
    var randomAnimal;
    var pickedAnimal;
    var placeholder;
    var animalNameLength;
    var animalNameSubstring;
    var key;



    // Start
    function newGame() {
      placeholder = "";
      triesRemaining = 5;
      lettersGuessed = [];
      randomAnimal = Math.floor(Math.random() * animals.length); 

//splice = add and removes items for array


      pickedAnimal = animals.splice(randomAnimal, 1);
      animalName =  pickedAnimal[0].name;
      animalslist = pickedAnimal[0].animalslist;
      animalNameLength = animalName.length;
      animalNameSubstring = animalName.substring;
    
      // changes spaces


      for (var i = 0; i < animalName.length; i++) {
        if (animalName.substring(i, i + 1) === " "){
          placeholder =  placeholder + " ";
        }
        else {
          placeholder = placeholder + "_";
        }
      }

 
      document.querySelector("#placeholder").innerHTML = placeholder;
      document.querySelector("#lettersGuessedSpace").innerHTML = lettersGuessed;
      document.querySelector("#wins").innerHTML = wins;
      document.querySelector("#losses").innerHTML = losses;
      document.querySelector("#guessesLeft").innerHTML = triesRemaining;
      document.querySelector("#name").innerHTML = " ";
      document.querySelector("#animalGuesses").innerHTML = "";

    }

  // start game here
  newGame();

  document.onkeyup = function(event){
    key = event.key;



    // checked what key you click
    var correct = 0;

    // correct key loop
    for (var i = 0; i < animalNameLength; i++) {
      if (key == animalName.substring(i, i + 1)) {
        correct++;
        placeholder = placeholder.substring(0, i) + key + placeholder.substring(i + 1, placeholder.length + 1);
        document.querySelector("#placeholder").innerHTML = placeholder;
      }
    }

    // inccorrect key loop
    if (correct == 0) {
      triesRemaining--;
      lettersGuessed.push(key);
      document.querySelector("#lettersGuessedSpace").innerHTML = lettersGuessed;
      document.querySelector("#guessesLeft").innerHTML = triesRemaining;
      
    }

    // Winner!
    if (placeholder == animalName) {
      wins++;
      document.querySelector("#message").innerHTML = "You win!<br/>To play again, click 'Start New Game' above!";
      document.querySelector("#wins").innerHTML = wins;
      document.querySelector("#name").innerHTML = "ANSWER: " + animalName;
      document.querySelector("#animalGuesses").innerHTML = animalslist;
      
    }
    // Loser!
    if (triesRemaining == 0) {
      losses++;
      
      document.querySelector("#message").innerHTML = "You Lose :(<br/>Click Start New Game to try again!";
      document.querySelector("#losses").innerHTML = losses;
      document.querySelector("#name").innerHTML = "ANSWER: " + animalName;
      document.querySelector("#animalGuesses").innerHTML = animalslist;
      
    }

  }



  // restart game
  document.querySelector("#button").addEventListener("click", newGame);












