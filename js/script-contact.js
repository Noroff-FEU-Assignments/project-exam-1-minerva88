/*Form validation*/

const form = document.querySelector("#contactForm");

const fullName = document.querySelector("#fullname");

const fullNameError = document.querySelector("#fullname-error");

const subject = document.querySelector("#subject")

const subjectError = document.querySelector("#subject-error");

const email = document.querySelector("#email");

const emailError = document.querySelector("#email-error");

const message = document.querySelector("#message");

const messageError = document.querySelector("#message-error");



function validateForm() {
    event.preventDefault();
    
    if(checkLength(fullName.value, 4) === true) {
        fullNameError.style.display = "none";
    } 
    else {
        fullNameError.style.display = "block";
    }
    
    if(checkLength(subject.value, 9) === true) {
        subjectError.style.display = "none";
    }
    else {
        subjectError.style.display = "block";
    }
    
    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } 
    else {
        emailError.style.display = "block";
    }

    if(checkLength(message.value, 24) === true) {
        messageError.style.display = "none";
    }
    else {
        messageError.style.display = "block";
    }
    
}


form.addEventListener("submit", validateForm)

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}