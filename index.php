<?php
$insert = false;
if(isset($_POST['fname'])) {

    $server = "localhost";
    $username = "root";
    $password = "";

    $con = mysqli_connect($server, $username, $password);

    if(!$con) {
        die("connection to this database failed due to".mysqli_connect_error());
    }
    // echo "Success connection to the db";

    // print_r($_POST); exit;

    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $num = $_POST['num'];
    $pass = $_POST['pass'];
    $cpass = $_POST['cpass'];

    //  not empty
    // if($is_run) {
        $sql = "INSERT INTO `register`.`register`(`fname`, `lname`, `email`, `num`, `password`, `cpassword`, `Dt`) VALUES ('$fname', '$lname', '$email', '$num', '$pass', '$cpass', current_timestamp());";
    // } else {
    //     echo "Not submitted";
    // }

    // echo $sql; exit;

    if($con -> query($sql) == true) {
        // echo "Successfully inserted";
        $insert = true;
    } else {
        echo "ERROR: $sql <br> $con->error";
    }
    $con->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <div class="container">
        <div class="header"><h2>Register</h2></div>

        <form action="index.php" method="post" class="form" id="form">
        <?php 
        if($insert == true) {
            echo "<p class='submitMsg'>Thanks for registering. Your values are Successfully stored in our database</p>";
        }
        ?>
            <div class="form-control">
                <label>First name</label>
                <input type="text" name="fname" placeholder="First name" class="fname" id="fname">
                <small class="fnameError" id="fnameError">Error Message</small>
            </div>
            <div class="form-control">
                <label>Last name</label>
                <input type="text" name="lname" placeholder="Last name" class="lname" id="lname">
                <small class="lnameError" id="lnameError">Error Message</small>
            </div>
            <div class="form-control">
                <label>Email</label>
                <input type="email" name="email" placeholder="Email" class="email" id="email">
                <small class="emailError" id="emailError">Error Message</small>
            </div>
            <div class="form-control">
                <label>Mobile number</label>
                <input type="number" name="num" placeholder="mobile number" class="num" id="num">
                <small class="numError" id="numError">Error Message</small>
            </div>
            <div class="form-control">
                <label>Password</label>
                <input type="password" name="pass" placeholder="password" class="password" id="password">
                <small class="passError" id="passError">Error Message</small>
            </div>
            <div class="form-control">
                <label>Confirm Password</label>
                <input type="password" name="cpass" placeholder="confirm-password" class="cpassword" id="cpassword">
                <small class="cpassError" id="cpassError">Error Message</small>
            </div>

            <!-- <input type="submit" id="submit" class="submit" value="Submit"> -->
            <button class="submit" id="submit">Submit</button>
        </form>
    </div>

</body>

<script src="jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
<script type="text/javascript" src="validate.js"></script>

</html>


<!-- INSERT INTO `register` (`Sno`, `fname`, `lname`, `email`, `num`, `password`, `cpassword`, `Dt`) VALUES (NULL, 'testusername', 'name', 'username@text.com', '1478523698', '12365478', '12365478', current_timestamp()); -->