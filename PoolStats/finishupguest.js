var config = {
    apiKey: "AIzaSyCjJqNcWazQphV6_EnJWTEwyh4f_PmbVzQ",
    authDomain: "poolst4ts.firebaseapp.com",
    databaseURL: "https://poolst4ts.firebaseio.com",
    projectId: "poolst4ts",
    storageBucket: "poolst4ts.appspot.com",
    messagingSenderId: "413155449404"
  };
  firebase.initializeApp(config);

  const finalPlayer1Score = parseInt(sessionStorage.getItem('player1score'));
  const finalPlayer2Score = parseInt(sessionStorage.getItem('player2score'));
  const finalPlayer1Result = sessionStorage.getItem('player1result');
  const finalPlayer2Result = sessionStorage.getItem('player2result');
const goBack = document.getElementById('goBack');



goBack.addEventListener('click', e => {
    window.location = 'Welcomepage.html';
});
    




  function whoWon(){
      if (finalPlayer1Result == "won"){document.getElementById('whoWon').innerHTML = 'Player 1 Won!';}
      else if (finalPlayer2Result == "won"){document.getElementById('whoWon').innerHTML = 'Player 2 Won!';}

  }

window.addEventListener('load', whoWon());


