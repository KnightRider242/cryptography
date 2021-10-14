let originalInput = document.querySelector("#in");
let shiftInput = document.querySelector("#key");
let encryptedInput = document.querySelector("#out");

//let originalMessage = "abcdefg";
//let out = document.getElementById("demo");

let originalMessage = originalInput.value;

originalInput.addEventListener("input", characterEntered, false);

function characterEntered(e) {
  // Ensure we only deal with lowercase letters
  originalMessage = e.target.value;
  originalMessage = originalMessage.toLowerCase();
  originalMessage = originalMessage.replace(/[^a-z]/, '');

  e.target.value = originalMessage;

  // Let's get the party started!
  startEncryption();
}

function startEncryption() {
    let encryptedMessage = "";
    let shift = shiftInput.value ? Number(shiftInput.value) : 0;
    for (letter of originalMessage) {
        encryptedMessage += shiftLetter(letter, shift);
  }
  //console.log(encryptedMessage);
  encryptedInput.value = encryptedMessage;
  //out.innerHTML = encryptedMessage;
}
//startEncryption();

function shiftLetter(letter, shift) {
    let newLetter = "";
    let letterCode = letter.charCodeAt(0);
    let newLetterCode = letterCode + shift;
    if (newLetterCode < 97) {
        // If new letter goes below "a" aka character code 97
        newLetterCode += 26;
    } 
    else if (newLetterCode > 122) {
        // If new letter goes past "z" aka character code 122
        newLetterCode -= 26;
    }
    newLetter = String.fromCharCode(newLetterCode);
    return newLetter;
}