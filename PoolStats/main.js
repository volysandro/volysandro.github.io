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

          console.log(firebaseUser);
          var email = firebase.auth().currentUser.email;
          var emailNC = email.replace('@', '').replace('.', '').replace('.', '').replace('.', '');
      


          let userref = firebase.database().ref('users/' + emailNC);
          let pwdref = userref.child('password');
          var password = window.sessionStorage.getItem('password');

          userref.once('value').then(function(snapshot) {
            var storedpassword = (snapshot.val() && snapshot.val().password) || 'empty';

            if (password != storedpassword){

              if (password){
              pwdref.set(password);
              window.sessionStorage.clear('password');
              }
            }
            else{
              window.sessionStorage.clear('password');

            }



          });

          
      

        }else{
            window.location = 'Welcomepage.html';
        }
      
      });

  



  }());
  