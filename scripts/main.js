const { default: SimpleParallax } = require("simple-parallax-js");


const slowScrolling = document.getElementsByClassName('slowScroll');
new SimpleParallax(slowScrolling);

const still = document.getElementsByClassName('still');
new simpleParallax(still, {
	transition: 'cubic-bezier(0,0,0,1)'
});

const moveLeft = document.getElementsByClassName('goingLeft');
new simpleParallax(moveLeft, {
    orientation: 0,
})


function updateClock() {
    var now = new Date(), // current date
        months = ['January', 'February', 'March', "April", "May", "June", "July", "August", "Septemebr", "October", "November", "December"];
        time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds(); 

        date = [now.getDate(), 
                months[now.getMonth()],
                now.getFullYear()].join(' ');

    document.getElementById('time').innerHTML = [date, time].join(' / ');

    setTimeout(updateClock, 1000);
}

updateClock();