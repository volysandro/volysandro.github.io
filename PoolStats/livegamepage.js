// Initialize Firebase
var config = {
    apiKey: "AIzaSyCjJqNcWazQphV6_EnJWTEwyh4f_PmbVzQ",
    authDomain: "poolst4ts.firebaseapp.com",
    databaseURL: "https://poolst4ts.firebaseio.com",
    projectId: "poolst4ts",
    storageBucket: "poolst4ts.appspot.com",
    messagingSenderId: "413155449404"
  };
  firebase.initializeApp(config);

  var gameref
  var player1
  var player2
  var uname1
  var uname2
  var myself
  var gameid
  var raceto
  var gameType


  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){

      console.log(firebaseUser);
      email = firebase.auth().currentUser.email;
      emailNC = email.replace('@', '').replace('.', '').replace('.', '').replace('.', '');
      let userref = firebase.database().ref('users/' + emailNC); 
      console.log(emailNC)
      firebase.database().ref('live/' + emailNC).once('value').then(function(snapshot) {
        console.log(snapshot.val());
        started = (snapshot.val() && snapshot.val().started) || 'N/A';

        if (started == true) {

            gameid = snapshot.val().id
            myself = "player" + snapshot.val().player

            console.log(gameid)
            gameref = firebase.database().ref("activegames/" + gameid)

            gameref.once("value").then(function(snapshot){
                
                console.log(snapshot.val())
                player1 = snapshot.val().player1
                player2 = snapshot.val().player2
                raceto = snapshot.val().raceto
                gameType = snapshot.val().gametype
                document.getElementById("raceto").innerHTML += raceto
                
    
                firebase.database().ref('users/' + player1).once('value').then(function(snap) {
                    console.log(snap.val())
                    uname1 = snap.val().username
                    document.getElementById("player1name").innerHTML = uname1
                })

                firebase.database().ref('users/' + player2).once('value').then(function(snap) {
                    console.log(snap.val())
                    uname2 = snap.val().username
                    document.getElementById("player2name").innerHTML = uname2

                })

                score1 = snapshot.val().player1score
                score2 = snapshot.val().player2score
                if (myself == "player1"){
                    myscore = snapshot.val().player1score
                } else{
                    myscore = snapshot.val().player2score
        
                }
        


                live()

            })


        } else{
            window.location ="initlivegame.html"
        }
        
      });


    

      




      
  

    }else{
        window.location = 'Welcomepage.html';
    }
  })

  var score1
  var score2
  var myscore



  function live(){


    console.log(gameid, myself)

    document.getElementById("plus").addEventListener("click", E => {

        firebase.database().ref("activegames/" + gameid).update({
            [myself + "score"]: myscore + 1
        })
    
    })
    document.getElementById("minus").addEventListener("click", E => {

        firebase.database().ref("activegames/" + gameid).update({
            [myself + "score"]: myscore - 1
        })

    })


    console.log(myself)
    console.log(raceto)
    gameref.on("value", function(snapshot){
        document.getElementById("player1score").innerHTML = snapshot.val().player1score
        document.getElementById("player2score").innerHTML = snapshot.val().player2score
        score1 = snapshot.val().player1score
        score2 = snapshot.val().player2score
        if (myself == "player1"){
            myscore = snapshot.val().player1score
        } else{
            myscore = snapshot.val().player2score

        }
        if(score1 >= raceto || score2 >= raceto){
            document.getElementById("endgame").className = "btn btn-action blue"
        }else{
            document.getElementById("endgame").className = "btn btn-action blue hide"
        }
        if (snapshot.val().ended == true){
            window.location = "Mainpage.html"
        }

    })

  }


  document.getElementById("endgame").addEventListener("click", E => {

    if(score1 < score2){
        var finalPlayer1Result = "lost"
        var finalPlayer2Result = "won"
    } else {
        var finalPlayer1Result = "won"
        var finalPlayer2Result = "lost"

    }


    var date = new Date();
    const gameID = date + uname1 + ' vs ' + uname2;
    firebase.database().ref('userstats/' + player1).once('value').then(function(snapshot) {
        console.log(snapshot.val());

    });


    firebase.database().ref('lastgame/' + player1 + '/').set({
      lastgame: gameID,
      
      });

      firebase.database().ref('lastgame/' + player2 + '/').set({
        lastgame: gameID,
        
        });






    





    firebase.database().ref('userstats/' + player1 + '/' + gameID).set({
      opponent: uname2,
      myscore: score1,
      opponentscore: score2,
      result: finalPlayer1Result,
      });

      firebase.database().ref('userstatsdifferentgames/' + player1 + '/' + gameType + '/' + gameID).set({
        opponent: uname2,
        myscore: score1,
        opponentscore: score2,
        result: finalPlayer1Result,
        });
  


    

      


    firebase.database().ref('userstats/' + player2 + '/' + gameID).set({
      opponent: uname1,
      myscore: score2,
      opponentscore: score1,
      result: finalPlayer2Result,
      });


      firebase.database().ref('userstatsdifferentgames/' + player2 + '/' + gameType + '/' + gameID).set({
        opponent: uname1,
        myscore: score2,
        opponentscore: score1,
        result: finalPlayer2Result,
          });



        setTimeout(() => {

            firebase.database().ref("live/" + player1).update({started: false})
            firebase.database().ref("live/" + player2).update({started: false})


            gameref.update({
                ended: true
            })
        }, 3000);


  })


