setInterval(function() {
    const clock = document.querySelector('.display');
    let time = new Date();
    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours();
    let day = 'AM';
    clock.textContent = hours + ':' + minutes + ':' + seconds + day;
})