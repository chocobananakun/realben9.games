window.addEventListener('load', function () {
	info0 = document.getElementById("info0")
	if (info0) {
        serial0 = Math.floor(Math.random() * 2)
        if (serial0 == 0) {serial0 = Math.floor(Math.random() * 10)}
        else {serial0 = (Math.floor(Math.random() * 26) + 10).toString(36)}
        serial1 = Math.floor(Math.random() * 2)
        if (serial1 == 0) {serial1 = Math.floor(Math.random() * 10)}
        else {serial1 = (Math.floor(Math.random() * 26) + 10).toString(36)}
        serial2 = Math.floor(Math.random() * 10)
        serial3 = (Math.floor(Math.random() * 26) + 10).toString(36)
        serial4 = (Math.floor(Math.random() * 26) + 10).toString(36)
        serial5 = Math.floor(Math.random() * 10)
        serial = (serial0 + "" + serial1 + serial2 + serial3 + serial4 + serial5).toUpperCase()
        info0.innerHTML = info0.innerHTML + '<div class="widget serial">' + serial + '</div>'
        batteries = Math.floor(Math.random() * 4)
        if (batteries == 0) {}
        else if (batteries == 1) {info0.innerHTML = info0.innerHTML + '<div class="widget separator"></div><div class="widget battery d"></div>'}
        else if (batteries == 2) {info0.innerHTML = info0.innerHTML + '<div class="widget separator"></div><div class="widget battery aa"></div>'}
        else {info0.innerHTML = info0.innerHTML + '<div class="widget separator"></div><div class="widget battery aa"></div><div class="widget battery d"></div>'}
        indcount = Math.floor(Math.random() * 3)
        if (indcount == 0) {}
        else if (indcount == 1) {
            ind0 = Math.floor(Math.random() * 11)
            if (ind0 == 0) {ind0 = "BOB"}
            else if (ind0 == 1) {ind0 = "CAR"}
            else if (ind0 == 2) {ind0 = "CLR"}
            else if (ind0 == 3) {ind0 = "FRK"}
            else if (ind0 == 4) {ind0 = "FRQ"}
            else if (ind0 == 5) {ind0 = "IND"}
            else if (ind0 == 6) {ind0 = "MSA"}
            else if (ind0 == 7) {ind0 = "NSA"}
            else if (ind0 == 8) {ind0 = "SIG"}
            else if (ind0 == 9) {ind0 = "SND"}
            else if (ind0 == 10) {ind0 = "TRN"}
            lit0 = Math.floor(Math.random() * 2)
            if (lit0 == 0) {info0.innerHTML = info0.innerHTML + '<div class="widget separator"></div><div class="widget indicator unlit"><span class="label">' + ind0 + '</span></div>'}
            else {info0.innerHTML = info0.innerHTML + '<div class="widget separator"></div><div class="widget indicator lit"><span class="label">' + ind0 + '</span></div>'}
        }
        else {
            ind0 = Math.floor(Math.random() * 11)
            if (ind0 == 0) {ind0 = "BOB"}
            else if (ind0 == 1) {ind0 = "CAR"}
            else if (ind0 == 2) {ind0 = "CLR"}
            else if (ind0 == 3) {ind0 = "FRK"}
            else if (ind0 == 4) {ind0 = "FRQ"}
            else if (ind0 == 5) {ind0 = "IND"}
            else if (ind0 == 6) {ind0 = "MSA"}
            else if (ind0 == 7) {ind0 = "NSA"}
            else if (ind0 == 8) {ind0 = "SIG"}
            else if (ind0 == 9) {ind0 = "SND"}
            else if (ind0 == 10) {ind0 = "TRN"}
            lit0 = Math.floor(Math.random() * 2)
            if (lit0 == 0) {info0.innerHTML = info0.innerHTML + '<div class="widget separator"></div><div class="widget indicator unlit"><span class="label">' + ind0 + '</span></div>'}
            else {info0.innerHTML = info0.innerHTML + '<div class="widget separator"></div><div class="widget indicator lit"><span class="label">' + ind0 + '</span></div>'}
            ind1 = Math.floor(Math.random() * 11)
            if (ind1 == 0) {ind1 = "BOB"}
            else if (ind1 == 1) {ind1 = "CAR"}
            else if (ind1 == 2) {ind1 = "CLR"}
            else if (ind1 == 3) {ind1 = "FRK"}
            else if (ind1 == 4) {ind1 = "FRQ"}
            else if (ind1 == 5) {ind1 = "IND"}
            else if (ind1 == 6) {ind1 = "MSA"}
            else if (ind1 == 7) {ind1 = "NSA"}
            else if (ind1 == 8) {ind1 = "SIG"}
            else if (ind1 == 9) {ind1 = "SND"}
            else if (ind1 == 10) {ind1 = "TRN"}
            lit1 = Math.floor(Math.random() * 2)
            if (lit1 == 0) {info0.innerHTML = info0.innerHTML + '<div class="widget indicator unlit"><span class="label">' + ind1 + '</span></div>'}
            else {info0.innerHTML = info0.innerHTML + '<div class="widget indicator lit"><span class="label">' + ind1 + '</span></div>'}
        }
	}
})
