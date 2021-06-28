$(document).ready(function() {

    $('#fnameError').hide();
    $('#lnameError').hide();
    $('#emailError').hide();
    $('#numError').hide();
    $('#passError').hide();
    $('#cpassError').hide();

    // errors are all false rn (error nahi hai abhi)
    var error_fname = false;
    var error_lname = false;
    var error_email = false;
    var error_number = false;
    var error_pass = false;
    var error_cpass = false;

    $('#fname').focusout(function() {
        check_fname();
    });
    $('#lname').focusout(function() {
        check_lname();
    });
    $('#email').focusout(function() {
        check_email();
    });
    $('#num').focusout(function() {
        check_num();
    });
    $('#password').focusout(function() {
        check_pass();
    });
    $('#cpassword').focusout(function() {
        check_cpass();
    });
    
    function check_fname() {
        var regex = /^[a-zA-Z]*$/;
        var fnameValue = $('#fname').val();
        if(regex.test(fnameValue) && fnameValue !== '') {
            $('#fnameError').hide();
            $('#fname').css("border-bottom", "2px solid #34F458");
        } else if(fnameValue =='') {
            $('#fnameError').html("Name can't be empty");
            $('#fnameError').show();
            $("#fname").css("border-bottom","2px solid #F90A0A");
            error_fname = true;
        } 
        else {
            $('#fnameError').html("Name should contain only characters");
            $('#fnameError').show();
            $("#fname").css("border-bottom","2px solid #F90A0A");
            error_fname = true;
        }
    }

    function check_lname() {
        var regex = /^[a-zA-Z]*$/;
        var lnameValue = $('#lname').val();
        if(regex.test(lnameValue) && lnameValue !== '') {
            $('#lnameError').hide();
            $('#lname').css("border-bottom", "2px solid #34F458");
        } else if (lnameValue =='') {
            $('#lnameError').html("Name can't be empty");
            $('#lnameError').show();
            $("#lname").css("border-bottom","2px solid #F90A0A");
            error_lname = true;
        } 
        else {
            $('#lnameError').html("Name should contain only characters");
            $('#lnameError').show();
            $("#lname").css("border-bottom","2px solid #F90A0A");
            error_lname = true;
        }
    }

    function check_email() {
        var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailValue = $('#email').val();
        if(regex.test(emailValue) && emailValue !== '') {
            $("#emailError").hide();
               $("#email").css("border-bottom","2px solid #34F458");
        } else {
            $("#emailError").html("Invalid Email");
            $("#emailError").show();
            $("#email").css("border-bottom","2px solid #F90A0A");
            error_email = true;
        }
    }

    function check_num() {
        var numValue = $('#num').val();
        if(numValue !== '' && numValue.length == 10) {
            $('#numError').hide();
            $('#num').css("border-bottom", "2px solid #34F458");
        } else {
            $('#numError').html("Enter a 10 digit number only");
            $('#numError').show();
            $("#num").css("border-bottom","2px solid #F90A0A");
            error_number = true;
        }
    }

    function check_pass() {
        var password_length = $("#password").val().length;
        if (password_length < 8 || password_length > 20) {
           $("#passError").html("password should contain 8 to 20 characters");
           $("#passError").show();
           $("#password").css("border-bottom","2px solid #F90A0A");
           error_pass = true;
        } else {
           $("#passError").hide();
           $("#password").css("border-bottom","2px solid #34F458");
        }
    }

    function check_cpass() {
        var cpassValue = $('#cpassword').val();
        var passValue = $('#password').val();
        if(cpassValue !== passValue) {
            $("#cpassError").html("Passwords Did not Matched");
               $("#cpassError").show();
               $("#cpassword").css("border-bottom","2px solid #F90A0A");
               error_cpass = true;
        } else if(cpassValue =='') {
            $("#cpassError").html("This field is mandatory");
               $("#cpassError").show();
               $("#cpassword").css("border-bottom","2px solid #F90A0A");
               error_cpass = true;
        } 
        else {
            $("#cpassError").hide();
            $("#cpassword").css("border-bottom","2px solid #34F458");
        }
    }

    $('#form').submit(function() {
        error_fname = false;
        error_lname = false;
        error_email = false;
        error_number = false;
        error_pass = false;
        error_cpass = false;

            check_fname();
            check_lname();
            check_email();
            check_num();
            check_pass();
            check_cpass();

            if (error_fname == false && error_lname == false && error_email == false && error_pass == false && error_cpass == false && error_number == false) {
                // alert("Registration Successfull");
                return true;
            } else {
                alert("Please Fill the form Correctly");
                return false;
            }
    });
});