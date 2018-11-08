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



  var totalWon = 0;
  var totalLost = 0;
  var lastMatchup = "";
  var lastMatchupResult = "";
  var lastMatchupScore = "";

  const backToMenu = document.getElementById('backToMenu');

  backToMenu.addEventListener('click', e=> {
window.location = 'Mainpage.html';
  });







  function showStats(){

username = auth.currentUser.displayName;

firebase.database().ref('userprofiles/' + username).once('value').then(function(snapshot) {
    const lastGame = (snapshot.val() && snapshot.val().lastgame) || '';
    
    console.log(lastGame);

    firebase.database().ref('userstats/' + username + '/' + lastGame).once('value').then(function(snapshot) {
        console.log(snapshot.val());
        const lastGameResult = (snapshot.val() && snapshot.val().result) || 'N/A';
        console.log(lastGameResult)
        const lastGameMyScore = (snapshot.val() && snapshot.val().myscore) || 'N/A';
        const lastGameOpponentScore = (snapshot.val() && snapshot.val().opponentscore) || 'N/A';
        const opponentName = (snapshot.val() && snapshot.val().opponent) || 'N/A';
    
        document.getElementById('lastMatchup').innerHTML = 'You ' + lastGameResult + ' your last game against ' + opponentName;
        document.getElementById('lastMatchupScore').innerHTML = lastGameMyScore + ' - ' + lastGameOpponentScore;
      });

  });








firebase.database().ref('userstats/' + username).once('value').then(function(snapshot) {
    
        var totalWon = 0;
      for (var gameResult of Object.values(snapshot.val())) {
         console.log(gameResult.myscore);
         totalWon += gameResult.myscore;
      }
      document.getElementById('totalWon').innerHTML = 'Total Won: ' + totalWon;
          
      var totalLost = 0;
      for (var gameResult of Object.values(snapshot.val())) {
         console.log(gameResult.opponentscore);
         totalLost += gameResult.opponentscore;
      }
      document.getElementById('totalLost').innerHTML = 'Total Lost: ' + totalLost;
          


  });















  }











  auth.onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      showStats();
    }else{
        window.location = 'Loginpage.html';
    }
  
  });

  

  