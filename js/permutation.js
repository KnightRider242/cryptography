
//Encryption
function permutation_encrypt() {
    const pi = document.getElementById("key").value
    var plaintext = document.getElementById("plain").value
    console.log(pi.length)
    const plain = []
    var cnt = pi.length
    var s = ''
    for (let i = 0; i < plaintext.length; i++) {
        s += plaintext[i]
        cnt -= 1
        if (cnt == 0) {
            plain.push(s)
            cnt = pi.length
            s = ''
        }
    }

    const cipher = []
    var ciphertext = ''
    s = ''
    for (let i = 0; i < plain.length; i++) {
        for (let j = 0; j < plain[i].length; j++) {
            s += plain[i][pi[j] - 1]
        }
        cipher.push(s)
        s = ''
    }

    for (let i = 0; i < cipher.length; i++) {
        ciphertext += cipher[i]
    }

    var cipher_res = document.getElementById("cipher")
    cipher_res.value = ciphertext
}

// Decryption
function permutation_decrypt() {
    const pi = document.getElementById("key").value
    var ciphertext = document.getElementById("cipher").value

    const cipher = []
    var cnt = pi.length
    var s = ''
    for (let i = 0; i < ciphertext.length; i++) {
        s += ciphertext[i]
        cnt -= 1
        if (cnt == 0) {
            cipher.push(s)
            cnt = pi.length
            s = ''
        }
    }

    const plain = []
    var plaintext = ''
    s = ''
    for (let i = 0; i < cipher.length; i++) {
        for (let j = 0; j < cipher[i].length; j++) {
            s += cipher[i][pi.indexOf(j + 1)]
        }
        plain.push(s)
        s = ''
    }

    for (let i = 0; i < plain.length; i++) {
        plaintext += plain[i]
    }

    var plain_res = document.getElementById("plain")
    plain_res.value = plaintext
}