window.addEventListener('load', function () {
    setInterval(adjustClock, 1000);
});

let d, h, m, s, hdeg, ampm;

function adjustClock() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    hdeg = h * 30 + m / 2;
    h >= 12 ? ampm = "PM" : ampm = "AM"

    // console.log(d);
    console.log(`hours: \t\t${h}, 
minutes: \t${m}, 
seconds \t${s}, 
hoursDegree: \t${hdeg}, 
meridiem:\t${ampm}`);

    hh.style.transform = `rotate(${hdeg}deg)`;
    mh.style.transform = `rotate(${m * 6}deg)`;
    sh.style.transform = `rotate(${s * 6}deg)`;
    meridiem.innerHTML = ampm;
}
