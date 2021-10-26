let originalInput = document.querySelector("#in");
let shiftInput = document.querySelector("#key");
let encryptedInput = document.querySelector("#out");

//let text = "abcdefg";
//let out = document.getElementById("demo");

let text = originalInput.value;

originalInput.addEventListener("input", characterEntered, false);
function characterEntered(e) 
{
    text = e.target.value;
    e.target.value = text;
    if (document.getElementById("enc").checked) {
        //console.log("encrypt")
        encrypt();
    }
    else if (document.getElementById("dec").checked) {
        //console.log("decrypt")
        decrypt();
    }    
}

function encrypt()
{
    let key = shiftInput.value;
    console.log(key)
    let cipher=""
    let mod = key.length;
    let j = 0;
    for(let i = key.length; i<text.length;i++){
        key+=key[j%mod];
        j++;
    }
    for(i = 0;i<text.length;i++){
        k = key[i];
        t = text[i];
        cipher+=String.fromCharCode(((k.charCodeAt(0)-65 + t.charCodeAt(0)-65)%26)+65);
    }
    console.log(cipher)
    encryptedInput.value = cipher;
}

function decrypt()
{
    let key = shiftInput.value;
    let cipher=""
    console.log(key)
    let mod = key.length;
    let j = 0;
    for(let i = key.length; i<text.length;i++){
        key+=key[j%mod];
        j++;
    }
    for(i = 0;i<text.length;i++){
        k = key[i];
        t = text[i];
        cipher+=String.fromCharCode(((t.charCodeAt(0)-k.charCodeAt(0)+26)%26)+65);
    }
    console.log(cipher)
    encryptedInput.value = cipher;
}
