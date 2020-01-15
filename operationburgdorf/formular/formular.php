<?php
function error($e,$p){
  echo "Fehler, " . $e;
  echo $p;
}
$name = $_POST["name"];
$email = $_POST["email"];


$page = file_get_contents("index.html");

if(!isset($name)){
  # some vars not set
  error("füllen Sie bitte alle Felder aus!",$page);
}
else{
  if($name == ""){
    # some text-inputs empty
    error("füllen Sie bitte alle Felder aus!",$page);
  }
  else{
    # inputs OK
    $to_mail = "sandro@volery.org";
    $headers = "From: noreply@volery.com\nMIME-Version: 1.0\nContent-Type: text/html; charset=utf-8\n";

    $subject = "Neues Mitglied IGTFBern, " . $name;
    $message = $name . "E-Mail: " . $email;
    mail($to_mail,$subject,$message,$headers);
    echo "mail gesendet!"
  }
}
?>
