snow = document.querySelectorAll("div")[0]
snow.style.rotate = '270deg'
af23 = Math.floor(Math.random() * 25)
if (af23 == 0) {
    af23 = Math.floor(Math.random() * 7)
    if (af23 == 0) {window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
    else if (af23 == 1) {window.location.replace('crates.html')}
    else if (af23 == 2) {window.location.replace('pixel_draw.html')}
    else if (af23 == 3) {window.location.replace('gateway.html')}
    else if (af23 == 4) {window.location.replace('rotary_moment.html')}
    else if (af23 == 5) {window.location.replace('gravity.html')}
    else {window.location.replace('bsod.html')}
}
