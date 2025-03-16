// Customizable Accordions
const accordionData = [
    {
        title: "What is the Domain Method?",
        content: "It is a method where you can make infinite domain with no investment!"
    },
    {
        title: "Where is the Domain Panel?",
        content: "The panel is in a trusted provider called "Hostinger"."
    },
    {
        title: "Is the method legal?",
        content: "Yes, the method is completely legal unless you spam create domains."
    }
];

const accordionContainer = document.querySelector(".accordion-container");

accordionData.forEach((accordion) => {
    const accordionElement = document.createElement("div");
    accordionElement.classList.add("accordion");

    const header = document.createElement("div");
    header.classList.add("accordion-header");
    header.innerHTML = `
        <span>${accordion.title}</span>
        <span class="icon">+</span>
    `;

    const content = document.createElement("div");
    content.classList.add("accordion-content");
    content.innerHTML = `<p>${accordion.content}</p>`;

    accordionElement.appendChild(header);
    accordionElement.appendChild(content);
    accordionContainer.appendChild(accordionElement);

    header.addEventListener("click", () => {
        accordionElement.classList.toggle("active");
        const icon = header.querySelector(".icon");
        icon.textContent = accordionElement.classList.contains("active") ? "-" : "+";
    });
});

// Dark Mode Toggle
const modeToggle = document.getElementById("mode-toggle");

modeToggle.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
});

// Apply Theme on Load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.classList.add(savedTheme === "light" ? "light-mode" : "dark-mode");
    modeToggle.checked = savedTheme === "light";
});


