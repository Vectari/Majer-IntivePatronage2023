let language = {
    pl: {
        welcome: "Dzień dobry"
    },
    eng: {
        welcome: "Hello"
    }
};

if (window.location.hash) {
    if (window.location.hash === "#eng") {
        hi.textContent = language.eng.welcome;
    }
}