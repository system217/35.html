// For example: Toggle dark/light mode
document.querySelector('.toggle-theme button').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
  

  const words = ["Frontend Developer", "Web Designer", "UI/UX Enthusiast"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  if (i < words.length) {
    currentWord = words[i];

    if (!isDeleting && j <= currentWord.length) {
      document.querySelector(".typing-text").textContent = currentWord.substring(0, j);
      j++;
    }

    if (isDeleting && j >= 0) {
      document.querySelector(".typing-text").textContent = currentWord.substring(0, j);
      j--;
    }

    if (j === currentWord.length) isDeleting = true;
    if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
      if (i === words.length) i = 0;
    }

    setTimeout(type, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", type);
