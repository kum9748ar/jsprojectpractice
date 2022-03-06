const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

function goCountown() {
    const fest = new Date(2022, 3, 2);
    const current = new Date();
    const sec = (fest - current) / 1000;
    const d = Math.floor(sec / 3600 / 24);
    const hrs = Math.floor(sec / 3600) % 24;
    const min = Math.floor(sec / 60) % 60;
    const s = Math.floor(sec) % 60
    days.innerText = d;
    hours.innerText = hrs;
    minutes.innerText = min;
    seconds.innerText = s;
}
goCountown()

setInterval(goCountown, 1000)