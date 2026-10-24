const cover = document.getElementById("cover");
const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");
const invitation = document.getElementById("invitation");

// Wedding music
const music = document.getElementById("weddingMusic");

let isOpening = false;

openButton.addEventListener("click", () => {
  if (isOpening) return;

  isOpening = true;

  // Open the envelope animation
  envelope.classList.add("open");
  openButton.textContent = "OPENING YOUR INVITATION...";
  openButton.disabled = true;

  // Start wedding music when the button is clicked
  if (music) {
    music.volume = 0.4; // 40% volume

    music.play().catch((error) => {
      console.log("Music could not start:", error);
    });
  }

  // Show the wedding invitation
  setTimeout(() => {
    cover.classList.add("hidden");
    invitation.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, 1100);
});

// Wedding date: 30 November 2026 at 3:00 PM IST
const weddingDate = new Date("2026-11-30T15:00:00+05:30");

const countdown = document.getElementById("countdown");

function updateCountdown() {
  const remaining = weddingDate.getTime() - Date.now();

  if (remaining <= 0) {
    countdown.innerHTML = "<p>Our special day is here! ♡</p>";
    return;
  }

  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);