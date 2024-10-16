function play(){
    ///Home screen section
    console.log('play game')
    const homeSection  = document.getElementById('home_screen')
    homeSection.classList.add('hidden')
     

     //playground section

    const playGroundSection = document.getElementById('play_ground');
    playGroundSection.classList.remove('hidden');
    


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
         
     }
     else{
        // console.log('press again')
        
    
    
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

