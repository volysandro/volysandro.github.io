var config = {
    apiKey: "AIzaSyCjJqNcWazQphV6_EnJWTEwyh4f_PmbVzQ",
    authDomain: "poolst4ts.firebaseapp.com",
    databaseURL: "https://poolst4ts.firebaseio.com",
    projectId: "poolst4ts",
    storageBucket: "poolst4ts.appspot.com",
    messagingSenderId: "413155449404"
  };
  firebase.initializeApp(config);




  firebase.database().ref('userfullnames/').orderByChild('fullname').once('value').then(function(snapshot) {
    var x = 1;
    var listid = "fname1";
    var buttonid = "show1";
  for (var player of Object.values(snapshot.val())) {
     let i = x;
     document.getElementById(listid).innerHTML = player.fullname;
     document.getElementById(buttonid).hidden = false;
     document.getElementById(buttonid).addEventListener('click', function (e) {
        var listid = "fname" + i;
        sessionStorage.setItem("fullname", document.getElementById(listid).innerHTML);
        window.location = "showuser.html";
      });
      x = x + 1;
      var listid = "fname" + x;
      var buttonid = "show" + x;
  }
      


});
