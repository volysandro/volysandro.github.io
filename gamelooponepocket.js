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
  const opponent = sessionStorage.getItem('opponent');
  const gameType = sessionStorage.getItem('gametype');
  const username = sessionStorage.getItem('playerusername');
  document.getElementById('printGameType').innerHTML = gameType;
  document.getElementById('printRaceTo').innerHTML = 'Race-To: ' + raceTo;
  document.getElementById('player1NameOP').innerHTML = sessionStorage.getItem('player1fullname');
  document.getElementById('player2NameOP').innerHTML = sessionStorage.getItem('player2fullname');
  var player1Score = 0;
  var player2Score = 0;

  var player1Count = 0;
  var player2Count = 0;

  const player1Up = document.getElementById('player1UpOP');
  const player1Down = document.getElementById('player1DownOP');
  const player2Up = document.getElementById('player2UpOP');
  const player2Down = document.getElementById('player2DownOP');

  const player1count1 = document.getElementById('player1count1');
  const player1count3 = document.getElementById('player1count3');
  const player1count5 = document.getElementById('player1count5');
  const player1countm1 = document.getElementById('player1countm1');
  const player1countm3 = document.getElementById('player1countm3');
  const player1countm5 = document.getElementById('player1countm5');

  const player2count1 = document.getElementById('player2count1');
  const player2count3 = document.getElementById('player2count3');
  const player2count5 = document.getElementById('player2count5');
  const player2countm1 = document.getElementById('player2countm1');
  const player2countm3 = document.getElementById('player2countm3');
  const player2countm5 = document.getElementById('player2countm5');

  player1count1.addEventListener('click', e => {
    player1Count = player1Count + 1;
    document.getElementById('player1Count').innerHTML = player1Count;
    document.getElementById('player2Count').innerHTML = player2Count;
});

player1count3.addEventListener('click', e => {
    player1Count = player1Count + 3;
    document.getElementById('player1Count').innerHTML = player1Count;
    document.getElementById('player2Count').innerHTML = player2Count;
});

player1count5.addEventListener('click', e => {
    player1Count = player1Count + 5;
    document.getElementById('player1Count').innerHTML = player1Count;
    document.getElementById('player2Count').innerHTML = player2Count;
});

player1countm1.addEventListener('click', e => {
    player1Count = player1Count - 1;
    document.getElementById('player1Count').innerHTML = player1Count;
    document.getElementById('player2Count').innerHTML = player2Count;
});

player1countm3.addEventListener('click', e => {
    player1Count = player1Count - 3;
    document.getElementById('player1Count').innerHTML = player1Count;
    document.getElementById('player2Count').innerHTML = player2Count;
});

player1countm5.addEventListener('click', e => {
    player1Count = player1Count - 5;
    document.getElementById('player1Count').innerHTML = player1Count;
    document.getElementById('player2Count').innerHTML = player2Count;
});

player2count1.addEventListener('click', e => {
    player2Count = player2Count + 1;
    document.getElementById('player1Count').innerHTML = player1Count;
    document.getElementById('player2Count').innerHTML = player2Count;
});

player2count3.addEventListener('click', e => {
    player2Count = player2Count + 3;
    document.getElementById('player1Count').innerHTML = player1Count;
    document.getElementById('player2Count').innerHTML = player2Count;
});

player2count5.addEventListener('click', e => {
    player2Count = player2Count + 5;
    document.getElementById('player1Count').innerHTML = player1Count;
    document.getElementById('player2Count').innerHTML = player2Count;
});

player2countm1.addEventListener('click', e => {
    player2Count = player2Count - 1;
    document.getElementById('player1Count').innerHTML = player1Count;
    document.getElementById('player2Count').innerHTML = player2Count;
});

player2countm3.addEventListener('click', e => {
    player2Count = player2Count - 3;
    document.getElementById('player1Count').innerHTML = player1Count;
    document.getElementById('player2Count').innerHTML = player2Count;
});

player2countm5.addEventListener('click', e => {
    player2Count = player2Count - 5;
    document.getElementById('player1Count').innerHTML = player1Count;
    document.getElementById('player2Count').innerHTML = player2Count;
});








  player1Up.addEventListener('click', e => {
      player1Score = player1Score + 1;
      player1Count = 0;
      player2Count = 0;
      document.getElementById('player1Count').innerHTML = player1Count;
      document.getElementById('player2Count').innerHTML = player2Count;
      document.getElementById('player1ScoreOP').innerHTML = player1Score;
      document.getElementById('player2ScoreOP').innerHTML = player2Score;
      check()
  });

  player1Down.addEventListener('click', e => {
      player1Score = player1Score - 1;
      player1Count = 0;
      player2Count = 0;
      document.getElementById('player1Count').innerHTML = player1Count;
      document.getElementById('player2Count').innerHTML = player2Count;
      document.getElementById('player1ScoreOP').innerHTML = player1Score;
      document.getElementById('player2ScoreOP').innerHTML = player2Score;
      check()
  });

  player2Up.addEventListener('click', e => {
      player2Score = player2Score + 1;
      player1Count = 0;
      player2Count = 0;
      document.getElementById('player1Count').innerHTML = player1Count;
      document.getElementById('player2Count').innerHTML = player2Count;
      document.getElementById('player1ScoreOP').innerHTML = player1Score;
      document.getElementById('player2ScoreOP').innerHTML = player2Score;
      check()
  });

  player2Down.addEventListener('click', e => {
      player2Score = player2Score - 1;
      player1Count = 0;
      player2Count = 0;
      document.getElementById('player1Count').innerHTML = player1Count;
      document.getElementById('player2Count').innerHTML = player2Count;
      document.getElementById('player1ScoreOP').innerHTML = player1Score;
      document.getElementById('player2ScoreOP').innerHTML = player2Score;
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




window.location = 'Finishup.html';




}
}

  


  


  
function setScoresToZero(){
  
  document.getElementById('player1ScoreOP').innerHTML = player1Score;
  document.getElementById('player2ScoreOP').innerHTML = player2Score;

  document.getElementById('player1Count').innerHTML = '0';
  document.getElementById('player2Count').innerHTML = '0';

}

  window.addEventListener('load', setScoresToZero());