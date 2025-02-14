<?php
function test_input($data) {
    // make sure we are getting good input
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if(isset($_POST['submit'])) {
    $to = "nicolasvaagen@gmail.com";
    $message = "$title by $authors requset." . "\r\n" . "$_POST";
    $headers = 'From: library-request@skhorizonchess.ca' . "\r\n" .
        'Reply-To: no-one@skhorizonchess.ca' . "\r\n";

    mail($to, $_subject, $_POST, $headers);
}
?>
