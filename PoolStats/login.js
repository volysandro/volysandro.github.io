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
  
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnForgot = document.getElementById('forgotPwd');
    const requestResetEmail = document.getElementById('requestResetEmail');

btnForgot.addEventListener('click', e => {
  document.getElementById('emailSentOrNot').innerHTML = 'Enter your account-email in email input above.';
  document.getElementById("emailSentOrNot").style.color = "#2196f3"
  requestResetEmail.className = "btn btn-action blue";
  document.getElementById('btnLogin').className = "btn btn-action hide blue";
});


requestResetEmail.addEventListener('click', e => {
  var auth = firebase.auth();

auth.sendPasswordResetEmail(txtEmail.value).then(function() {
  document.getElementById('emailSentOrNot').innerHTML = 'Email sent.'
  document.getElementById("emailSentOrNot").style.color = "#2196f3"

  requestResetEmail.className = "btn btn-action hide blue";
  document.getElementById('btnLogin').className = "btn btn-action blue";


}).catch(function(error) {
  document.getElementById('emailSentOrNot').innerHTML = 'Error. Check email and try again.'
  document.getElementById("emailSentOrNot").style.color = "#2196f3"

});
});




    btnLogin.addEventListener('click', e => {


      


      
          const email = txtEmail.value;
          const pass = txtPassword.value;
          const auth = firebase.auth();
  
          const promise = auth.signInWithEmailAndPassword(email, pass);
          promise.catch(e => {console.log(e.message)
          
            document.getElementById('txtWrong').innerHTML = 'Wrong password or email';
          
          });




    });
  

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
          
          window.sessionStorage.setItem('password', txtPassword.value);
          window.location = 'Mainpage.html';
          console.log(firebaseUser);
        }else{
          
        }
      
      });

  }());
  