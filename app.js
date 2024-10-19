function play(){
    ///Home screen section
    console.log('play game')
   //  const homeSection  = document.getElementById('home_screen')
   //  homeSection.classList.add('hidden')

    addElementById('home_screen');
    addElementById('final_score');
     

     //playground section

   //  const playGroundSection = document.getElementById('play_ground');
   //  playGroundSection.classList.remove('hidden');
    removeElementById('play_ground');
    setTextElementValueById('current_life',5)
    setTextElementValueById('current_score',0)


    ///create a alphabet string
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabet = alphabetString.split("")
    console.log(alphabet);

    //get s random number
    const randomNumber = Math.random()*25
    const index = Math.round(randomNumber)
    console.log(index);

    const randomIndex = alphabet[index];
    console.log(randomIndex)

    const currentAlphabet = document.getElementById('current_alphabet');
    currentAlphabet.innerText=(randomIndex)
    
     const addBackgroundColor  = document.getElementById(randomIndex);
   
     addBackgroundColor.classList.add('bg-red-400')

    // const bgColor = document.getElementById("current_alphabet");
    // bgColor.classList.add("bg-red-400");

}


function handleKeyboardButtonPress(event){
    const playerGame = event.key
     console.log(playerGame)


     const currentAlphabetElement = document.getElementById('current_alphabet')
     const currentAlphabet = currentAlphabetElement.innerText
     const expectedAlphabet = currentAlphabet.toLowerCase()
     console.log('Player Pressed', expectedAlphabet)

     if(playerGame === expectedAlphabet){
        console.log('You won the game')
        const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
        const alphabet = alphabetString.split("")
        // console.log(alphabet);
    
        //get s random number
        const randomNumber = Math.random()*25
        const index = Math.round(randomNumber)
        // console.log(index);
    
        const randomIndex = alphabet[index];
        console.log(randomIndex)
    
        const currentAlphabet = document.getElementById('current_alphabet');
        currentAlphabet.innerText=(randomIndex)
        
         const addBackgroundColor  = document.getElementById(randomIndex);
       
          addBackgroundColor.classList.add('bg-red-400')
          const removeBackgroundColor = document.getElementById(expectedAlphabet);
       removeBackgroundColor.classList.remove('bg-red-400')

       //Update score
      //1.get the current score
      const currentScoreElement = document.getElementById('current_score');
      const currentScoreText = currentScoreElement.innerText;
      const currentScore = parseInt(currentScoreText)
      console.log('My game score',currentScore)

      //increase score
      const updateScore = currentScore + 1;

      //show the update score
      currentScoreElement.innerText = updateScore;
       ///to change final Score
       
      //  const finalScoreElement = document.getElementById('change_score')
      //  // console.log(finalScoreElement)
      //  finalScoreElement.innerHTML = updateScore

     }
     else{
         console.log('press again')
        /// step-2 :get the current life
         const currentLifeElement = document.getElementById('current_life');
         console.log(currentLifeElement)
        //step-1 :reduce the current life
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText)
        console.log('My remaining life', currentLife)

        //show the remaining life
        const updateLife = currentLife-1;
       currentLifeElement.innerText = updateLife;


       if(updateLife===0){
         console.log('Game Over')
         //   const playGroundSection = document.getElementById('play_ground')
         //   playGroundSection.classList.add('hidden');
         addElementById('play_ground');

         //   const FinalSection = document.getElementById('final_score')
         //   FinalSection.classList.remove('hidden')

         removeElementById('final_score')

         const lastScore = getTextElementValueById('current_score');
         console.log('Last score',lastScore);
         setTextElementValueById('last_score',lastScore)


         ///Clear the last selected alphabet 
        //  const currentAlphabet = getTextElementValueById('current_alphabet')


         const removeBackgroundColor = document.getElementById(expectedAlphabet);
         removeBackgroundColor.classList.remove('bg-red-400')
  

         // ///to change final Score
       
         // const finalScoreElement = document.getElementById('change_score')
         // // console.log(finalScoreElement)
         // finalScoreElement.innerHTML = updateScore







       }
    
      ///create a alphabet string
        const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
        const alphabet = alphabetString.split("")
      
    
        //get s random number
        const randomNumber = Math.random()*25
        const index = Math.round(randomNumber)
        // console.log(index);
    
        const randomIndex = alphabet[index];
        console.log(randomIndex)
    
        const currentAlphabet = document.getElementById('current_alphabet');
        currentAlphabet.innerText=(randomIndex)
        
         const addBackgroundColor  = document.getElementById(randomIndex);
       
          addBackgroundColor.classList.add('bg-red-400')
         
       const removeBackgroundColor = document.getElementById(expectedAlphabet);
       removeBackgroundColor.classList.remove('bg-red-400')
     } 
}

document.addEventListener('keyup',handleKeyboardButtonPress)


