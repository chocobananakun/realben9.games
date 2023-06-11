var challengeMode = prompt("Enter Challenge Mode (0/def = No Challenge, 1 = True Neverclick, 2 = No Golden Cookies, 3 = No Legacy)", "0")
if (challengeMode != null && challengeMode != 0) {
	document.getElementById("versionNumber").style.bottom = "22px"
	document.getElementById("versionNumber").outerHTML = document.getElementById("versionNumber").outerHTML + '<div id="versionNumber" class="title challengeMode" style="color:#f00">???</div>'
}
if (challengeMode == 1) {
	document.getElementsByClassName("challengeMode")[0].innerHTML = "True Neverclick"
	document.getElementById("bigCookie").outerHTML = null
}
if (challengeMode == 2) {
	document.getElementsByClassName("challengeMode")[0].innerHTML = "No Golden Cookies"
	Game.shimmer = function(){Game.Notify("No Golden Cookies!","A golden cookie just tried to spawn, but this challenge prevented it."+'</a>',[10,14])}
}
if (challengeMode == 3) {
	document.getElementsByClassName("challengeMode")[0].innerHTML = "No Legacy"
	document.getElementById("legacyButton").getElementsByClassName("subButton")[0].innerHTML = "No Legacy"
	Game.Ascend = function(){Game.Notify("No Legacy!","This button is disabled for this challenge."+'</a>',[21,6])}
}