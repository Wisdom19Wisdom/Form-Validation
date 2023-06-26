var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var formError = document.getElementById("form-error");
var formSuccess = document.getElementById("form-success");

function validateName(){
    var name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is Required";
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Fullname is Required";
        return false;
    }
    nameError.innerHTML = "<i class='fa fa-check fa-2x'></i>";
    return true;

}

function validatePhone(){
    var phone = document.getElementById("contact-phone").value;

    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = "Phone Must Be 11 Digits";
        return false;
    }

    phoneError.innerHTML = "<i class='fa fa-check fa-2x'></i>";
    return true;

}

function validateEmail(){
    var email = document.getElementById("contact-email").value;

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email Not Match";
        return false;
    }

    emailError.innerHTML = "<i class='fa fa-check fa-2x'></i>";
    return true;

}

function validateMessage(){
    var message = document.getElementById("contact-message").value;
    var required = 61;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML= left + " More Character Required";
        return false;
    }
    if(left==0){
        messageError.innerHTML= "<p class='green'>Maximum Character reached*</p>";
        return true;
    }

}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        formError.style.display='block';
        formError.innerHTML = '<strong>Oops! </strong> Please Fix the Errors and Try Again!';
        setTimeout(function(){formError.style.display='none';}, 3000);
        return false;
    }
}7