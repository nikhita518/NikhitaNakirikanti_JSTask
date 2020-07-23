function validate() {
   email=document.getElementById("email").value;
   password=document.getElementById("password").value;
    if(validate_email(email) && validatePassword(password)){
        alert("Signup Success");
        window.location="success.html";
    }
    else{
        alert("Invalid Email / Password, Try Again.....!");
    }

}
function validate_email(email)
{
    console.log(email);
    with (email)
    {
        apos=email.indexOf("@");
        dotpos=email.lastIndexOf(".");
        if (apos<1||dotpos-apos<2){
            alert("Invalid Email");
            return false;
        }
        else {
            return true;
        }
    }
}
function validatePassword(password) {
    var error = "";
    console.log(password);
    if (password == "") {
        error = "You didn't enter a password.\n";
        alert(error);
        return false;
 
    } else if ((password.length < 7) || (password.length > 15)) {
        error = "The password is the wrong length. \n";
        alert(error);
        return false;
 
    } 
   
   return true;
}