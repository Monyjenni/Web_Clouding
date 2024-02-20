<!DOCTYPE HTML>  
<html>
<head>
<style>
.error {color: #FF0000;}
</style>
</head>
<body>  

<?php
$subjectErr = $emailErr = $phoneErr = $messageErr = "";
$subject = $email = $phone = $message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["subject"])) {
        $subjectErr = "Subject is required";
    } else {
        $subject = test_input($_POST["subject"]);
    }

    if (empty($_POST["email"])) {
        $emailErr = "Email is required";
    } else {
        $email = test_input($_POST["email"]);
        // Check if email address is well-formed
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
        }
    }

    // Phone number is not required
    $phone = test_input($_POST["phone"]);

    if (empty($_POST["message"])) {
        $messageErr = "Message is required";
    } else {
        $message = test_input($_POST["message"]);
    }
    if (!empty($_POST["spam_check"])) {
        echo "Spam detected. Your message was not sent.";
        exit;
    }
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>

<h2>Contact Us</h2>
<p><span class="error">* required field</span></p>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
  Subject: <input type="text" name="subject" value="<?php echo $subject;?>">
  <span class="error">* <?php echo $subjectErr;?></span>
  <br><br>
  Email: <input type="text" name="email" value="<?php echo $email;?>">
  <span class="error">* <?php echo $emailErr;?></span>
  <br><br>
  Phone: <input type="text" name="phone" value="<?php echo $phone;?>">
  <br><br>
  Message: <textarea name="message" rows="5" cols="40"><?php echo $message;?></textarea>
  <span class="error">* <?php echo $messageErr;?></span>
  <br><br>
  
  <div style="display: none;">
      <label for="spam_check">Leave this field empty:</label><br>
      <input type="text" id="spam_check" name="spam_check">
  </div>

  <input type="submit" name="submit" value="Submit">  
</form>

<?php
echo "<h2>Your Input:</h2>";
echo "Subject: " . $subject;
echo "<br>";
echo "Email: " . $email;
echo "<br>";
echo "Phone: " . $phone;
echo "<br>";
echo "Message: " . $message;
?>

</body>
</html>
