let originalInput = document.querySelector("#in");
let encryptedInput = document.querySelector("#out");
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
    let cipher = ""
    let map = {
        a: 'f', b: 'm', c: 'g',
        d: 's', e: 'h', f: 't',
        g: 'p', h: 'u', i: 'a',
        j: 'j', k: 'v', l: 'o',
        m: 'b', n: 'k', o: 'r',
        p: 'w', q: 'c', r: 'd',
        s: 'x', t: 'q', u: 'y',
        v: 'i', w: 'l', x: 'n',
        y: 'z', z: 'e'
    };
    for(i=0;i<text.length;++i)
    {
        cipher=cipher+map[text[i].toLowerCase()].toUpperCase();
        console.log(cipher)
    }
    encryptedInput.value = cipher
}
function decrypt()
{
    let cipher = ""
    var map = {
        a: 'f', b: 'm', c: 'g',
        d: 's', e: 'h', f: 't',
        g: 'p', h: 'u', i: 'a',
        j: 'j', k: 'v', l: 'o',
        m: 'b', n: 'k', o: 'r',
        p: 'w', q: 'c', r: 'd',
        s: 'x', t: 'q', u: 'y',
        v: 'i', w: 'l', x: 'n',
        y: 'z', z: 'e'
    };
    /*map1 = (function() {
        let tmp = {};
        var k;
        // Populate the tmp variable
        for(k in map1) {
                if(!map1.hasOwnProperty(k)) continue;
                tmp[map1[k]] = k;
                cipher1+=tmp[map1[k]]
            }
        })
    console.log(cipher1)
    encryptedInput.value = cipher1;
    return text.split('').filter(function(v) {
        // Filter out characters that are not in our list
        return tmp.hasOwnProperty(v.toLowerCase());
    }).map(function(v) {
        // Replace old character by new one
        // And make it uppercase to make it look fancier
        cipher2+=tmp[v.toLowerCase()].toUpperCase();
    }).join('');*/
    for(i in map)
    {
        map[map[i]]=i
    }
    for(i=0;i<text.length;++i)
    {
        cipher=cipher+map[text[i].toLowerCase()].toUpperCase();
        console.log(cipher)
    }
    encryptedInput.value = cipher
}