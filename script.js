// Get input element
const input = document.getElementById("fname");

// Add blur event (when user leaves the field)
input.addEventListener("blur", function () {
  input.value = input.value.toUpperCase();
});