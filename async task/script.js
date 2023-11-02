const countdownElement = document.getElementById('countdown');

function countdown(count, callback) {
    if (count > 0) {
        countdownElement.textContent = count;
        setTimeout(() => {
            countdown(count - 1, callback);
        }, 1000);
    } else {
        callback();
    }
}

countdown(10, function() {
    countdownElement.textContent = "Happy Independence Day";
});
