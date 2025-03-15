// Customizable FAQ Accordions
const faqData = [
    {
        title: "What is Domain Method?",
        content: "The Domain Method is a technique used to..."
    },
    {
        title: "How to get free robux?",
        content: "To get free robux, you need to..."
    }
];

const faqContainer = document.querySelector(".faq-container");

faqData.forEach((faq) => {
    const accordion = document.createElement("div");
    accordion.classList.add("accordion");

    const header = document.createElement("div");
    header.classList.add("accordion-header");
    header.innerHTML = `
        <span>${faq.title}</span>
        <span class="icon">+</span>
    `;

    const content = document.createElement("div");
    content.classList.add("accordion-content");
    content.innerHTML = `<p>${faq.content}</p>`;

    accordion.appendChild(header);
    accordion.appendChild(content);
    faqContainer.appendChild(accordion);

    header.addEventListener("click", () => {
        accordion.classList.toggle("active");
        const icon = header.querySelector(".icon");
        icon.textContent = accordion.classList.contains("active") ? "-" : "+";
    });
});

// OTP Section Functionality
const otpSection = document.getElementById("otp-section");
const otpInput = document.getElementById("otp-input");
const submitOtp = document.getElementById("submit-otp");
const otpMessage = document.getElementById("otp-message");

// Customizable OTP (One Time Password)
const correctOTP = "123456"; // Change this to your desired OTP
let isOTPUsed = false; // Track if OTP has been used

// Show OTP Section on Scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        otpSection.classList.remove("hidden");
    }
});

// Validate OTP
submitOtp.addEventListener("click", () => {
    if (isOTPUsed) {
        otpMessage.textContent = "OTP has already been used!";
        otpMessage.style.color = "red";
        return;
    }

    const enteredOTP = otpInput.value.trim();

    if (enteredOTP === correctOTP) {
        otpMessage.textContent = "Correct OTP! Redirecting...";
        otpMessage.style.color = "green";
        isOTPUsed = true; // Mark OTP as used
        setTimeout(() => {
            window.location.href = "https://only.goodthings.live/";
        }, 2000);
    } else {
        otpMessage.textContent = "Wrong OTP! Please try again.";
        otpMessage.style.color = "red";
    }
});

// Dark Mode Toggle
const modeToggle = document.getElementById("mode-toggle");

modeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Apply Theme on Load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.add(savedTheme + "-mode");
    modeToggle.checked = savedTheme === "dark";
});
