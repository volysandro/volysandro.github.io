

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

      btnSubmitOpponent.addEventListener('click', e => {

        const opponentID = opponentUname.value;
        if (firebase.database().ref('users/' + opponentID) == true){
            console.log('User exists');

        }
        else{
            console.log('user doesnt exist');
        }



      });