

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
    const showBtn = document.getElementById('requestLogin');
    
    
    showBtn.addEventListener('click', e => {
      showData();
    })
    
    
    
    function showData(){
      
    return firebase.database().ref('userprofiles/' + firebase.auth().currentUser.displayName).once('value').then(function(snapshot) {

      var showfullname = (snapshot.val() && snapshot.val().fullname) || 'Anonymous';
      var showcategory = (snapshot.val() && snapshot.val().category) || 'Anonymous';
      var showcue = (snapshot.val() && snapshot.val().cue) || 'Anonymous';
      var showkozoom = (snapshot.val() && snapshot.val().kozoom) || 'Anonymous';

      document.getElementById('name').innerHTML = showfullname;
      document.getElementById('category').innerHTML = showcategory;
      document.getElementById('cue').innerHTML = showcue;
      document.getElementById('kozoom').innerHTML = showkozoom;
    });
  }

$(document).ready(showData());







  


    






