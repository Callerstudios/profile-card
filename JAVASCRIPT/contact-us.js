const form = document.getElementById("contactForm");
const successMsg = document.getElementById("success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  const errorName = document.getElementById("error-name");
  const errorEmail = document.getElementById("error-email");
  const errorSubject = document.getElementById("error-subject");
  const errorMessage = document.getElementById("error-message");

  [errorName, errorEmail, errorSubject, errorMessage].forEach(
    (e) => (e.style.display = "none")
  );
  successMsg.style.display = "none";

  let isValid = true;
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  if (!name.value.trim()) {
    errorName.textContent = "Full name is required.";
    errorName.style.display = "block";
    isValid = false;
  }

  if (!email.value.trim()) {
    errorEmail.textContent = "Email is required.";
    errorEmail.style.display = "block";
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    errorEmail.textContent = "Enter a valid email address.";
    errorEmail.style.display = "block";
    isValid = false;
  }

  if (!subject.value.trim()) {
    errorSubject.textContent = "Subject is required.";
    errorSubject.style.display = "block";
    isValid = false;
  }

  if (!message.value.trim()) {
    errorMessage.textContent = "Message is required.";
    errorMessage.style.display = "block";
    isValid = false;
  } else if (message.value.trim().length < 10) {
    errorMessage.textContent = "Message must be at least 10 characters.";
    errorMessage.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    form.reset();
    successMsg.style.display = "block";
  }
});
