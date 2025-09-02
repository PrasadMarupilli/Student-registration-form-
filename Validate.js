document.getElementById("registrationForm").addEventListener("submit", function (event) {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;

  // Password match check
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    event.preventDefault();
    return;
  }

  // Phone validation
  if (phone && !/^\d{10}$/.test(phone)) {
    alert("Phone number must be 10 digits!");
    event.preventDefault();
    return;
  }

  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Invalid email format!");
    event.preventDefault();
    return;
  }

  // Course selection
  let course = document.getElementById("course").value;
  if (course === "") {
    alert("Please select a course!");
    event.preventDefault();
    return;
  }

  alert("Form submitted successfully!");
});
