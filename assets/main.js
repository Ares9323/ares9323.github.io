// Fill the current year wherever a [data-year] element is present.
document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
});
