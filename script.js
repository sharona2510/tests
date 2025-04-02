document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const confirmPasswordSection = document.getElementById("confirmPasswordSection");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    form.addEventListener("submit", (event) => {
        let isValid = true;

        nameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";

        const nameInput = name.value.trim();
        if (!nameInput) {
            nameError.textContent = "Name is required.";
            isValid = false;
        }


        const emailInput = email.value.trim();
        if (!emailInput) {
            emailError.textContent = "Email is required.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(emailInput)) {
            emailError.textContent = "Invalid email format.";
            isValid = false;
        }

   
        const passwordInput = password.value.trim();
        if (!passwordInput) {
            passwordError.textContent = "Password is required.";
            isValid = false;
        } else if (passwordInput.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters.";
            isValid = false;
        }


        const confirmPasswordInput = confirmPassword.value.trim();
        if (!confirmPasswordInput) {
            confirmPasswordError.textContent = "Please confirm your password.";
            isValid = false;
        } else if (passwordInput !== confirmPasswordInput) {
            confirmPasswordError.textContent = "Passwords do not match.";
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        } else {
            confirmPasswordSection.classList.add("hidden");
            alert(`Welcome, ${nameInput}!`);
        }
    });
});