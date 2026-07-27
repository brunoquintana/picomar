// 1. THE TRANSLATION DICTIONARY
// This object acts like a mini-database holding our Spanish and English text side-by-side.
const translations = {
    es: {
        "nav-inicio": "Inicio",
        "nav-productos": "Productos",
        "nav-historia": "Historia",
        "nav-contacto": "Contacto",
        "badge-text": "Desde 1961 - 64 años uniendo La Pampa y el mar",
        "hero-desc": "Distribución y venta mayorista de pescados, mariscos, empanados y más!",
        "cta-primary": "Contactate con nosotros!",
        "cta-secondary": "Ver productos",
        "btn-text": "🇪🇸 ES | EN"
    },
    en: {
        "nav-inicio": "Home",
        "nav-productos": "Products",
        "nav-historia": "History",
        "nav-contacto": "Contact",
        "badge-text": "Since 1961 - 64 years connecting La Pampa to the sea",
        "hero-desc": "Wholesale distribution and sale of fish, seafood, breaded products, and more!",
        "cta-primary": "Get in touch with us!",
        "cta-secondary": "View products",
        "btn-text": "🇺🇸 EN | ES"
    }
};

// 2. STATE MANAGEMENT
// We check if the user previously chose a language and saved it in their browser memory (localStorage). 
// If not, we default to Spanish ('es').
let currentLang = localStorage.getItem("picomar_lang") || "es";

// 3. THE CORE FUNCTION: Updating the webpage text
function setLanguage(lang) {
    // Loop through our dictionary and swap the text of each HTML element by its ID
    document.getElementById("nav-inicio").innerText = translations[lang]["nav-inicio"];
    document.getElementById("nav-productos").innerText = translations[lang]["nav-productos"];
    document.getElementById("nav-historia").innerText = translations[lang]["nav-historia"];
    document.getElementById("nav-contacto").innerText = translations[lang]["nav-contacto"];
    document.getElementById("badge-text").innerText = translations[lang]["badge-text"];
    document.getElementById("hero-desc").innerText = translations[lang]["hero-desc"];
    document.getElementById("cta-primary").innerText = translations[lang]["cta-primary"];
    document.getElementById("cta-secondary").innerText = translations[lang]["cta-secondary"];
    
    // Update the button text itself
    document.getElementById("langBtn").innerText = translations[lang]["btn-text"];

    // Save this choice into the browser's permanent local memory!
    localStorage.setItem("picomar_lang", lang);
    currentLang = lang;
}

// 4. EVENT LISTENER: Listening for button clicks
const langButton = document.getElementById("langBtn");

langButton.addEventListener("click", () => {
    // If current language is Spanish, switch to English. Otherwise, switch to Spanish!
    if (currentLang === "es") {
        setLanguage("en");
    } else {
        setLanguage("es");
    }
});

// 5. INITIALIZATION
// As soon as the page loads, run the function to apply the saved language!
setLanguage(currentLang);