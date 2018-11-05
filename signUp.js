


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
  

  const btnSignUp = document.getElementById('btnSignUp');
  const txtNewEmail = document.getElementById('txtNewEmail');
  const txtNewPassword = document.getElementById('txtNewPassword');
  const txtNewUsername = document.getElementById('txtNewUsername');
  const txtNewBirthyear = document.getElementById('txtNewBirthyear');


  btnSignUp.addEventListener('click', e => {
        const email = txtNewEmail.value;
        const pass = txtNewPassword.value;
        const auth = firebase.auth();
        const uname = txtNewUsername.value;
        const born = txtNewBirthyear.value;

        firebase.database().ref('users/' + uname).set({
          username: uname,
          email: email,
          password: pass,
          birthyear: born,
          });

        const promise = auth.createUserWithEmailAndPassword(email, pass);
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


