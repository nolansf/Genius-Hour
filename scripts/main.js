let landing = document.getElementById('landing');

//paralax
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    console.log(value);
})


// updates clock
window.onload = () => {
    setInterval(updateClock, 1000)
}

// creates clock
function updateClock(){
    const current = new Date()
    const clock = document.getElementById("clock")
    const h = current.getHours()
    const m = current.getMinutes()
    const s = current.getSeconds()
    clock.innerHTML = `${h}:${m}:${s}`
}

/*
// hides and shows navigation bar
function ScrollDirection(event){
    var delta;
    if (event.wheelDelta){
        delta = event.wheelDelta;
    } else{
        delta = -1 * event.deltaY;
    }
    if (delta < 1){
        document.body.nav.style.display = "hidden";
        document.body.header.style.backgroundColor = rgba(0, 0, 0, 0);
    } else if (delta > -1){
        document.body.nav.style.display = "block";
        document.body.header.style.backgroundColor = rgba(256, 256, 256, 1);
    }
}
*/