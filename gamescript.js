

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
      
      

      if(btnSubmitOpponent){

      btnSubmitOpponent.addEventListener('click', e => {
       const opponentID = opponentUname.value;
       firebase.database().ref('userprofiles/' + opponentID).once('value').then(function(snapshot) {
        
        var doesOpponentExist = (snapshot.val() && snapshot.val().fullname) || '';
        

        if (doesOpponentExist != ""){
            console.log('User Exists');
            sessionStorage.setItem('opponent', opponentID);
            doesOpponentExist = "";
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



    window.addEventListener('load', console.log(sessionStorage.getItem('opponent')));