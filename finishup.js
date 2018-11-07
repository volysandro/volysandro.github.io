var config = {
    apiKey: "AIzaSyCjJqNcWazQphV6_EnJWTEwyh4f_PmbVzQ",
    authDomain: "poolst4ts.firebaseapp.com",
    databaseURL: "https://poolst4ts.firebaseio.com",
    projectId: "poolst4ts",
    storageBucket: "poolst4ts.appspot.com",
    messagingSenderId: "413155449404"
  };
  firebase.initializeApp(config);

  player1FullName = sessionStorage.getItem('player1fullname');
  player2FullName = sessionStorage.getItem('player2fullname');
  const finalPlayer1Score = sessionStorage.getItem('player1score');
  const finalPlayer2Score = sessionStorage.getItem('player2score');
  const finalPlayer1Result = sessionStorage.getItem('player1result');
  const finalPlayer2Result = sessionStorage.getItem('player2result');

  function whoWon(){
      if (finalPlayer1Result == "won"){document.getElementById('whoWon').innerHTML = player1FullName + ' Won!';}
      else if (finalPlayer2Result == "won"){document.getElementById('whoWon').innerHTML = player2FullName + ' Won!';}

  }

window.addEventListener('load', whoWon());