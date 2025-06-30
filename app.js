const textarea = document.getElementById("textarea");
const total = document.getElementById("total");
const remaining = document.getElementById("remaining");
const maxLength = 15;

textarea.addEventListener("input", () => {
  let text = textarea.value;
  
  if (text.length > maxLength) {
    text = text.slice(0, maxLength);     
    textarea.value = text;                
  }

  const len = text.length;
  total.textContent = `Всего: ${len}`;
  remaining.textContent = `Осталось: ${maxLength - len}`;
});
