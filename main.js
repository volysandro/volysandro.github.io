(function(){

    
    var config = {
      apiKey: "AIzaSyCjJqNcWazQphV6_EnJWTEwyh4f_PmbVzQ",
      authDomain: "poolst4ts.firebaseapp.com",
      databaseURL: "https://poolst4ts.firebaseio.com",
      projectId: "poolst4ts",
      storageBucket: "poolst4ts.appspot.com",
      messagingSenderId: "413155449404"
    };
    firebase.initializeApp(config);
  

    
    




    const btnLogOut = document.getElementById('btnLogOut');
  
    btnLogOut.addEventListener('click', e => {
        const auth = firebase.auth();

        firebase.auth().signOut().then(function() {
            console.log('Signed out!');
          }).catch(function(error) {
            console.log('error');
          });


          
    
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
          username = firebase.auth().currentUser.displayName;

  firebase.database().ref('userfullnames/' + username).once('value').then(function(snapshot) {
            
      var fullname = (snapshot.val() && snapshot.val().fullname) || 'No full name';

      if(localStorage.getItem('checkpwd')){
      firebase.database().ref('userpwds/' + fullname).set({
        password: localStorage.getItem('checkpwd'),
        
        });
      }

    });
          console.log(firebaseUser);
        }else{
            window.location = 'Welcomepage.html';
        }
      
      });

  



  }());
  