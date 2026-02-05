// MATTHIAS – NUR LOKALER EFFEKT IM EIGENEN BEREICH
const btn = document.getElementById("matthiasBtn");
const backbtn = document.getElementById("matthiasBackBtn");
const out = document.getElementById("matthiasOutput");
const timeBtn = document.getElementById("matthiasTimeBtn");
const timeOut = document.getElementById("matthiasTimeOutput");
const resetBtn = document.getElementById("resetBtn");
const dateBtn = document.getElementById("matthiasDateBtn");

let count = 0;

btn.addEventListener("click", () => {
  count++;
  if (count === 0) {
    out.textContent = "Zrugg uf null";
  } else {
    out.textContent = "Dä Chnopf isch " + count + " mal ufe gange";
  }
});

backbtn.addEventListener("click", () => {
  count--;
  if (count === 0) {
    out.textContent = "Zrugg uf null";
  } else {
    out.textContent = "Dä Chnopf isch " + count + " mal abe gange";
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  out.textContent = "Zrugg uf null";
});

timeBtn.addEventListener("click", () => {
  const now = new Date();
  timeOut.textContent = "Aktuelli Uhrziit: " + now.toLocaleTimeString();
});

dateBtn.addEventListener("click", () => {
  const now = new Date();
  timeOut.textContent = "Aktuells Datum: " + now.toLocaleDateString();
});