// Ly Nam Anh
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

// Fade in explain:
// Take all the elements that have the class .fade-in and save it as sections
// IntersectionObserver is an API to see if any elements show up on screen while scrolling
// threshold: 0.2 means that if 20% of any elements are on the screen it counted as display
// entry.isIntersecting = True when element is in user's viewport
// entry.target is all the elements that have the class .fade-in
// entry.target.classList.add('visible') is adding .visible to the class and then the CSS run to make it visible
// sections.forEach(sec => observer.observe(sec)), for every sections, the observer will "watch" it if any sections appears, it will run the CSS .visible



// Quiz submit
document.getElementById("submitBtn").addEventListener("click", function () {
	document.getElementById("quizContainer").classList.add("hidden");
    document.getElementById("resultContainer").classList.remove("hidden");
});

// Quiz submit explain:
// When the button being pressed, the quizContainer is added the class hidden and the quiz will be hidden from user
// At the same time, the resultContainer is being removed the class hidden, showing the result to user

