const launchDate = new Date("August 5, 2025 00:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
  const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
  const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

  countdown.innerHTML = \`\${days}D : \${hours}H : \${minutes}M : \${seconds}S\`;
}, 1000);
