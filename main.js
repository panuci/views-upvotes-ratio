// Get the number of views of the video
var views = parseInt(document.querySelector(".ytd-video-view-count-renderer").innerText.replaceAll(",", "").replace(" views", ""));
var likes = parseInt(document.querySelector('yt-formatted-string[aria-label]').getAttribute("aria-label").replaceAll(",", "").replace(" likes", ""));



// Get the parent element on which the progress bar will be prepended
var top_level_buttons = document.getElementById("top-level-buttons-computed");

// Create the progress bar element
var container = document.createElement("div");
container.setAttribute("id", "panuciContainer");

var progress_bar = document.createElement("progress");
progress_bar.setAttribute("id", "panuciProgressBar");
progress_bar.setAttribute("max", views * 0.025);
progress_bar.setAttribute("value", likes);
container.prepend(progress_bar);

var intervalId = window.setInterval(function(){
  top_level_buttons.prepend(container);
}, 2000);