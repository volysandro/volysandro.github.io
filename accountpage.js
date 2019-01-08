

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
    
    const accountSettings = document.getElementById('accountSettings');
    const openStatsPage = document.getElementById('openStatsPage');

    /*openStatsPage.addEventListener('click', e => {
      window.location = 'Statspage.html';
    });*/

    /*accountSettings.addEventListener('click', e => {
      window.location = 'Settings.html';

    });*/


    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        
        showData();
      }else{
          window.location = 'Loginpage.html';
      }
    
    });
    
    
    

      
      function showData(){

        user = firebase.auth().currentUser;
        const username = user.email.replace('@', '').replace('.', '');

        firebase.database().ref('userprofiles/' + username).once('value').then(function(snapshot) {
          
          var showcategory = (snapshot.val() && snapshot.val().category) || 'No category';
          var showcue = (snapshot.val() && snapshot.val().cue) || 'No current cue / brand';
          var showkozoom = (snapshot.val() && snapshot.val().kozoom) || 'No player website';
          
          document.getElementById('category').innerHTML = showcategory;
          document.getElementById('cue').innerHTML = showcue;
          document.getElementById('kozoom').innerHTML = showkozoom;
        });
        firebase.database().ref('userfullnames/' + username).once('value').then(function(snapshot) {
            
          var showfullname = (snapshot.val() && snapshot.val().fullname) || '';
          document.getElementById('name').innerHTML = showfullname;
          
        });
      }
      
      







  


    






