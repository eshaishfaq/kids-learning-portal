// === Simple Interactive Features ===

// Highlight numbers on click
document.addEventListener("DOMContentLoaded", () => {
  const numbers = document.querySelectorAll(".number");
  numbers.forEach(num => {
    num.addEventListener("click", () => {
      num.style.background = "#FF595E"; // Red on click
    });
  });

  // Alphabet click alert
  const alphabets = document.querySelectorAll(".alphabet-letter");
  alphabets.forEach(letter => {
    letter.addEventListener("click", () => {
      alert("You clicked on letter: " + letter.textContent);
    });
  });
});






document.addEventListener("DOMContentLoaded", () => {
  let currentAudio = null; // Track current audio

  const playButtons = document.querySelectorAll(".play-btn");
  const stopButtons = document.querySelectorAll(".stop-btn");

  // === Play Button Logic ===
  playButtons.forEach(button => {
    button.addEventListener("click", () => {
      const rhymeCard = button.closest(".rhyme-card");
      const audioFile = rhymeCard.getAttribute("data-audio");

      // Stop any currently playing audio
      if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }

      // Play new audio
      currentAudio = new Audio(audioFile);
      currentAudio.play();

      // Update button text
      playButtons.forEach(btn => btn.textContent = "Play");
      button.textContent = "Playing...";

      // Reset button text when audio ends
      currentAudio.addEventListener("ended", () => {
        button.textContent = "Play";
      });
    });
  });

  // === Stop Button Logic ===
  stopButtons.forEach(button => {
    button.addEventListener("click", () => {
      if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        playButtons.forEach(btn => btn.textContent = "Play"); // Reset Play button
      }
    });
  });
});




















// Hamburger toggle for mobile
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector("nav ul");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
