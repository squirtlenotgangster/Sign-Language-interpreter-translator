/* =========================
   CONTACT PAGE SCRIPT
========================= */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact_form");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload

    const firstName = form.querySelector('input[name="First Name"]').value.trim();
    const lastName = form.querySelector('input[name="Last Name"]').value.trim();
    const email = form.querySelector('input[name="Email Address"]').value.trim();
    const message = form.querySelector("textarea").value.trim();

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      showAlert("Please fill in all fields.", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showAlert("Please enter a valid email address.", "error");
      return;
    }

    // Simulate successful submission
    showAlert("Message sent successfully! We'll get back to you soon.", "success");

    // Clear form
    form.reset();
  });
});

/* =========================
   HELPERS
========================= */

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showAlert(message, type) {
  // Remove existing alert
  const oldAlert = document.querySelector(".form-alert");
  if (oldAlert) oldAlert.remove();

  const alert = document.createElement("div");
  alert.className = `form-alert ${type}`;
  alert.textContent = message;

  document.querySelector(".contact_form").prepend(alert);

  setTimeout(() => {
    alert.remove();
  }, 3500);
}
