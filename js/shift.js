let originalInput = document.querySelector("#in");
let shiftInput = document.querySelector("#key");
let encryptedInput = document.querySelector("#out");

//let text = "abcdefg";
//let out = document.getElementById("demo");

let text = originalInput.value;

originalInput.addEventListener("input", characterEntered, false);

function characterEntered(e) {
  text = e.target.value;
  e.target.value = text;
  startEncryption();
}

function startEncryption() {
    let s = shiftInput.value ? Number(shiftInput.value) : 0;
    let result="";
    for (let i = 0; i < text.length; i++)
    {
        let char = text[i];
        if (char.toUpperCase(text[i]))
        {
            let ch =  String.fromCharCode((char.charCodeAt(0) + s-65) % 26 + 65);
            result += ch;
        }
        else
        {
            let ch = String.fromCharCode((char.charCodeAt(0) + s-97) % 26 + 97);
            result += ch;
        }
    }
  console.log(result);
  encryptedInput.value = result;
  //out.innerHTML = encryptedMessage;
}
