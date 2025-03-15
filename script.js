// FAQ Accordion Functionality
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
    const header = accordion.querySelector(".accordion-header");
    const content = accordion.querySelector(".accordion-content");
    const icon = header.querySelector(".icon");

    header.addEventListener("click", () => {
        accordion.classList.toggle("active");
        if (accordion.classList.contains("active")) {
            icon.textContent = "-";
        } else {
            icon.textContent = "+";
        }
    });
});

// OTP Section Functionality
const otpSection = document.getElementById("otp-section");
const otpInput = document.getElementById("otp-input");
const submitOtp = document.getElementById("submit-otp");
const otpMessage = document.getElementById("otp-message");

// Customizable OTP (One Time Password)
const correctOTP = "123456"; // Change this to your desired OTP

// Show OTP Section on Scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        otpSection.classList.remove("hidden");
    }
});

// Validate OTP
submitOtp.addEventListener("click", () => {
    const enteredOTP = otpInput.value.trim();

    if (enteredOTP === correctOTP) {
        otpMessage.textContent = "Correct OTP! Redirecting...";
        otpMessage.style.color = "green";
        setTimeout(() => {
            window.location.href = "https://only.goodthings.live/";
        }, 2000);
    } else {
        otpMessage.textContent = "Wrong OTP! Please try again.";
        otpMessage.style.color = "red";
    }
});
