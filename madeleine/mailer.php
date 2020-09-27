<?php

$address = $_POST['address']
$name = $_POST['name']
$phone = $_POST['phone']
$text = $_POST['text']

$empfaenger = "sandro@volery.org";
$betreff = "Neue Yoga Anfrage";
$from = "From: " . $name . " <" . $address . ">";
$text = $name . "hat folgendes geschrieben: " . $text . " Kontaktiere " . $name . " via E-Mail (" . $address . "), oder per Telefon (" . $phone . ")";
 
mail($empfaenger, $betreff, $text, $from);
?>