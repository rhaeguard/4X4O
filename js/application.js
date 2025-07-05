// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator);
});

const ua = navigator.userAgent;
const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(ua);
if (isMobile) {
  document.getElementById("game-instructions").innerHTML = `Use your finger to <strong>swipe</strong> and move the tiles`
} else {
  document.getElementById("game-instructions").innerHTML = `Use the <strong>arrow keys</strong> to move the tiles`
}

let isAudioPlaying = false
const audio = document.getElementById("audio")
const audioBtn = document.getElementById("audio-control")

try {
  audio.volume = 0.3
  audio.play()
    .then(() => {
      isAudioPlaying = true
      audioBtn.innerHTML = '🔊'
    })
    .catch((e) => {
      isAudioPlaying = false
      audioBtn.innerHTML = '🔈'
    })
} catch (e) {
} finally { }

if (audioBtn) {
  audioBtn.addEventListener("click", () => {
    if (isAudioPlaying) {
      audio.pause()
      isAudioPlaying = false
      audioBtn.innerHTML = '🔈'
    } else {
      audio.play()
      isAudioPlaying = true
      audioBtn.innerHTML = '🔊'
    }
  })
}