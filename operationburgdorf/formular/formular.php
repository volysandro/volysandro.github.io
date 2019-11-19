<?php
function error($e,$p){
  echo "Fehler, " . $e;
  echo $p;
}
function send_mail($to_mail,$subject,$message,$header){
  # mail function
  mail($to_mail,$subject,$message,$header);
}

$name = $_POST["name"];
$lastname = $_POST["lastname"];
$desc = $_POST["description"];
$location = $_POST["location"];

$fullname = $name . " " . $lastname;


$page = file_get_contents("index.html");

if(!isset($name) OR !isset($lastname) OR !isset($desc)){
  # some vars not set
  error("füllen Sie bitte alle Felder aus!",$page);
}
else{
  if($name == "" OR $lastname == "" OR $desc == ""){
    # some text-inputs empty
    error("füllen Sie bitte alle Felder aus!",$page);
  }
  else{
    # inputs OK
    $to_mail = "sandro@volery.org";
    $headers = "From: noreply@volery.org\nMIME-Version: 1.0\nContent-Type: text/html; charset=utf-8\n";

    $subject = "Eintrag Webseite Burgdorf, " . $name . " " . $lastname;
    $message = "Vorname: " . $name . ", " . "Nachname: " . $lastname . ", " . "Beschreibung: " . $desc . "Wohnort: " . $location;
    echo $message;
    send_mail($to_mail,$subject,$message,$headers);
  }
}
?>
