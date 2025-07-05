// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});

const ua = navigator.userAgent;
const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(ua);
if (isMobile) {
  document.getElementById("game-instructions").innerHTML = `Use your finger to <strong>swipe</strong> and move the tiles`
} else {
  document.getElementById("game-instructions").innerHTML = `Use the <strong>arrow keys</strong> to move the tiles`
}
