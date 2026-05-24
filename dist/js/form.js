// Select DOM elements
const wrapper = document.querySelector(".wrapper");
const signupForm = document.querySelector(".sign-up-form");
const successMessage = document.querySelector(".success-message");
const form = document.querySelector(".sign-up-form form");
const dismissButton = document.querySelector(".dismiss-btn");

// Function to validate the user's email input
function validateEmail(emailInput) {
  const errorElement = document.querySelector("#error-message");

  if (!emailInput.validity.valid) {
    if (emailInput.validity.valueMissing) {
      errorElement.textContent = emailInput.dataset.errorValue;
    } else if (
      emailInput.validity.typeMismatch &&
      !emailInput.value.includes("@")
    ) {
      errorElement.textContent = emailInput.dataset.errorType;
    } else if (
      emailInput.validity.typeMismatch ||
      emailInput.validity.patternMismatch
    ) {
      errorElement.textContent = emailInput.dataset.errorPattern;
    }
    return false;
  } else {
    return true;
  }
}

// Trigger validation on user input
form.addEventListener("input", function (e) {
  validateEmail(e.target);
});

// Handle form submission
form.addEventListener("submit", function (e) {
  // Prevent the default form submission behavior (page refresh)
  e.preventDefault();

  // Run validateEmail function
  const emailInput = document.querySelector("#email");
  const isEmailValid = validateEmail(emailInput);

  // If the email is not valid trigger shake animation
  if (!isEmailValid) {
    wrapper.classList.add("animate-shake");
    setTimeout(() => {
      wrapper.classList.remove("animate-shake");
    }, 400);
  }
  // If the email is valid, show the success message, and reset the form state
  else {
    successMessage.setAttribute("aria-hidden", false);
    signupForm.setAttribute("aria-hidden", true);
    document.querySelector("#input-email").textContent = emailInput.value;
    form.reset();
  }
});

// Going back to the signup form when the dismiss button is clicked
dismissButton.addEventListener("click", function () {
  successMessage.setAttribute("aria-hidden", true);
  signupForm.setAttribute("aria-hidden", false);
});
