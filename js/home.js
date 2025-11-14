alert("Welcome to our website!")

//Footer subcribe alert
function submitEmail() {
    const email = document.getElementById("emailInput").value;
    if (email.trim() === "") {
      alert("Please enter a valid email!");
    } else {
      alert("Thank you for following us!");
      document.getElementById("emailInput").value = "";
    }
  }

// Fade-in effect when scrolling
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });
sections.forEach(sec => observer.observe(sec));