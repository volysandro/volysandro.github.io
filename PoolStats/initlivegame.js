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

  var secret = Math.floor(1000 + Math.random() * 9000);
console.log(secret);

var username
var emailNC
var email




  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){

      console.log(firebaseUser);
      email = firebase.auth().currentUser.email;
      emailNC = email.replace('@', '').replace('.', '').replace('.', '').replace('.', '');
      let userref = firebase.database().ref('users/' + emailNC);
  
        console.log(userref)

    
        firebase.database().ref('users/' + emailNC).once('value').then(function(snapshot) {
            console.log(snapshot.val());
            username = (snapshot.val() && snapshot.val().username) || 'N/A';
            document.getElementById("info").innerHTML = "username: " + username + "<br>"
        
          });

          firebase.database().ref('live/' + emailNC).set({
            secret: secret,
            started: false,
            opponent: "none"            
          }).then(function(){
              liveref = firebase.database().ref('live/' + emailNC)
              live(liveref)
              document.getElementById("info").innerHTML += "key: " + secret
          })

        firebase.database().ref('/tetriscounter').on('value', function(snapshot) {




        });

      




      
  

    }else{
        window.location = 'Welcomepage.html';
    }
  })


  document.getElementById("start").addEventListener("click", E => {
      var opponent = document.getElementById("opponent").value
      var opponentkey = document.getElementById("opponentkey").value
      console.log(opponent)

      var opponentEmailNC = opponent.replace('@', '').replace('.', '').replace('.', '').replace('.', '');
      let opponentref = firebase.database().ref('users/' + opponentEmailNC);


      firebase.database().ref('users/' + opponentEmailNC).once('value').then(function(snapshot) {
        const opponentUname = (snapshot.val() && snapshot.val().username) || 'N/A';
        console.log(opponentUname)
      });

      firebase.database().ref("live/" + opponentEmailNC).once("value").then(function(snapshot){

        if (opponentkey == (snapshot.val() && snapshot.val().secret)){
            if (document.getElementById("raceto").value != ""){
              startGame(opponentkey, opponentEmailNC, document.getElementById("raceto").value, document.getElementById("gametype").value)
              console.log(document.getElementById("gametype").value)

            } else {
              document.getElementById("info").innerHTML += "<br> Enter a Race To"
            }
        }else{console.log("wrong key")
        document.getElementById("info").innerHTML += "<br> Wrong Key"

      
      }
      })





  })


  function startGame(opponentkey, opponentEmailNC, raceto, gametype){

    var gameid = emailNC + opponentEmailNC

    firebase.database().ref('live/' + emailNC).set({
        secret: secret,
        started: true,
        opponent: opponentEmailNC,
        id: gameid,
        player: 1            
      })

    firebase.database().ref("live/" + opponentEmailNC).set({
        secret: opponentkey,
        started: true,
        opponent: emailNC,
        id: gameid,
        player: 2
    })

    firebase.database().ref("activegames/" + gameid).set({

        gametype: gametype,
        raceto: raceto,
        player1: emailNC,
        player2: opponentEmailNC,
        player1score: 0,
        player2score: 0

    })




  }

  function live(ref){
    ref.on("value", function(snapshot){
        console.log(snapshot.val())
        if(snapshot.val().started == true){
            console.log("started")
            window.location.replace("livegamepage.html")

        }
    })



  }
