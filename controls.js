const playButton = document.querySelector("#play-score");
const stopButton = document.querySelector("#stop-score");
const status = document.querySelector("#play-status");
const score = document.querySelector("#score-editor");

customElements.whenDefined("strudel-editor").then(() => {
  playButton.addEventListener("click", async () => {
    try {
      playButton.disabled = true;
      status.textContent = "starting audio…";
      await score.editor.evaluate();
      stopButton.disabled = false;
      status.textContent = "score running";
    } catch (error) {
      playButton.disabled = false;
      status.textContent = "playback failed — open the score and press Ctrl+Enter";
      console.error(error);
    }
  });

  stopButton.addEventListener("click", async () => {
    await score.editor.stop();
    stopButton.disabled = true;
    playButton.disabled = false;
    status.textContent = "score stopped";
  });
});
