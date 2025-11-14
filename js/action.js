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