// Customizable Accordions
const accordionData = [
    {
        title: "What is the Domain Method?",
        content: "It is a method that is used to get an infinite domain (www.example.com) with literally no investment. This method is not leaked and will be provided to a very limited number of people."
    },
    {
        title: "Where is the Domain Panel?",
        content: "The panel is provided by a trusted service called Hostinger."
    },
    {
        title: "Is the method legal?",
        content: "Yes, the method is completely legal as long as you do not spam-create domains."
    },
    {
        title: "Does the method come with a warranty?",
        content: "Yes, it comes with a 2-month warranty. For full warranty, price can go higher."
    },
    {
        title: "Can I transfer the domain to Shopify, GitHub, HubSpot, WordPress, etc.?",
        content: "Yes, Hostinger allows you to transfer the domain to any other provider."
    },
    {
        title: "Does the method include a panel?",
        content: "Yes, the method includes access to the Hostinger panel."
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


