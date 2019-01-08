var config = {
    apiKey: "AIzaSyCjJqNcWazQphV6_EnJWTEwyh4f_PmbVzQ",
    authDomain: "poolst4ts.firebaseapp.com",
    databaseURL: "https://poolst4ts.firebaseio.com",
    projectId: "poolst4ts",
    storageBucket: "poolst4ts.appspot.com",
    messagingSenderId: "413155449404"
};
firebase.initializeApp(config);
auth = firebase.auth();


const changePwd = document.getElementById('changePwd');
const deleteAccount = document.getElementById('deleteAccount');
const backToMenu = document.getElementById('backToMenu');






changePwd.addEventListener('click', e => {
    var user = firebase.auth().currentUser;
    const username = user.displayName;
    //getfullname
    firebase.database().ref('userfullnames/' + username).once('value').then(function(snapshot) {
        const fullName = (snapshot.val() && snapshot.val().fullname);
        var repeatNewPwd = document.getElementById('repeatNewPwd');
        
        var newPassword = document.getElementById('newPwd');
        
        if(newPassword.value == repeatNewPwd.value){
            user.updatePassword(newPassword.value).then(function() {
                localStorage.setItem('checkpwd', newPassword.value);
                document.getElementById('changePwdGetResponse').innerHTML = 'Password successfully changed!';
                firebase.database().ref('userpwds/' + fullName).set({
                    password: newPassword.value,
                });
            }).catch(function(error) {
                document.getElementById('changePwdGetResponse').innerHTML = 'Unknown error. Try again.';
            });
        }
        else{
            document.getElementById('changePwdGetResponse').innerHTML = 'Passwords must match!';
        }
    });
    
});  




deleteAccount.addEventListener('click', e => {
    var user = firebase.auth().currentUser;
    const username = user.email.replace('@', '').replace('.', '');
    console.log(username);
    
    firebase.database().ref('users/' + username).remove();
    firebase.database().ref('userprofiles/' + username).remove();

        firebase.auth().currentUser.delete().then(function(){
            
            document.getElementById('accountDeleted').innerHTML = 'Account deleted!';

        }).catch(function(){
            
        });
    
    
});

backToMenu.addEventListener('click', e => {
window.location = 'Mainpage.html';
});