const translations = {
    es: {
        "nav-inicio": "Inicio",
        "nav-productos": "Productos",
        "nav-historia": "Historia",
        "nav-contacto": "Contacto",
        "badge-text": "Desde 1961 - 64 años uniendo La Pampa y el mar",
        "hero-desc": "Distribución y venta mayorista de pescados, mariscos, empanados y más!",
        "cta-primary": "Contactate con nosotros!",
        "cta-second": "Seguinos en Instagram!",
        "cta-third": "Ver productos",
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
        "cta-second": "Follow us on Instagram!",
        "cta-third": "View products",
        "btn-text": "🇺🇸 EN | ES"
    }
};

let currentLang = localStorage.getItem("picomar_lang") || "es";

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    document.getElementById("langBtn").innerText = translations[lang]["btn-text"];
    localStorage.setItem("picomar_lang", lang);
    currentLang = lang;
}

document.getElementById("langBtn").addEventListener("click", () => {
    setLanguage(currentLang === "es" ? "en" : "es");
});

setLanguage(currentLang);