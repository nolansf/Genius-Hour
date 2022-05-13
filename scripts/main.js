// parallax, slowed scrolling of certain elemeents
const parallax = document.getElementsByClassName("parallax");

window.addEventListener('scroll', function() {
    const offset = window.pageYOffset;
    parallax.style.backgroundPositionY = `${offset * 1.2}px`;
})


// clock
window.onload = () => {
    setInterval(updateClock, 1000)
}

function updateClock(){
    const current = new Date()
    const clock = document.getElementById("clock")
    const h = current.getHours()
    const m = current.getMinutes()
    const s = current.getSeconds()
    clock.innerHTML = `${h}:${m}:${s}`
}