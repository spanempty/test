const anc = document.getElementById("rick");
const rekt = anc.getBoundingClientRect();
const ancx = rekt.left + rekt.width / 2;
const ancy = rekt.right + rekt.height / 2;

document.addEventListener("mousemove", (e) => {
  const mx = e.clientX;
  const my = e.clientY;

  const deg = angle(mx, my, ancx, ancy);

  const eye = document.querySelectorAll(".eyes");
  eye.forEach((eyes) => {
    eyes.style.transform = `rotate(${90 + deg}deg)`;
  });
});

function angle(cx, cy, ex, ey) {
  const dx = ex - cx;
  const dy = ey - cy;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}
