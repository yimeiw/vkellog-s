function validateForm() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if (!firstName) {
        alert("First Name is required.");
        return false;
    }

    if (!lastName) {
        alert("Last Name is required.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!validatePhone(phone)) {
        alert("Please enter a valid phone number.");
        return false;
    }

    if (!message) {
        alert("Message is required.");
        return false;
    }

    return true;
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    const phonePattern = /^[+\d]?(?:[\d-.\s()]*)$/;
    return phonePattern.test(phone) && phone.length >= 10 && phone.length <= 15;
}
