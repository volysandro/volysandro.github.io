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
    const continueBtn = document.getElementById('configureProfile');

    newUsernameBtn.addEventListener('click', e => {
        var user = firebase.auth().currentUser;
        const txtUsername = txtNewUsername.value;

        
        user.updateProfile({
          displayName: txtUsername,
        }).then(function() {
          firebase.database().ref('userfullnames/' + txtUsername).set({
            fullname: sessionStorage.getItem('newfullname'),
            
          });

          newUsernameBtn.hidden = true;
          continueBtn.hidden = false;
          document.getElementById('userNameSet').innerHTML = 'Username Set!'
            }).catch(function(error) {
          document.getElementById('userNameSet').innerHTML = 'Try again. May not contain any special characters'    
            });
            
            


    });
    
    

continueBtn.addEventListener('click', e => {
  window.location = 'Accountedit.html';

});










}()); 