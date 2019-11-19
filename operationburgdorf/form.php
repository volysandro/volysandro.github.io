<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <div id="input">
      <form action="form.php" method="post" enctype="multipart/form-data" id="form">
        Name:
        <br>
        <input type="text" name="name" value="" id="inputField">
        <br>
        Wohnort:
        <br>
        <input type="text" name="location" value="" id="inputField">
        <br>
        Beschreibung:
        <br>
        <textarea type="text" name="desc" value="" id="textField"></textarea>
        <br>
        <input type="Submit" value="Eintragen" id="submitButton">
        <br>
        <br>
      </form>
    </div>
      <?php
      if(!isset($_SESSION["verify"])){


      $path = "./pers";

      if (isset($_POST["name"])) {

        $name = $_POST["name"];
        $desc = $_POST["desc"];
        $loc = $_POST["location"];

      if ($name != "" AND $desc != "") {
        if (!file_exists($path . "/" . $name)) {

        //Ordner erstellen
        mkdir("$path" . "/$name", 0755);
        mkdir("$path" . "/$name/loc", 0755);
        mkdir("$path" . "/$name/desc", 0755);

        //Beschreibung
        file_put_contents("$path/$name/desc/desc.txt", $desc);

        file_put_contents("$path/$name/loc/loc.txt", $loc);
      }
        //Doppeleintrag
        else {
          echo "<div id=\"info\">";
          echo "Bereits Eingetragen!";
          echo "<br>";
          echo "</div>";
        }
      }
        //Fehlerhaftes Formular
        else {
          echo "<div id=\"info\">";
          echo "Unvollständige Angaben!";
          echo "<br>";
          echo "</div>";
        }
      }

       ?>
        <table>
          <tr id="tableHead">
            <th width="20%">Name</th>
            <th width="40%">Beschreibung</th>
            <th width="40%">Wohnort</th>
            <th>Optionen</th>
          </tr>
          <?php
          $path = "./pers";
          $pers = preg_grep('/^([^.])/', scandir($path));
          $entries = count($pers);

          for ($i=2; $i <= $entries + 1; $i++) {
            //Desc kriegen
            $txtObject = scandir($path . "/" . $pers[$i] . "/desc/");
            $desc = file_get_contents($path . "/" . $pers[$i] . "/desc/" . $txtObject[2]);

            //Wohnort kriegen
            $txtObject = scandir($path . "/" . $pers[$i] . "/loc/");
            $location = file_get_contents($path . "/" . $pers[$i] . "/loc/" . $txtObject[2]);

            //value
            $value = array_search($pers[$i], $pers);
            //tabelle
            echo "
            <tr id=\"TableBody\">
              <th>$pers[$i]</th>
              <th>$desc</th>
              <th>$location</th>
              <th><form action=\"form.php\" method=\"post\">
                <input type=\"submit\" name=\"edit\" value=\"Löschen\" id=\"deleteButton\"/>
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
                      <p>$del wirklich Löschen?<p>
                      <form class=\"confirm\" action=\"form.php\" method=\"get\">
                        <input type=\"text\" name=\"del\" value=\"$del\" id=\"hidden\">
                        <input id=\"submitButton\" type=\"Submit\" name=\"confirm\" value=\"Ja\">
                        <input id=\"submitButton\" type=\"Submit\" name=\"confirm\" value=\"Nein\">
                      </form>
                    </div>";
          }
          if (isset($_GET["confirm"])) {
            if ($_GET["confirm"] == "Ja") {
              $del = $_GET["del"];
              rename($path . "/$del", "./deleted/$del");
              echo "<div class=\"alert\">
                        <p>$del wurde gelöscht!</p>
                        <form class=\"confirm\" action=\"form.php\" method=\"get\">
                          <input id=\"submitButton\" type=\"Submit\" value=\"OK\">
                        </form>";
            }
            else {
              echo "<div class=\"alert\">
                        <p>Vorgang abgebrochen!</p>
                        <form class=\"confirm\" action=\"form.php\" method=\"get\">
                          <input id=\"submitButton\" type=\"Submit\" value=\"OK\">
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
