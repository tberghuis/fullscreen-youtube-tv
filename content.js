var uiStateFullscreen = false;

var imgFullscreen = document.createElement("img");
imgFullscreen.src = browser.extension.getURL("fullscreen-icon.png");
imgFullscreen.style.position = "fixed";
imgFullscreen.style.top = "2rem";
imgFullscreen.style.right = "2rem";
imgFullscreen.style.display = "none";
// TODO, size img width, height in REM
document.body.appendChild(imgFullscreen);

// var imgExitFullscreen = document.createElement("img");
// imgExitFullscreen.src = browser.extension.getURL("exit-fullscreen-icon.png");
// imgExitFullscreen.style.position = "fixed";
// imgExitFullscreen.style.top = "2rem";
// imgExitFullscreen.style.right = "2rem";
// imgExitFullscreen.style.display = "none";
// document.body.appendChild(imgExitFullscreen);

// for some reason wasn't working properly
// document.body.addEventListener("touchstart", showIcon);

document.body.addEventListener("touchstart", showFullscreenIcon);

var showingFullscreenIcon = false;
function showFullscreenIcon() {
  if (!showingFullscreenIcon) {
    showingFullscreenIcon = true;
    imgFullscreen.style.display = "block";
    setTimeout(function() {
      imgFullscreen.style.display = "none";
      showingFullscreenIcon = false;
    }, 4000);
  }
}

// var showingExitFullscreenIcon = false;
// function showExitFullscreenIcon() {
//   if (!showingExitFullscreenIcon) {
// 	showingExitFullscreenIcon = true;
//     imgExitFullscreen.style.display = "block";
//     setTimeout(function() {
// 	  imgExitFullscreen.style.display = "none";
// 	  showingExitFullscreenIcon = false;
//     }, 4000);
//   }
// }

imgFullscreen.addEventListener("touchend", function() {
  document.documentElement.requestFullscreen();
  uiStateFullscreen = true;
});

// imgExitFullscreen.addEventListener("touchend", function(){
// 	document.documentElement.exitFullscreen();
// 	uiStateFullscreen = false;
// });

// function showIcon(){
// 	if(!uiStateFullscreen){
// 		showFullscreenIcon();
// 	}else{
// 		showExitFullscreenIcon();
// 	}
// }

// i don't need exit fullscreen, i can just press back
// document.exitFullscreen();
