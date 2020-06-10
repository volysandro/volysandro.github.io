<?php
  function invalidLogin($l){
    echo "<p id=\"error\">Ung&uumlltige Login-Informationen!</p>";
    echo $l;
  }
  # inputs
  session_start();
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
    $test = file_get_contents("./src/userconfig.txt");
    $a_test = explode(",",$test);
    $uname_test = $a_test[0];
    $pword_test = $a_test[1];
    # check if userinputs are matching
    if($uname_test == $u AND password_verify($p,$pword_test)){
      # username & password correct
      echo "<br>Login successful!";
      # access site
      $_SESSION["verify"] = $pword_test;
      $_SESSION["p"] = $p;
      header("Location: ../form.php");
    }
    else{
      invalidLogin($login_page);
    }
  }
 ?>
