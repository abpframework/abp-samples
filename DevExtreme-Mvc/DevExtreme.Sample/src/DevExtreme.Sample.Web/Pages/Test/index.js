var seconds = 10,
    inProgress = false;

window.intervalId = window.intervalId || null;

function timer() {
    seconds--;
    setCurrentStatus();
    if(seconds === 0) {
        clearInterval(intervalId);
        seconds = 10;
        return;
    }
}

function setCurrentStatus() {
    $("#progressBarStatus").dxProgressBar("option", "value", (10 - seconds) * 10);
    $("#timer").text(("0" + seconds).slice(-2));
}

function progressBar_statusFormat(value) {
    return "Loading: " + value * 100 + "%";
};

function progressBar_onComplete(e) {
    inProgress = false;
    $("#progress-button").dxButton("option", "text", "Restart progress");
    e.element.addClass("complete");
};

function button_onClick(e) {
    clearInterval(intervalId);

    $("#progressBarStatus").removeClass("complete");

    if(inProgress) {
        e.component.option("text", "Continue progress");
        clearInterval(intervalId);
    } else {
        e.component.option("text", "Stop progress");
        setCurrentStatus();
        intervalId = setInterval(timer, 1000);
    }

    inProgress = !inProgress;
}