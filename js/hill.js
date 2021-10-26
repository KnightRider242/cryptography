
//Encryption
function hill_encrypt() {
	console.log(math.mod(-8, 26))
	var m = document.getElementById("keydim").value
	const kmat = []
	for (let i = 0; i < m; i++) {
		kmat[i] = []
	}
	var k = 0
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < m; j++) {
			kmat[i][j] = document.getElementsByName("keymat")[k++].value
		}
	}

	var ptxt = document.getElementById("plain").value
	var alp = 'abcdefghijklmnopqrstuvwxyz'
	var carr = []
	const pxk = []
	var tmp = 0
	for (let i = 0; i < ptxt.length; i++) {
		carr.push(alp.indexOf(ptxt[i]))
		if (math.mod(i, m) == m - 1) {
			for (let k = 0; k < m; k++) {
				tmp = 0
				for (let j = 0; j < m; j++) {
					tmp += (carr[j] * kmat[j][k])
				}
				pxk.push(math.mod(tmp, 26))
			}
			carr = []
		}
	}
	ctxt = ''
	for (let i = 0; i < pxk.length; i++) {
		ctxt += alp[pxk[i]]
	}
	document.getElementById("cipher").value = ctxt;

	const kinv = inverse(m, kmat)
	k = 0
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < m; j++) {
			document.getElementsByName("keyinv")[k++].value = kinv[i][j]
		}
	}
}

//Decryption
function hill_decrypt() {
	var m = document.getElementById("keydim").value
	const kinv = []
	for (let i = 0; i < m; i++) {
		kinv[i] = []
	}
	var k = 0
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < m; j++) {
			kinv[i][j] = document.getElementsByName("keyinv")[k++].value
		}
	}

	var ctxt = document.getElementById("cipher").value
	var alp = 'abcdefghijklmnopqrstuvwxyz'
	var carr = []
	const cxk = []
	var tmp = 0
	for (let i = 0; i < ctxt.length; i++) {
		carr.push(alp.indexOf(ctxt[i]))
		if (i % m == m - 1) {
			for (let k = 0; k < m; k++) {
				tmp = 0
				for (let j = 0; j < m; j++) {
					tmp += carr[j] * kinv[j][k]
				}
				cxk.push(tmp % 26)
			}
			carr = []
		}
	}
	ptxt = ''
	for (let i = 0; i < cxk.length; i++) {
		ptxt += alp[cxk[i]]
	}
	document.getElementById("plain").value = ptxt;

	const kmat = inverse(m, kinv)
	console.log(kmat)
	k = 0
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < m; j++) {
			console.log(kmat[i][j])
			document.getElementsByName("keymat")[k++].value = kmat[i][j]
		}
	}
}

function inverse(dim, mat) {
	if (dim == 2) {
		var det = (mat[0][0] * mat[1][1]) - (mat[0][1] * mat[1][0])
		var tem = mat[0][0]
		mat[0][0] = mat[1][1]
		mat[1][1] = tem
		mat[0][1] = -(mat[0][1])
		mat[1][0] = -(mat[1][0])
		for (let i = 0; i < 26; i++) {
			if (math.mod((det * i), 26) == math.mod(1, 26)) {
				var detinv = i
			}
		}

		for (let i = 0; i < dim; i++) {
			for (let j = 0; j < dim; j++) {
				console.log(mat[i][j])
				mat[i][j] = math.mod((detinv * mat[i][j]), 26)
				console.log(mat[i][j])
			}
		}

		return mat
	}

	if (dim == 3) {
		let a = mat[0][0], b = mat[0][1], c = mat[0][2];
		let d = mat[1][0], e = mat[1][1], f = mat[1][2];
		let g = mat[2][0], h = mat[2][1], i = mat[2][2];
		det = ((a * e * i) + (b * f * g) + (c * d * h)) - ((a * f * h) + (b * d * i) + (c * e * g))
		a1 = (e * i) - (f * h), a2 = -((b * i) - (c * h)), a3 = (b * f) - (c * e)
		a4 = -((d * i) - (f * g)), a5 = (a * i) - (c * g), a6 = -((a * f) - (c * d))
		a7 = (d * h) - (e * g), a8 = -((a * h) - (b * g)), a9 = (a * e) - (b * d)
		adj = [[a1, a2, a3], [a4, a5, a6], [a7, a8, a9]]
		for (let i = 0; i < 26; i++) {
			if (math.mod((det * i), 26) == math.mod(1, 26)) {
				var detinv = i
			}
		}

		for (let i = 0; i < dim; i++) {
			for (let j = 0; j < dim; j++) {
				mat[i][j] = math.mod((detinv * adj[i][j]), 26)
			}
		}

		return mat
	}


}