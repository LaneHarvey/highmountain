<?PHP

$email_from = 'a@noreply.com';
$email_to = 'mrlaneharvey@gmail.com';

$subject = "High Mtn Contact form";

$message = 'Name: ' . $_POST[‘name’] . "\n"
. 'Email: ' . $_POST[‘email’] . "\n"
. 'Phone Number: ' . $_POST[‘phone’] . "\n"
. 'Message: ' . $_POST[‘message’] . "\n"


;

$message = wordwrap($message, 120);

$headers = "From: " . $email_from . "\r\n" . "Reply-to: " . $email_from . "";

mail($email_to, $subject, $message, $headers);

header("Location: http://www.inspectingut.com/#/contact");

?>
