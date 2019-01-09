


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
  const txtNewBirthyear = document.getElementById('txtNewBirthyear');
  const newFullname = document.getElementById('txtFullname');
  const newUsername = document.getElementById('txtUsername');

  btnSignUp.addEventListener('click', e => {
        const email = txtNewEmail.value;
        const pass = txtNewPassword.value;
        const auth = firebase.auth();
        const born = txtNewBirthyear.value;
        const fullname = newFullname.value;
        const username = newUsername.value;
        const userdatapath = email.replace('@', '').replace('.', '');

if (email != '' && pass != '' && born != '' && username != '' && fullname != ''){
  
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => {
    
    document.getElementById('notvalid').hidden = false;
    
    
  });
  
  firebase.database().ref('users/' + userdatapath).set({
    email: email,
    birthyear: born,
    fullname: fullname,
    username: username,
    password: pass
    });
}

else if (fullname == ''){
  console.log('fullname');
  document.getElementById('namemissing').hidden = false;
}

else if (username == ''){
  console.log('username');
  document.getElementById('unamemissing').hidden = false;
}

else if (email == ''){
  console.log('email');
  document.getElementById('emailmissing').hidden = false;
}

else if (pass == ''){
  console.log('password');
  document.getElementById('pwdmissing').hidden = false;
}

else if (born == ''){
  console.log('born');
  document.getElementById('bornmissing').hidden = false;
}


        


  });


  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      window.location = 'Mainpage.html';
      console.log(firebaseUser);
    }else{
      
    }
  
  });

    




}());


