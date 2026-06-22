const hamburgerButtons = document.querySelectorAll(".hamburger-button");

hamburgerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const navId = button.getAttribute("aria-controls");
    const nav = document.getElementById(navId);

    if (!nav) return;

    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    nav.setAttribute("aria-hidden", String(isOpen));
    nav.classList.toggle("is-open");
  });
});
