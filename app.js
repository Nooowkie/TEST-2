const textarea = document.getElementById("textarea");
const total = document.getElementById("total");
const remaining = document.getElementById("remaining");
const maxLength = 15;

textarea.addEventListener("input", () => {
  textarea.value = textarea.value.slice(0, maxLength);
  total.textContent = `Всего: ${textarea.value.length}`;
  remaining.textContent = `Осталось: ${maxLength - textarea.value.length}`;
});