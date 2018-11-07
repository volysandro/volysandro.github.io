

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
      

      const opponentUname = document.getElementById('opponentUname');
      const btnSubmitOpponent = document.getElementById('btnSubmitOpponent');
      const btnChoose8Ball = document.getElementById('choose8Ball');
      const btnChoose9Ball = document.getElementById('choose9Ball');
      const btnChoose10Ball = document.getElementById('choose10Ball');
      const btnChooseStraightPool = document.getElementById('chooseStraightPool');
      const txtRaceTo = document.getElementById('raceTo');
      

      if(btnSubmitOpponent){

      btnSubmitOpponent.addEventListener('click', e => {
       const opponentID = opponentUname.value;
       firebase.database().ref('userprofiles/' + opponentID).once('value').then(function(snapshot) {
        
        var doesOpponentExist = (snapshot.val() && snapshot.val().fullname) || '';
        
        
        


        if (doesOpponentExist != ""){
            console.log('User Exists');
            sessionStorage.setItem('opponent', opponentID);
            sessionStorage.setItem('player2fullname', doesOpponentExist);


            window.location = 'Choosegame.html';
            
            
        }
        else{
            console.log('User doesnt exist');
            document.getElementById('doesntExist').innerHTML = 'User doesnt exist';
        }


      });




      });

    }


    if (document.getElementById('showSelectedOpponent')){
        document.getElementById('showSelectedOpponent').innerHTML = sessionStorage.getItem('opponent');
    }


    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            sessionStorage.setItem('playerusername', firebaseUser.displayName);
            
            

            return firebase.database().ref('userprofiles/' + firebaseUser.displayName).once('value').then(function(snapshot) {
          
                const player1FullName = (snapshot.val() && snapshot.val().fullname) || firebaseUser.displayName;
                sessionStorage.setItem('player1fullname', player1FullName);
              });

              
                      }
                    
                    });



if (btnChoose8Ball){
    btnChoose8Ball.addEventListener('click', e => {
        var setRaceTo = txtRaceTo.value;
        sessionStorage.setItem('gametype', '8-Ball');
        sessionStorage.setItem('raceto', setRaceTo);
        window.location = 'Gamepagestandard.html';
    });
}

if (btnChoose9Ball){
    btnChoose9Ball.addEventListener('click', e => {
        var setRaceTo = txtRaceTo.value;
        sessionStorage.setItem('gametype', '9-Ball');
        sessionStorage.setItem('raceto', setRaceTo);
        window.location = 'Gamepagestandard.html';

    });
}

if (btnChoose10Ball){
    btnChoose10Ball.addEventListener('click', e => {
        var setRaceTo = txtRaceTo.value;
        sessionStorage.setItem('gametype', '10-Ball');
        sessionStorage.setItem('raceto', setRaceTo);
        window.location = 'Gamepagestandard.html';

    });
}

if (btnChooseStraightPool){
    btnChooseStraightPool.addEventListener('click', e => {
        var setRaceTo = txtRaceTo.value;
        sessionStorage.setItem('gametype', 'Straight Pool');
        sessionStorage.setItem('raceto', setRaceTo);
        window.location = 'Gamepagestandard.html';

    });
}


















    window.addEventListener('load', console.log(sessionStorage.getItem('opponent')));