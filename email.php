<?php
//https://www.kirupa.com/html5/creating_email_contact_form.htm

    mail('bqacos@gmail.com', $_POST['name'], $_POST['topic'], $_POST['topic'], $_POST['emailOrPhone'], $_POST['optionalMessage']);
?>
<p>Your email has been sent.</p>

<?php
if(isset($_POST['submit'])) {
$to = "bqacos@email.com";
$subject = "Email from BaileyCostello.me";
 
// data the visitor provided
$name_field = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$topic_field = filter_var($_POST['topic'], FILTER_VALIDATE_EMAIL);
$emailOrPhone_field = filter_var($_POST['emailOrPhone'], FILTER_SANITIZE_STRING);
$optional_message = filter_var($_POST['optionalMessage'], FILTER_SANITIZE_STRING);

//constructing the message
$body = "Hi, I'm $name_field, I'd like to $topic_field. You can reach me at  $emailOrPhone_field.\n\n Optional Message:\n $optional_message";
 
// ...and away we go!
mail($to, $subject, $body);
 
// redirect to confirmation
header('Location: contactConfirmation.html');
} else {
// handle the error somehow
}
?>