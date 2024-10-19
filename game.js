function play(){
    ///Home screen section
   

    addElementById('home_screen');
    addElementById('final_score');
     

     //playground section

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
        
         addElementById('play_ground');

         

         removeElementById('final_score')

         const lastScore = getTextElementValueById('current_score');
         console.log('Last score',lastScore);
         setTextElementValueById('last_score',lastScore)


      

         const removeBackgroundColor = document.getElementById(expectedAlphabet);
         removeBackgroundColor.classList.remove('bg-red-400')
  

        




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


