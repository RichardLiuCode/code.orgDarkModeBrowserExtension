document.addEventListener("keydown", function (e) {
    if (((e.ctrlKey) && (e.shiftKey) && (e.key == "I")) || (e.key == "F12")) {
        e.preventDefault()
        var consoleButton = document.getElementById("debug-area-header").querySelectorAll("button");
        consoleButton[0].click();
    }
    if (((e.ctrlKey) && (e.key == "s"))) {
        e.preventDefault();
        document.getElementById("resetButton").click();
        document.getElementById("runButton").click();
    }

});


