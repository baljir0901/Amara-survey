function changeLanguage() {
    const lang = document.getElementById("language").value;
    window.location.href = "?lang=" + lang;
}

function validateForm() {
    const requiredFields = document.querySelectorAll("[required]");
    for (let field of requiredFields) {
        if (!field.value) {
            alert("Please fill in all required fields");
            return false;
        }
    }
    return true;
}
