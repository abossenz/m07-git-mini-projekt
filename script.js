// MATTHIAS – NUR LOKALER EFFEKT IM EIGENEN BEREICH
const btn = document.getElementById("matthiasBtn");
const backbtn = document.getElementById("matthiasBackBtn");
const out = document.getElementById("matthiasOutput");
const timeBtn = document.getElementById("matthiasTimeBtn");
const timeOut = document.getElementById("matthiasTimeOutput");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

btn.addEventListener("click", () => {
  count++;
  if (count === 0) {
    out.textContent = "Back to zero";
  } else {
    out.textContent = "Button wurde " + count + " mal geklickt";
  }
});

backbtn.addEventListener("click", () => {
  count--;
  if (count === 0) {
    out.textContent = "Back to zero";
  } else {
    out.textContent = "Button wurde " + count + " mal geklickt";
  }
});

timeBtn.addEventListener("click", () => {
  const now = new Date();
  timeOut.textContent = "Aktuelle Uhrzeit: " + now.toLocaleTimeString();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  out.textContent = "Reset Button wurde geklickt";
});