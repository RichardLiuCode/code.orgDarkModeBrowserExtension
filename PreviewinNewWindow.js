setTimeout(function () {
    const openBtn = document.createElement("button");
    openBtn.style = "width:150px;height:40px;background-color:rgba(6, 108, 251, 1);color:white;border-color:rgba(6, 108, 251, 1);";
    openBtn.innerHTML = "Open preview";
    openBtn.addEventListener("click", function () {
        window.open(window.location.href.replace("/edit", ""), "_blank");
    });
    document.getElementById("runButton").parentElement.appendChild(openBtn);
}, 1200)
