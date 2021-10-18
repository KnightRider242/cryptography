/*
let text = "MAGIC";
let cipher="JDTHR";
let a = 7;
let b = 3;
*/
let originalInput = document.querySelector("#in");
let aInput = document.querySelector("#a");
let bInput = document.querySelector("#b");
let encryptedInput = document.querySelector("#out");

let text = originalInput.value;
//let cipher = originalInput.value;

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
    let result ="";
    let a = aInput.value? Number(aInput.value) : 0;
    let b = bInput.value? Number(bInput.value) : 0;
    for (let i = 0; i < text.length; i++) 
    {
        let char = text[i];
        if (char.toUpperCase(text[i]))
        {
            let ch =  String.fromCharCode((((a*(char.charCodeAt(0) - 65))+b) % 26) + 65);
            result += ch;
        }
        else
        {
            let ch =  String.fromCharCode((((a*(char.charCodeAt(0) - 97))+b) % 26) + 97);
            result += ch;
        }
    }
    console.log(result)
    encryptedInput.value = result;
    //cipher = result;
}

//encrypt();
//console.log(cipher)
function decrypt() 
{
    //console.log(text);
    let decrypted="";
    let a = aInput.value? Number(aInput.value) : 0;
    let b = bInput.value? Number(bInput.value) : 0;
    let a_inv = 0;
    let flag = 0;
    //Find a^-1 (the multiplicative inverse of a
    //in the group of integers modulo m.)
    for (let i = 0; i < 26; i++) 
    {
        flag = (a * i) % 26;
        // Check if (a*i)%26 == 1,
        // then i will be the multiplicative inverse of a
        if (flag == 1) 
        {
            a_inv = i;    
        }
        
    }
    for (let i = 0; i < text.length; i++) 
    {
        let char = text[i];
        if (char.toUpperCase(text[i]))
        {
            let c =  String.fromCharCode(((a_inv*((char.charCodeAt(0) - 65)-b)) % 26) + 65);
            decrypted += c;
        }
        else
        {
            let c =  String.fromCharCode(((a_inv*((char.charCodeAt(0) - 97)-b)) % 26) + 97);
            decrypted += c;
        }
    }
    console.log(decrypted);
    encryptedInput.value = decrypted;
}