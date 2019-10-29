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
                    </div>
        
                </div>
        
        
        
            </header>

            <div class="center" id="titel">
                <h1 id="title">Team und Unterstützung</h1>
            </div>
            <?php

            $path = "./pers";
            $pers = preg_grep('/^([^.])/', scandir($path));
            $entries = count($pers);
            $col = 0;

            echo "<div class=\"row\">";
        
            for ($i=2; $i <= $entries + 1; $i++) {
              //shit kriegen
              $object = scandir($path . "/" . $pers[$i]);
              $desc = file_get_contents($path . "/" . $pers[$i] . "/" . $object[3]);
              $img = $path . "/" . $pers[$i] . "/" . $object[2];

              if($col == 4){
                $col = 0;
                echo "
                </div>
                <div class=\"row\">;

                <div class=\"col s3 m3\">
                  <div style=\"width: 350px; margin: 0; margin-top: 200px;\" class=\"person card hoverable\">
                  <div style=\"height: 300px;\" class=\"card-image center\">
                  <img style=\"height: 300px;\" src=\"$img\">
                  </div>
                  <h4>$pers[$i]</h4>
                    <p>$desc</p>
                  </div>
                  </div>
                ";
              }
              else{

                echo "
                <div class=\"col s3 m3\">
                  <div style=\"width: 350px; margin: 0; margin-top: 200px;\" class=\"person card hoverable\">
                  <div style=\"height: 300px;\" class=\"card-image center\">
                  <img style=\"height: 300px;\" src=\"$img\">
                  </div>
                  <h4>$pers[$i]</h4>
                    <p>$desc</p>
                  </div>
                  </div>
                ";
                $col++;
              }
              //ausgabe
            }
             ?>
        
            
            <footer style="background-color: #f0f0f0;" class="page-footer">
                <div style="color: #0082b4;" class="container">
                  <div class="row">
                    <div class="col l6 s12">
                      <h5 class="">Credits</h5>
                      <p class="">Erstellt mit viel Liebe von Schülern der Technischen Fachschule Bern.</p>
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
                  © 2019 Samis Moser, Liam Benedetti, Sandro Volery - Abteilung Informatik
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