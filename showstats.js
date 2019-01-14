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

username = auth.currentUser.email.replace('@', '').replace('.', '').replace('.', '').replace('.', '').replace('.', '');

firebase.database().ref('lastgame/' + username).once('value').then(function(snapshot) {
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
      const quote = totalWon / totalLost;
      document.getElementById('totalLost').innerHTML = 'Total Lost: ' + totalLost;

      document.getElementById('average').innerHTML = 'Win/Lose Ratio: ' + quote.toFixed(2);
          


  });










  //8Ball

  firebase.database().ref('userstatsdifferentgames/' + username + '/8-Ball').once('value').then(function(snapshot) {
    
    var totalWon = 0;
  for (var gameResult of Object.values(snapshot.val())) {
     console.log(gameResult.myscore);
     totalWon += gameResult.myscore;
  }
      
  var totalLost = 0;
  for (var gameResult of Object.values(snapshot.val())) {
     console.log(gameResult.opponentscore);
     totalLost += gameResult.opponentscore;
  }
  const quote = totalWon / totalLost;

  document.getElementById('8ballaverage').innerHTML = '8-Ball Ratio: ' + quote.toFixed(2);
      


});

//9Ball

firebase.database().ref('userstatsdifferentgames/' + username + '/9-Ball').once('value').then(function(snapshot) {
    
  var totalWon = 0;
for (var gameResult of Object.values(snapshot.val())) {
   console.log(gameResult.myscore);
   totalWon += gameResult.myscore;
}
    
var totalLost = 0;
for (var gameResult of Object.values(snapshot.val())) {
   console.log(gameResult.opponentscore);
   totalLost += gameResult.opponentscore;
}
const quote = totalWon / totalLost;

document.getElementById('9ballaverage').innerHTML = '9-Ball Ratio: ' + quote.toFixed(2);
    


});

//10Ball

firebase.database().ref('userstatsdifferentgames/' + username + '/10-Ball').once('value').then(function(snapshot) {
    
  var totalWon = 0;
for (var gameResult of Object.values(snapshot.val())) {
   console.log(gameResult.myscore);
   totalWon += gameResult.myscore;
}
    
var totalLost = 0;
for (var gameResult of Object.values(snapshot.val())) {
   console.log(gameResult.opponentscore);
   totalLost += gameResult.opponentscore;
}
const quote = totalWon / totalLost;

document.getElementById('10ballaverage').innerHTML = '10-Ball Ratio: ' + quote.toFixed(2);
    


});

//Straight Pool

firebase.database().ref('userstatsdifferentgames/' + username + '/straightpool').once('value').then(function(snapshot) {
    
  var totalWon = 0;
for (var gameResult of Object.values(snapshot.val())) {
   console.log(gameResult.myscore);
   totalWon += gameResult.myscore;
}
    
var totalLost = 0;
for (var gameResult of Object.values(snapshot.val())) {
   console.log(gameResult.opponentscore);
   totalLost += gameResult.opponentscore;
}
const quote = totalWon / totalLost;

document.getElementById('straightpoolballaverage').innerHTML = 'Straight Pool Ratio: ' + quote.toFixed(2);
    


});















  }











  auth.onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      showStats();
    }else{
        window.location = 'Loginpage.html';
    }
  
  });

  

  