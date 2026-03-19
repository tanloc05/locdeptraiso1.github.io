// MUSIC AUTO
const music = document.getElementById("music");

document.addEventListener("click", () => {
  music.play();
}, { once: true });

document.addEventListener("touchstart", () => {
  music.play();
}, { once: true });

// TAB
function showTab(id) {
  document.querySelectorAll(".tab-content").forEach(el => {
    el.classList.remove("active");
  });

  document.querySelectorAll(".tabs button").forEach(btn => {
    btn.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
  event.target.classList.add("active");
}

// VIDEO FIX MOBILE
const gokuVideo = document.getElementById("goku");

function playVideo() {
  gokuVideo.play().catch(() => {});
}

document.addEventListener("click", playVideo, { once: true });
document.addEventListener("touchstart", playVideo, { once: true });

// GOKU SKILL
const goku = document.getElementById("goku");
const skill = document.getElementById("skill");

goku.addEventListener("click", () => {
  const rect = goku.getBoundingClientRect();

  skill.style.display = "block";
  skill.style.top = rect.top + rect.height / 2 + "px";
  skill.style.left = rect.right + "px";

  let width = 0;

  const shoot = setInterval(() => {
    width += 25;
    skill.style.width = width + "px";

    if (width > window.innerWidth) {
      clearInterval(shoot);
      skill.style.display = "none";
    }
  }, 20);
});