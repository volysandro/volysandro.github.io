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
    const backToMenu = document.getElementById('backToMenu');



    accountSubmitBtn.addEventListener('click', e => {
            editAccount();

            
  

    });

function editAccount(){
    const categorynew = category.value;
    const cuenew = cue.value;
    const kozoomnew = kozoom.value;

if(categorynew != 0 && cuenew != 0 && kozoomnew != 0){

        user = firebase.auth().currentUser;
        const username = user.displayName;

        firebase.database().ref('userprofiles/' + username).set({
            category: categorynew,
            cue: cuenew,
            kozoom: kozoomnew,
            });
            
            backToMenu.hidden = false;
            
    } 
    else{} 
}
backToMenu.addEventListener('click', e => {
window.location = 'Mainpage.html';
});








}()); 