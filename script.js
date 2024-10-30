document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formPegawai");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        clearErrors();
        
        let isValid = true;

        if (!validateField("nama")) isValid = false;
        if (!validateField("email")) isValid = false;
        if (!validateField("jabatan")) isValid = false;

        if (isValid) {
            alert("Form berhasil dikirim!");
            form.reset(); 
        }
    });

    function validateField(fieldId) {
        const field = document.getElementById(fieldId);
        const errorField = document.getElementById(fieldId + "Error");
        
        if (field.value.trim() === "") {
            errorField.textContent = `${fieldId.charAt(0).toUpperCase() + fieldId.slice(1)} wajib diisi.`;
            field.classList.add("error-border");
            return false;
        }
        return true;
    }

    function clearErrors() {
        document.querySelectorAll(".error").forEach(error => error.textContent = "");
        document.querySelectorAll(".error-border").forEach(field => field.classList.remove("error-border"));
    }
});
