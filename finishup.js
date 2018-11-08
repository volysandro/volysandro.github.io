var config = {
    apiKey: "AIzaSyCjJqNcWazQphV6_EnJWTEwyh4f_PmbVzQ",
    authDomain: "poolst4ts.firebaseapp.com",
    databaseURL: "https://poolst4ts.firebaseio.com",
    projectId: "poolst4ts",
    storageBucket: "poolst4ts.appspot.com",
    messagingSenderId: "413155449404"
  };
  firebase.initializeApp(config);

  player2Username = sessionStorage.getItem('opponent');
  player1Username = sessionStorage.getItem('playerusername');
  player1FullName = sessionStorage.getItem('player1fullname');
  player2FullName = sessionStorage.getItem('player2fullname');
  const finalPlayer1Score = parseInt(sessionStorage.getItem('player1score'));
  const finalPlayer2Score = parseInt(sessionStorage.getItem('player2score'));
  const finalPlayer1Result = sessionStorage.getItem('player1result');
  const finalPlayer2Result = sessionStorage.getItem('player2result');
  const submitMatch = document.getElementById('submitMatch');

submitMatch.addEventListener('click', e => {

  firebase.database().ref('users/' + player2FullName).once('value').then(function(snapshot) {
          
    const player2Pwd = (snapshot.val() && snapshot.val().password) || '';
    const passwordEntered = document.getElementById('player2Pwd');

    if(player2Pwd == passwordEntered.value){
        addPointsToStats();
        window.location = 'Statspage.html';    
      }
  
    else{
      document.getElementById('wrongPwd').innerHTML = 'Wrong password for ' + player2Username;
    }
    
    
    
  });





});
















  
  


  function addPointsToStats(){
    var date = new Date();
    const gameID = date + player1FullName + ' vs ' + player2FullName;
    firebase.database().ref('userstats/' + player1Username).once('value').then(function(snapshot) {
console.log(snapshot.val());

    });


    firebase.database().ref('lastgame/' + player1Username + '/').set({
      lastgame: gameID,
      
      });

      firebase.database().ref('lastgame/' + player2Username + '/').set({
        lastgame: gameID,
        
        });






    





    firebase.database().ref('userstats/' + player1Username + '/' + gameID).set({
      opponent: player2FullName,
      myscore: finalPlayer1Score,
      opponentscore: finalPlayer2Score,
      result: finalPlayer1Result,
      });


    

      


    firebase.database().ref('userstats/' + player2Username + '/' + gameID).set({
      opponent: player1FullName,
      myscore: finalPlayer2Score,
      opponentscore: finalPlayer1Score,
      result: finalPlayer2Result,
      });








  }
















  function whoWon(){
      if (finalPlayer1Result == "won"){document.getElementById('whoWon').innerHTML = player1FullName + ' Won!';}
      else if (finalPlayer2Result == "won"){document.getElementById('whoWon').innerHTML = player2FullName + ' Won!';}

  }

window.addEventListener('load', whoWon());


