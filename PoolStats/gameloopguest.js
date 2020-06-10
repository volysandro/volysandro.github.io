var config = {
    apiKey: "AIzaSyCjJqNcWazQphV6_EnJWTEwyh4f_PmbVzQ",
    authDomain: "poolst4ts.firebaseapp.com",
    databaseURL: "https://poolst4ts.firebaseio.com",
    projectId: "poolst4ts",
    storageBucket: "poolst4ts.appspot.com",
    messagingSenderId: "413155449404"
  };
  firebase.initializeApp(config);

  auth = firebase.auth();




 
  var raceTo = parseInt(sessionStorage.getItem('raceto'));
  const gameType = sessionStorage.getItem('gametype');
  document.getElementById('player1Name').innerHTML = 'Player 1';
  document.getElementById('player2Name').innerHTML = 'Player 2';
  var player1Score = 0;
  var player2Score = 0;

  const player1Up = document.getElementById('player1Up');
  const player1Down = document.getElementById('player1Down');
  const player2Up = document.getElementById('player2Up');
  const player2Down = document.getElementById('player2Down');









  player1Up.addEventListener('click', e => {
      player1Score = player1Score + 1;
      document.getElementById('player1Score').innerHTML = player1Score;
      document.getElementById('player2Score').innerHTML = player2Score;
      check()
  });

  player1Down.addEventListener('click', e => {
      player1Score = player1Score - 1;
      document.getElementById('player1Score').innerHTML = player1Score;
      document.getElementById('player2Score').innerHTML = player2Score;
      check()
  });

  player2Up.addEventListener('click', e => {
      player2Score = player2Score + 1;
      document.getElementById('player1Score').innerHTML = player1Score;
      document.getElementById('player2Score').innerHTML = player2Score;
      check()
  });

  player2Down.addEventListener('click', e => {
      player2Score = player2Score - 1;
      document.getElementById('player1Score').innerHTML = player1Score;
      document.getElementById('player2Score').innerHTML = player2Score;
      check()
  });


function check(){

if (player1Score == raceTo || player2Score == raceTo){

sessionStorage.setItem('player1score', player1Score);
sessionStorage.setItem('player2score', player2Score);

  if(player1Score > player2Score){
    sessionStorage.setItem('player1result', 'won');
    sessionStorage.setItem('player2result', 'lost');
  }
else{
  sessionStorage.setItem('player2result', 'won');
  sessionStorage.setItem('player1result', 'lost');

}




window.location = 'Finishupguest.html';




}
}

  


  


  
function setScoresToZero(){
  
  document.getElementById('player1Score').innerHTML = player1Score;
  document.getElementById('player2Score').innerHTML = player2Score;
}

  window.addEventListener('load', setScoresToZero());