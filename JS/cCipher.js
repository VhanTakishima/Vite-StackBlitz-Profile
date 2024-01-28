const btnEncrypt = document.querySelector("#ceasarEncrypt");
const btnDecrypt = document.querySelector("#ceasarDecrypt");
const key = document.querySelector("#ceasarKey");
const codex = document.querySelector("#codex");
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let eClick = document.querySelector("#eClick");
let dClick = document.querySelector("#dClick");
// NTS:a=0,z=25
let eClickCount = parseInt(eClick.textContent,10);
let dClickCount = parseInt(dClick.textContent,10);

function inputNumbersOnly(input) {
    input.value = input.value.replace(/\D/g, ''); 
}
function updateNerdStats(){
    eClick.textContent=eClickCount;
    dClick.textContent=dClickCount;
}

function encryptC(){
    cipherMethod(1)
    eClickCount++;
    dClickCount--;
    updateNerdStats();
    // console.log("Updated eClick:", eClick.textContent);
}

function decryptC(){
    cipherMethod(-1)
    //NTS: testing pababa if gumana this reverese theory dont remove
    dClickCount++;
    eClickCount--;
    updateNerdStats();
}




function cipherMethod(direction){
    if(key.value === ''){
        alert("Put how much shift you need in key");
        }
else { 
     codex.value = codex.value.toLowerCase();
    let keyValue = parseInt(key.value) * direction;
    let codexTexts = '';
    
    for(const letter of codex.value){
       if(!alphabet.includes(letter)){
        codexTexts += letter;
        continue
       }
       const indexLetter = alphabet.findIndex(item => item === letter);
       const newIndex = (indexLetter + keyValue+26) % 26;

       codexTexts += alphabet[newIndex];
        }
        codex.value = codexTexts;

    }


}


