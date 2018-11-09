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
  requestResetEmail.hidden = false;
  document.getElementById('btnLogin').hidden = true;
});


requestResetEmail.addEventListener('click', e => {
  var auth = firebase.auth();

auth.sendPasswordResetEmail(txtEmail.value).then(function() {
  document.getElementById('emailSentOrNot').innerHTML = 'Email sent.'
  requestResetEmail.hidden = true;
  document.getElementById('btnLogin').hidden = false;


}).catch(function(error) {
  document.getElementById('emailSentOrNot').innerHTML = 'Error. Check email and try again.'
});
});


    btnLogin.addEventListener('click', e => {




      
          const email = txtEmail.value;
          const pass = txtPassword.value;
          const auth = firebase.auth();
          localStorage.setItem('checkpwd', pass);
  
          const promise = auth.signInWithEmailAndPassword(email, pass);
          promise.catch(e => console.log(e.message));




    });
  

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
          window.location = 'Mainpage.html';
          console.log(firebaseUser);
        }else{
          
        }
      
      });

  }());
  