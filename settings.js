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
        console.log(user);
    var email = firebase.auth().currentUser.email;
    var emailNC = email.replace('@', '').replace('.', '').replace('.', '').replace('.', '').replace('.', '');
    let userref = firebase.database().ref('users/' + emailNC);
    let pwdref = userref.child('password');
    console.log(pwdref);
    
    var newPassword = String(document.getElementById('newPwd').value);
    var repeatNewPwd = String(document.getElementById('repeatNewPwd').value);
    
    
    if(newPassword == repeatNewPwd){
        var finalPassword = newPassword;
        user.updatePassword(finalPassword).then(function() {
            document.getElementById('changePwdGetResponse').innerHTML = 'Password successfully changed!';
            
            //pwdref.setValue(finalPassword);
            pwdref.set(finalPassword);
            
            
                



            }).catch(function(error) {
                document.getElementById('changePwdGetResponse').innerHTML = 'Unknown error. Try again.';
            });
        }
        else{
            document.getElementById('changePwdGetResponse').innerHTML = 'Passwords must match!';
        }
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