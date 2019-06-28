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
            startGame(opponentkey, opponentEmailNC)
        }else{console.log("wrong key")}
      })





  })


  function startGame(opponentkey, opponentEmailNC){

    firebase.database().ref('live/' + emailNC).set({
        secret: secret,
        started: true,
        opponent: opponentEmailNC            
      })

    firebase.database().ref("live/" + opponentEmailNC).set({
        secret: opponentkey,
        started: true,
        opponent: emailNC
    })

  }

  function live(ref){
    ref.on("value", function(snapshot){
        console.log(snapshot.val())
        if(snapshot.val().started == true){
            console.log("started")
            window.location.replace("http://9gag.com")
        }
    })

  }
