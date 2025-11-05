console.log("extension loaded");
setTimeout(function () {
  document.getElementById("hide-toolbox-icon").click();

  let leftLineIndexsBar = document.querySelectorAll(".ace_layer.ace_gutter-layer.ace_folding-enabled");
  leftLineIndexsBar[0].style.backgroundColor = "rgb(48,47,47)";
  leftLineIndexsBar[0].style.color = "rgba(145, 142, 142, 1)";

  let contentText = document.querySelectorAll(".ace_scroller");
  contentText[0].style.backgroundColor = "rgb(48,47,47)";
  console.log()
  document.getElementById("show-code-header").style.pointerEvents = "none";
  document.getElementById("show-code-header").style.display = "none";

  document.getElementById("runButton").parentElement.style.backgroundColor = "rgba(128, 126, 126, 0)"
  document.getElementById("runButton").parentElement.parentElement.style.backgroundColor = "rgba(128, 126, 126, 0)"
  document.getElementById("screenSelector").parentElement.parentElement.style.backgroundColor = "rgba(128, 126, 126, 0)";

  document.getElementById("show-toolbox-icon").style.display = "none";

  document.getElementById("show-toolbox-click-target").style.pointerEvents = "none";

  const topThreeTabsButton = document.getElementById("playSpaceHeader").querySelectorAll("button");
  for (let i = 0; i < topThreeTabsButton.length; i = i + 1) {
    topThreeTabsButton.style = "background-color:white;"
  }

  const veryBottomBar = document.getElementById("debug-input").parentElement;
  const bottomLabel = veryBottomBar.querySelector("label");
  bottomLabel.style.color = "black";

  const bottomLeftFooter = document.getElementById("localeForm").parentElement;
  const copyRightsButton = bottomLeftFooter.querySelector("button");
  copyRightsButton.style.display = "none";
  document.getElementById("slider-cell").innerHTML = "";

  document.getElementById("debugger-watch-container").style.backgroundColor = "rgba(128, 126, 126, 1)";

  document.getElementById("clear-console-header").innerHTML = "<span style=\"background-color:#292f36;color:white;font-size:20px;font-family:arial;border:none;user-select:none\">⊘</span>"
  document.getElementById("clear-console-header").style.backgroundColor = "#292f36";
  document.getElementById("clear-console-header").parentElement.style.backgroundColor = "#292f36";
  document.getElementById("clear-console-header").firstElementChild.style.backgroundColor = "#292f36";

  document.getElementById("phoneFrameWrapper").style = "background-color:lightgray;border-radius:5px;"
  // Design tag
  document.getElementById("design-properties").style.color = "black";
  document.getElementById("design-properties").style.backgroundColor = "lightgray";
  document.getElementById("design-toolbox").style.backgroundColor = "aliceblue"
  document.getElementById("design-toolbox").style.color = "black";
  // Database tag
  document.getElementById("data-library-container").style.color = "black"
  document.getElementById("data-browser").style.backgroundColor = "lightgray";

}, 1200)






