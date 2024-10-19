function addElementById(elementId){
    const element =document.getElementById(elementId)
    element.classList.add('hidden');
}
function removeElementById(removeclassaddkorbo){
    const element =document.getElementById(removeclassaddkorbo)
    element.classList.remove('hidden');
}


// function randomNum(alphabet){
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
//     const alphabet = alphabetString.split("")
//     console.log(alphabet);
//     const randomNumber = Math.random()*25
//         const index = Math.round(randomNumber)
//         // console.log(index);
    
//         const randomIndex = alphabet[index];
//         console.log(randomIndex)
    
//         const currentAlphabet = document.getElementById('current_alphabet');
//         currentAlphabet.innerText=(randomIndex);


// }

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementTextValue = element.innerText;
    const value = parseInt(elementTextValue);
    return value;
}
function setTextElementValueById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}