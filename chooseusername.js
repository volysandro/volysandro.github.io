(function(){

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

    const txtNewUsername = document.getElementById('newUsername');
    const newUsernameBtn = document.getElementById('newUsernameBtn');

    newUsernameBtn.addEventListener('click', e => {
        var user = firebase.auth().currentUser;
        const txtUsername = txtNewUsername.value;
        user.updateProfile({
            displayName: txtUsername,
          }).then(function() {
            window.location = 'Mainpage.html';
          }).catch(function(error) {
            
          });




    });












}()); 