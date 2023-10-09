var dropdownOptions = document.getElementById("dropdownOptions");
var arrow = document.querySelector(".arrow");

function toggleDropdown() {
   dropdownOptions.style.display = dropdownOptions.style.display === "block" ? "none" : "block";
   arrow.style.transform = arrow.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg) ";
}