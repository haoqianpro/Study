const schoolRadio = document.querySelector("#school");
const companyRadio = document.querySelector("#company");
const schoolSelect = document.querySelector("#school-select");
const companySelect = document.querySelector("#company-select");
schoolRadio.onchange = function () {
    if (this.checked) {
        schoolSelect.style.display = "block";
        companySelect.style.display = "none";
    }
};
companyRadio.onchange = function () {
    if (this.checked) {
        companySelect.style.display = "block";
        schoolSelect.style.display = "none";
    }
};
