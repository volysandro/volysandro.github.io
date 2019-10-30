<?php
function error($e,$p){
  echo "Fehler, " . $e;
  echo $p;
}
function send_mail($to_mail,$subject,$message,$img_path,$header){
  # mail function
  $message .= "<img src=\"https://sandro.volery.com/git/operationburgdorf/formular/$img_path\"/>";
  mail($to_mail,$subject,$message,$header);
}
function addImage($n){
  $target_dir = "./tmp/";
        $target_file = $target_dir . $n . basename($_FILES["fileToUpload"]["name"]);
        $uploadOk = 1;
        $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
        //Bildprüfung
        if(isset($_POST["submit"])) {
            $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
            if($check !== false) {
                echo "<div id=\"info\">";
                echo "Dateityp: " . $check["mime"];
                echo "<br>";
                echo "</div>";
                $uploadOk = 1;
            } else {
                echo "<div id=\"info\">";
                echo "Invalider Dateityp!";
                echo "<br>";
                echo "</div>";
                $uploadOk = 0;
              }
            }
            if ($_FILES["fileToUpload"]["size"] > 500000) {
              echo "<div id=\"info\">";
              echo "Zu grosse Datei!";
              echo "<br>";
              echo "</div>";
              $uploadOk = 0;
            }
            if ($uploadOk == 0) {
                echo "<div id=\"info\">";
                echo "Fehler beim Upload!";
                echo "<br>";
                echo "</div>";
            } else {
              //Upload
                if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                    echo "<div id=\"info\">";
                    echo $n . " wurde hinzugefügt!";
                    echo "<br>";
                    echo "</div>";
                    return $target_file;
                } else {
                    echo "<div id=\"info\">";
                    echo "Unbekannter Fehler beim Upload!";
                    echo "<br>";
                    echo "</div>";
                }
        }
      }
$name = $_POST["name"];
$lastname = $_POST["lastname"];
$desc = $_POST["description"];

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
    $to_mail = "sandro@volery.com";
    $headers = "From: noreply@volery.com\nMIME-Version: 1.0\nContent-Type: text/html; charset=utf-8\n";

    $subject = "Eintrag Webseite Burgdorf, " . $name . " " . $lastname;
    $message = "Vorname: " . $name . ", " . "Nachname: " . $lastname . ", " . "Beschreibung: " . $desc;
    $image_path = addImage($fullname);
    if($image_path){
      send_mail($to_mail,$subject,$message,$image_path,$headers);

    }
  }
}
?>
