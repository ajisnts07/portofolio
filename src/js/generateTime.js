export default function generateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds}`;

  document.getElementById("time").textContent = timeString || "Null";
  document.getElementById("times").textContent = timeString || "Null";
}

setInterval(generateTime, 1000);
