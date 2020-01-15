<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Team</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</head>
<body>
        <header>
                <div id="navigation">
        
                    <div class="center" id="icons">
                        <a href="index.html"><img class="icon" src="assets/icon_home.png" alt=""></a>
                        <a href=""><img class="icon" src="assets/icon_user.png" alt=""></a>
                        <a href="contact.html"><img class="icon" src="assets/icon_message.png" alt=""></a>
                <a href="formular/index.html"><img class="icon" src="adduser.png" alt=""></a>
                    </div>
        
                </div>
        
        
        
            </header>

            <div class="center" id="titel">
                <h1 id="title">Mitglieder IGTFBern</h1>
            </div>

            <div>

            <table class="table">
          <tr id="tableHead">
            <th width="20%">Unsere Mitglieder:</th>
          </tr>
          <?php
          $path = "./pers";
          $pers = preg_grep('/^([^.])/', scandir($path));
          $entries = count($pers);

          for ($i=2; $i <= $entries + 1; $i++) {
            //shit kriegen
            $txtObject = scandir($path . "/" . $pers[$i] . "/desc/");
            $value = array_search($pers[$i], $pers);
            //tabelle
            echo "
            <tr id=\"TableBody\">
              <th>$pers[$i]</th>
              <th><form action=\"form.php\" method=\"post\">
                </form></th>
            </tr>
            ";
          }
          echo "</table>";
        

          ?>
        </table>

            </div>
        
            
            <footer style="background-color: #f0f0f0;" class="page-footer">
                <div style="color: #0082b4;" class="container">
                  <div class="row">
                    <div class="col l6 s12">
                      <h5 class="">Credits</h5>
                      <p class="">Erstellt vom 2. Lehrjahr der Technischen Fachschule Bern.</p>
                    </div>
                    <div class="col l4 offset-l2 s12">
                      <h5 class="">Links</h5>
                      <ul>
                        <li><a class="" href="team.html">Team</a></li>
                        <li><a class="" href="contact.html">Kontakt</a></li>

                      </ul>
                    </div>
                  </div>
                </div>
                <div style="color: #000000;" class="footer-copyright">
                  <div class="container">
                  © 2019 Abteilung Informatik
                  </div>
                </div>
              </footer>
                
</body>
</html>

<style>
p{
  font-size: 14px;
}
</style>