var config = {
    apiKey: "AIzaSyCjJqNcWazQphV6_EnJWTEwyh4f_PmbVzQ",
    authDomain: "poolst4ts.firebaseapp.com",
    databaseURL: "https://poolst4ts.firebaseio.com",
    projectId: "poolst4ts",
    storageBucket: "poolst4ts.appspot.com",
    messagingSenderId: "413155449404"
  };
  firebase.initializeApp(config);



  const fullName = sessionStorage.getItem('fullname');





  firebase.database().ref('userfullnames/').once('value').then(function(snapshot) {

    const data = snapshot.val();
    for (let key of Object.key(data)) {
        if (data[key].fullname === fullName){
            const username = key;
            console.log(username);

        }
    }

});