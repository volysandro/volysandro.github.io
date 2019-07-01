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

$(document).ready(function(){
  $('select').formSelect();
});

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){

      console.log(firebaseUser);
      email = firebase.auth().currentUser.email;
      emailNC = email.replace('@', '').replace('.', '').replace('.', '').replace('.', '');
      let userref = firebase.database().ref('users/' + emailNC);
      var qrcode = new QRCode("qrcode", {
        text: emailNC,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
      });
      
        console.log(userref)

    
        firebase.database().ref('users/' + emailNC).once('value').then(function(snapshot) {
            console.log(snapshot.val());
            username = (snapshot.val() && snapshot.val().username) || 'N/A';
            document.getElementById("info").innerHTML = "username: " + username + "<br>"
        
          });



          firebase.database().ref("live/" + emailNC).once("value").then(function(snapshot){

            
            if (snapshot.val().started == true){
              var answer = confirm("Continue previously started game?")
              if (answer) {
                  window.location = "livegamepage.html"
              }
              else {
                  //some code
                  firebase.database().ref('live/' + emailNC).set({
                    secret: secret,
                    started: false,
                    opponent: "none"            
                  }).then(function(){
                      liveref = firebase.database().ref('live/' + emailNC)
                      live(liveref)
                      document.getElementById("info").innerHTML += "key: " + secret
                  })
              }
            } else{
              firebase.database().ref('live/' + emailNC).set({
                secret: secret,
                started: false,
                opponent: "none"            
              }).then(function(){
                  liveref = firebase.database().ref('live/' + emailNC)
                  live(liveref)
                  document.getElementById("info").innerHTML += "key: " + secret
              })

            }
          })


  



      




      
  

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
        player2score: 0,
        ended: false

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




  function openQRCamera(node) {


      var reader = new FileReader();
      reader.onload = function() {
        node.value = "";
        qrcode.callback = function(res) {
          if(res instanceof Error) {
            alert("No QR code found. Please make sure the QR code is within the camera's frame and try again.");
          } else {
            console.log(res)

            if (document.getElementById("raceto").value > 0){
              raceto = document.getElementById("raceto").value



            } else {
              var raceto = prompt("Race to?");
    
              if (raceto == null || raceto == "") {
                txt = "User cancelled the prompt.";
              } else {
                document.getElementById("raceto").value = raceto
                

            }


            }
            if (document.getElementById("gametype").value != "none"){
              gametype = document.getElementById("gametype").value
            } else {
              var gametype = prompt("What game would you like to play? (9, 8, 10)")
              if (gametype == null || gametype == "") {
                txt = "User cancelled the prompt.";
              } 
              else if (gametype == "10" || gametype == "9" || gametype == "8"){

                if(gametype == "10"){
                  gametype = "10-Ball"
                } else if (gametype == "9"){
                  gametype = "9-Ball"
                } else if (gametype == "8"){
                  gametype = "8-Ball"
                }
                
                
                
                document.getElementById("gametype").value = gametype

            }

              }


            var opponentEmailNC = res;
            let opponentref = firebase.database().ref('users/' + opponentEmailNC);
      
      
            firebase.database().ref('users/' + opponentEmailNC).once('value').then(function(snapshot) {
              const opponentUname = (snapshot.val() && snapshot.val().username) || 'N/A';
              console.log(opponentUname)
            });


            firebase.database().ref("live/" + opponentEmailNC).once("value").then(function(snapshot){

                    startGame(snapshot.val().secret, opponentEmailNC, raceto, gametype)
                    console.log(document.getElementById("gametype").value)
      

      
            
            
            })




          }
        };
        qrcode.decode(reader.result);
      };
      reader.readAsDataURL(node.files[0]);
  
    }
