// Media share pentru navbar
const nav = document.querySelector(".nav-ul");
const more = document.querySelector(".more");
const navLinks = document.querySelectorAll(".nav-ul li");
//toggle nav
more.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});
//animate link
navLinks.forEach((i, index) => {
  more.addEventListener("click", () => {
    i.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s  `;
  });
});

// home
const home = document.querySelector(".home");
const slider = document.querySelector(".slider");

const tl = new TimelineMax();

tl.fromTo(home, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
  .fromTo(
    home,
    1.2,
    { width: "100%" },
    { width: "80%", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1.2,
    { x: "-100%" },
    { x: "-0%", ease: Power2.easeInOut },
    "-=1.2"
  );

// ANIMATION BUTTONS

const ripple = (el) => {
  let d = el.dataset.ripple.split("-"),
    s = "rgba(156, 14, 14, 0.4)",
    e = "rgba(156, 14, 14, 1)";
  d[2] = Number(d[2]) + 4;
  el.dataset.ripple = d.join("-");
  el.style.background = `radial-gradient(circle at ${d[0]}px ${
    d[1]
  }px, ${s} 0%, ${s} ${d[2]}%, ${e} ${d[2] + 0.1}%)`;

  window.requestAnimationFrame(() => {
    if (el.dataset.ripple && d[2] < 100) ripple(el);
  });
};

const start = (ev) => {
  ev.target.dataset.ripple = `${ev.offsetX}-${ev.offsetY}-0`;
  ripple(ev.target);
};

const stop = (ev) => {
  let el = document.querySelector("[data-ripple]");
  delete el.dataset.ripple;
  el.style.background = "none";
};

// Events
document
  .querySelectorAll(".highlight1,.highlight2")
  .forEach((el) => el.addEventListener("mousedown", start));
document.addEventListener("mouseup", stop);
