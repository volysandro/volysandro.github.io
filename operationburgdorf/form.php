<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <form action="form.php" method="post" enctype="multipart/form-data">
      Name: <input type="text" name="name" value="">
      <br>
      Beschreibung: <input type="text" name="desc" value="">
      <br>
      Bild: <input type="file" name="fileToUpload" id="fileToUpload">
      <br>
      <br>
      <input type="Submit" value="Eintragen">
      <br>
      <br>
    </form>
      <?php
      if(!isset($_SESSION["verify"])){


      $path = "./pers";

      if (isset($_POST["name"])) {

        $name = $_POST["name"];
        $desc = $_POST["desc"];

      if ($name != "" AND $desc != "") {
        if (!file_exists($path . "/" . $name)) {

        //Ordner erstellen
        mkdir("$path" . "/$name", 0755);
        mkdir("$path" . "/$name/img", 0755);
        mkdir("$path" . "/$name/desc", 0755);

        //Beschreibung
        file_put_contents("$path/$name/desc/desc.txt", $desc);

        //Bild
        $target_dir = $path . "/$name/img/";
        $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
        $uploadOk = 1;
        $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
        //Bildprüfung
        if(isset($_POST["submit"])) {
            $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
            if($check !== false) {
                echo "Dateityp: " . $check["mime"];
                echo "<br>";
                $uploadOk = 1;
            } else {
                echo "Invalider Dateityp!";
                echo "<br>";
                $uploadOk = 0;
              }
            }
            if ($_FILES["fileToUpload"]["size"] > 500000) {
              echo "Zu grosse Datei!";
              echo "<br>";
              $uploadOk = 0;
            }
            if ($uploadOk == 0) {
                echo "Fehler beim Upload!";
                echo "<br>";
            } else {
              //Upload
                if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                    echo basename( $_FILES["fileToUpload"]["name"]). " wurde hochgeladen!";
                } else {
                    echo "Unbekannter Fehler beim Upload!";
                    echo "<br>";
                }
        }
      }
        //Doppeleintrag
        else {
          echo "Bereits Eingetragen!";
          echo "<br>";
        }
      }
        //Fehlerhaftes Formular
        else {
          echo "Unvollständige Angaben!";
          echo "<br>";
        }
      }

       ?>
        <table style="width:100%">
          <tr>
            <th>Person</th>
            <th>Beschreibung</th>
            <th>Optionen</th>
          </tr>
          <?php
          $path = "./pers";
          $pers = preg_grep('/^([^.])/', scandir($path));
          $entries = count($pers);

          for ($i=2; $i <= $entries + 1; $i++) {
            //shit kriegen
            $txtObject = scandir($path . "/" . $pers[$i] . "/desc/");
            $desc = file_get_contents($path . "/" . $pers[$i] . "/desc/" . $txtObject[2]);
            $value = array_search($pers[$i], $pers);
            //tabelle
            echo "
            <tr>
              <th>$pers[$i]</th>
              <th>$desc</th>
              <th><form action=\"form.php\" method=\"post\">
                <input type=\"submit\" name=\"edit\" value=\"Löschen\" />
                <input type=\"text\" name=\"del\" value=\"$value\" id=\"hidden\">
                </form></th>
            </tr>
            ";
          }
          echo "</table>";
          if (isset($_POST["del"])) {
            //abfrage
            $del = $pers[$_POST["del"]];
            //alert
            echo "        <div class=\"alert\">
                      <h1>$del wirklich Löschen?</h1>
                      <form class=\"confirm\" action=\"form.php\" method=\"get\">
                        <input type=\"text\" name=\"del\" value=\"$del\" id=\"hidden\">
                        <input type=\"Submit\" name=\"confirm\" value=\"Ja\">
                        <input type=\"Submit\" name=\"confirm\" value=\"Nein\">
                      </form>
                    </div>";
          }
          if (isset($_GET["confirm"])) {
            if ($_GET["confirm"] == "Ja") {
              $del = $_GET["del"];
              rename($path . "/$del", "./deleted/$del");
              echo "<div class=\"alert\">
                        <h1>$del wurde gelöscht!</h1>
                        <form class=\"confirm\" action=\"form.php\" method=\"get\">
                          <input type=\"Submit\" value=\"OK\">
                        </form>";
            }
            else {
              echo "<div class=\"alert\">
                        <h1>Vorgang abgebrochen!</h1>
                        <form class=\"confirm\" action=\"form.php\" method=\"get\">
                          <input type=\"Submit\" value=\"OK\">
                        </form>";
            }
          }
        }
        else{
          header("Location: ./login/login.html");
        }
          ?>
        </table>
  </body>
</html>
