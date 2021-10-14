let text = "MAGIC";
let cipher="JDTHR";
let a = 7;
let b = 3;
function encrypt()
{
    let result ="";
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
    //cipher = result;
}

//encrypt();
//console.log(cipher)
function decrypt() 
{
    let decrypted=""
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
    for (let i = 0; i < cipher.length; i++) 
    {
        let char = cipher[i];
        if (char.toUpperCase(cipher[i]))
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
}