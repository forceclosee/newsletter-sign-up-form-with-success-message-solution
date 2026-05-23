# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- See a shake animation when submitting an invalid email address
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot](./src/images/screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- Vanilla JavaScript

### What I learned

During this project, I learned and practiced several key concepts:

- **Using Tailwind CSS**  
  Learning how to install and set up Tailwind CSS v4 from scratch using the Tailwind CLI, including importing the framework into the main CSS file.

  ```css
  @import "tailwindcss";
  ```

- **HTML `<picture>` element**  
  Using the `<picture>` element to serve different images based on the viewport width (art direction) without relying on JavaScript.

  ```html
  <picture>
    <source
      media="(width >= 64rem)"
      srcset="./img/illustration-sign-up-desktop.svg" />
    <source
      media="(width >= 48rem)"
      srcset="./img/illustration-sign-up-tablet.svg" />
    <img
      src="./img/illustration-sign-up-mobile.svg"
      alt="Newsletter illustration" />
  </picture>
  ```

- **HTML form validation (`required` and `pattern` attribute)**  
  Leveraging native HTML5 form attributes like `required` and `pattern` with Regular Expressions to enforce strict email validation, while using `data-*` attributes to store specific error messages.

  ```html
  <input
    type="email"
    required
    data-error-value="Oops! Don't forget your email."
    data-error-type="Whoops! You missed the '@' symbol."
    data-error-pattern="Almost there! Just add the domain (e.g., company.com)."
    pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}" />
  ```

- **JavaScript form validation**  
  Utilizing the Constraint Validation API (`validity` object) to detect specific input errors (such as `valueMissing`, `typeMismatch`, or `patternMismatch`) and displaying the corresponding error messages dynamically. The text for these error messages is retrieved from the custom `data-*` attributes embedded in the HTML, cleanly separating content from JavaScript logic.

  ```js
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
    }
    // ...
  }
  ```

### Continued development

In future projects, I plan to continue focusing on:

- **Advanced Form Validation:** Exploring more complex validation scenarios, such as asynchronous validation (e.g., checking if an email is already registered) and handling multi-step forms.
- **Tailwind CSS Mastery:** Diving deeper into Tailwind CSS v4's new engine, custom utilities, and advanced animation techniques.
- **Web Accessibility (a11y):** Improving my understanding of ARIA attributes to ensure custom form elements and dynamic error messages are fully accessible and properly announced by screen readers.

### Useful resources

- [Google Fonts](https://fonts.google.com/) - Provided the Roboto font family used throughout the project. A great free resource for web-safe fonts.
- [TinyPNG](https://tinypng.com/) - Helped me compress and optimize the images in the project without losing quality, making the page load faster.
- [Cloudinary](https://cloudinary.com/) - Used to host the Open Graph and Twitter card images for social media sharing.
- [Perfect Pixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjlophiddqccjgplachon0304v) - Chrome extension that allowed me to overlay the design mockup directly on my live page for pixel-perfect accuracy.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) - Crucial documentation that helped me understand HTML `picture` and `form` element as well as the JavaScript form validation.

### AI Collaboration

In this project, I utilized Gemini Code Assist to enhance my workflow, solve specific bugs, and improve the overall quality of this project.

**How I used it:**

- **Debugging:** Helping identify and fix specific issues, such as text shifting during hover states (resolved by switching from `border` to `ring-inset`) and troubleshooting Tailwind v4 `@theme` custom animation configurations.
- **Code Refactoring:** Offering suggestions to structure my JavaScript more efficiently and organize my Tailwind utility classes.
- **Documentation:** Assisting in drafting clear and concise Git commit messages and structuring this `README.md` file.
- **SEO Optimization:** Generating boilerplate for standard SEO, Open Graph, and Twitter Card meta tags.

Overall, this collaborative process proved to be highly effective. The AI didn't just give me the code, instead it explained _why_ certain bugs happened (e.g., how the CSS box model is affected by border width changes) and how the proposed solution is considered a best practice. This made the AI act more like a mentor than just a code generator.

## Author

- GitHub - [Force Close](https://github.com/forceclosee)
- Frontend Mentor - [@forceclosee](https://www.frontendmentor.io/profile/forceclosee)
- X - [@forceclosee](https://x.com/forceclosee)
