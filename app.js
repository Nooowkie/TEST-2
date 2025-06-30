const textarea = document.getElementById("textarea");
const total = document.getElementById("total");
const remaining = document.getElementById("remaining");
const maxLength = textarea.getAttribute("maxlength");

textarea.addEventListener("input", () => {
  const len = textarea.value.length;
  total.textContent = `Всего: ${len}`;
  remaining.textContent = `Осталось: ${maxLength - len}`;
});
