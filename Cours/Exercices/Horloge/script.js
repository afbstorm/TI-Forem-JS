const displayTime = () => {
    let date = new Date();
    let time = date.toLocaleTimeString();

    document.getElementById('clock').textContent = time;
};

displayTime();
setInterval(displayTime, 1000);