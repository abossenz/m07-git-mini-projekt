// MATTHIAS – nur lokaler Effekt im eigenen Bereich
const btn = document.getElementById("matthiasBtn");
const out = document.getElementById("matthiasOutput");

btn.addEventListener("click", () => {
  out.textContent = "Button wurde geklickt 👍";
});