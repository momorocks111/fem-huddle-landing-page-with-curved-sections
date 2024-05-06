const emailInput = document.getElementById("email");
const errorText = document.getElementById("error-text");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", () => {
  const emailValue = emailInput.value.trim();
  const isEmailValid = validateEmail(emailValue);

  if (isEmailValid) {
    errorText.style.display = "none";
    emailInput.classList.remove("input-error");
  } else {
    errorText.style.display = "block";
    emailInput.classList.add("input-error");
  }
});

function validateEmail(email) {
  // Check if the email is not empty
  if (!email || email.length === 0) {
    return false;
  }

  // Regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regular expression
  if (!emailRegex.test(email)) {
    return false;
  }

  // Split the email into local part and domain part
  const [localPart, domainPart] = email.split("@");

  // Check if the local part is not empty
  if (!localPart || localPart.length === 0) {
    return false;
  }

  // Check if the domain part is not empty and contains at least one dot
  if (!domainPart || domainPart.length === 0 || !domainPart.includes(".")) {
    return false;
  }

  // Check if the domain part does not start or end with a dot
  if (domainPart.startsWith(".") || domainPart.endsWith(".")) {
    return false;
  }

  // Email is valid
  return true;
}
