const modal = document.getElementById("modal");
const open1 = document.getElementById("openModal");
const open2 = document.getElementById("openModal2");
const close = document.getElementById("closeModal");

function openModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

open1?.addEventListener("click", openModal);
open2?.addEventListener("click", openModal);
close?.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target?.dataset?.close) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
