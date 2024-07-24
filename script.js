function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  function validateForm() {
    let name = document.forms["visitorForm"]["name"].value;
    let mobile = document.forms["visitorForm"]["mobile"].value;
    let email = document.forms["visitorForm"]["email"].value;
    let organization = document.forms["visitorForm"]["organization"].value;

    let nameRegex = /^[A-Za-z\s]+$/;
    let mobileRegex = /^\d{10}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
        document.getElementById("nameError").innerText = "Please enter a valid name.";
        return false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    if (!mobileRegex.test(mobile)) {
        document.getElementById("mobileError").innerText = "Please enter a valid 10-digit mobile number.";
        return false;
    } else {
        document.getElementById("mobileError").innerText = "";
    }

    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        return false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    if (organization.trim() == "") {
        document.getElementById("organizationError").innerText = "Please enter your organization.";
        return false;
    } else {
        document.getElementById("organizationError").innerText = "";
    }

    return true;
}