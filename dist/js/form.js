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
    errorElement.setAttribute("aria-hidden", false);

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
    errorElement.setAttribute("aria-hidden", true);
    errorElement.textContent = "";
    return true;
  }
}

// Add 'data-is-blur="true"' when the user leaves the input field, then trigger validation
form.addEventListener("focusout", function (e) {
  if (e.target.tagName === "INPUT") {
    e.target.dataset.isBlur = "true";
    validateEmail(e.target);
  }
});

// Trigger validation on user input only if the input has already been blurred at least once
form.addEventListener("input", function (e) {
  if (e.target.tagName === "INPUT" && e.target.dataset.isBlur === "true") {
    validateEmail(e.target);
  }
});

// Handle form submission
form.addEventListener("submit", function (e) {
  // Prevent the default form submission behavior (page refresh)
  e.preventDefault();

  // Force add 'data-is-blur="true"' to show validation styles and validate the input
  const emailInput = document.querySelector("#email");
  emailInput.dataset.isBlur = "true";
  const isEmailValid = validateEmail(emailInput);

  // If the email is not valid trigger shake animation

  if (!isEmailValid) {
    wrapper.classList.add("animate-shake");
    setTimeout(() => {
      wrapper.classList.remove("animate-shake");
    }, 400);
  }
  // If the email is valid, show the success message, hide the form, and reset the form state
  else if (isEmailValid) {
    successMessage.setAttribute("aria-hidden", false);
    signupForm.setAttribute("aria-hidden", true);
    document.querySelector("#input-email").textContent = emailInput.value;
    form.reset();
    delete emailInput.dataset.isBlur;
  }
});

// Hide the success message and show the signup form when the dismiss button is clicked
dismissButton.addEventListener("click", function () {
  successMessage.setAttribute("aria-hidden", true);
  signupForm.setAttribute("aria-hidden", false);
});
