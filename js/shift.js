let inputSTR = "abcdef";
let key = 1;
function shiftCipher()
{
    let encrypted = "";
    for(letter of inputSTR){
        encrypted += letter
    }
    console.log(encrypted);
}
 shiftCipher();