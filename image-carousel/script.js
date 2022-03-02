const imgs = document.getElementById('imgs')
const img = document.querySelectorAll('#imgs img')
console.log(img.length)
idx = 0;
function run() {
    idx++
    if (idx > img.length - 1) {
        idx = 0
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`
}

setInterval(run, 2000)