// Quiz submit
document.getElementById("submitBtn").addEventListener("click", function () {
    document.getElementById("quizContainer").classList.add("hidden");
    document.getElementById("resultContainer").classList.remove("hidden");
});

// Footer subscribe alert
function submitEmail() {
    const email = document.getElementById("emailInput").value;
    if (email.trim() === "") {
      alert("Please enter a valid email!");
    } else {
      alert("Thank you for following us!");
      document.getElementById("emailInput").value = "";
    }
  }