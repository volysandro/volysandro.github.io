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
    const category = document.getElementById('editCategory');
    const cue = document.getElementById('editCue');
    const kozoom = document.getElementById('editKozoom');
    const backToAccount = document.getElementById('backToAccount');



    accountSubmitBtn.addEventListener('click', e => {
            editAccount();

            
  

    });

function editAccount(){
    const categorynew = category.value;
    const cuenew = cue.value;
    const kozoomnew = kozoom.value;
    var email = firebase.auth().currentUser.email;
    var emailNC = email.replace('@', '').replace('.', '').replace('.', '').replace('.', '').replace('.', '');
    let profileref = firebase.database().ref('userprofiles/' + emailNC);

    let categoryref = profileref.child('category');
    let cueref = profileref.child('cue');
    let kozoomref = profileref.child('kozoom');

    if (categorynew != 0){categoryref.set(categorynew);}
    if (cuenew != 0){cueref.set(cuenew);}
    if (kozoomnew != 0){kozoomref.set(kozoomnew);}

    document.getElementById('detailsChanged').innerHTML = 'Account Updated!'; 



/*if(categorynew != 0 && cuenew != 0 && kozoomnew != 0){

        user = firebase.auth().currentUser;
        const username = user.email.replace('@', '').replace('.', '');

        firebase.database().ref('userprofiles/' + username).set({
            category: categorynew,
            cue: cuenew,
            kozoom: kozoomnew,
            });

            
    } 
    else{

        document.getElementById('detailsChanged').innerHTML = 'Some fields are empty.';



    } */
}


backToAccount.addEventListener('click', e => {
    window.location = 'Accountpage.html';
    });






}()); 