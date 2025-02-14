<?php
$to      = 'Nicolas Vaagen <nicolasvaagen@gmail.com>';
$subject = 'SK Horizon Chess test';
$message = 'Hi Nicholas, quick sample is at /qnc-test/mailtest.php';
$headers = 'From: samplecontact@skhorizonchess.ca' . "\r\n" .
    'Reply-To: othercontact@skhorizonchess.ca' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>
