<?php
  function invalidLogin($l){
    echo "<p id=\"error\">Falsche Login-Informationen!</p>";
    echo $l;
  }
  # inputs
  $u = $_POST["username"];
  $p = $_POST["password"];
  # get login page
  $login_page = file_get_contents("login.html");
  # check if inputs filled
  if($u == "" OR $p == ""){
    echo "<p id=\"error\">Bitte füllen Sie alle Felder aus!</p>";
    echo $login_page;
  }
  else{
    # both inputs filled

    # grab clear-text username & password-hash from txt file
    $test = file_get_contents("./src/userconfig.txt");
    $a_test = explode(",",$test);
    $uname_test = $a_test[0];
    $pword_test = $a_test[1];

    # check if userinputs are matching
    if($uname_test == $u AND password_verify($p,$pword_test)){
      # username & password correct
      echo "<br>Login successful!";
      header("Location: form.php");
      # aufruf seite
    }
    else{
      invalidLogin($login_page);
    }
  }
 ?>
