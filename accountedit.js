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


    const accountSubmitBtn = document.getElementById('accountSubmitBtn');
    const fullname = document.getElementById('editFullName');
    const category = document.getElementById('editCategory');
    const cue = document.getElementById('editCue');
    const kozoom = document.getElementById('editKozoom');



    accountSubmitBtn.addEventListener('click', e => {
            const fullnamenew = fullname.value;
            const categorynew = category.value;
            const cuenew = cue.value;
            const kozoomnew = kozoom.value;

if(fullnamenew != 0 && categorynew != 0 && cuenew != 0 && kozoomnew != 0){

        user = firebase.auth().currentUser;
        const username = user.displayName;

        firebase.database().ref('userprofiles/' + username).set({
            fullname: fullnamenew,
            category: categorynew,
            cue: cuenew,
            kozoom: kozoomnew,
            });
        window.location = 'Accountpage.html';

            
    } 
    else{}   
  


    });











}()); 