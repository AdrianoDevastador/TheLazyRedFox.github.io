function fullscreen() {
  var botaoFullscreen = document.getElementById("fullButton")
  var img = document.getElementById("imagem1")
  const ImageViewer = `
      display: none;
      position: fixed;
      z-index: 1;
      padding-top: 100px;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgb(0,0,0);
      background-color: rgba(0,0,0,0.9);
  `

  if (botaoFullscreen.onclick) {
    img.requestFullscreen()
    alert("pau no seu cu arrombadinho")
    img.style.cssText = ImageViewer
    }
}
