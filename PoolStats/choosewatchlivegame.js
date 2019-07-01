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

  var alllivegames
  var activegames=[]

firebase.database().ref("activegames/").once("value", function(snapshot){
    console.log(snapshot.val())
    alllivegames = snapshotToArray(snapshot)
    alllivegames.forEach(element => {
        if (element.ended == false && element.watchingallowed == "on"){
            activegames.push(element)
        }
    });

    console.log(activegames)

    if (activegames.length == 0){
        document.getElementById("chooselivegame").innerHTML = "no games running"
    } else {
        activegames.forEach(element => {
            button = document.createElement("button")
            button.innerHTML = element.player1name + " vs. " + element.player2name + " (" + element.player1score + " - " + element.player2score + ")"
            button.className = "btn btn-action blue"
            document.getElementById("chooselivegame").appendChild(button)
            button.addEventListener("click", E => {
                sessionStorage.setItem("watchingID", element.id)
                window.location = "watchlivegame.html"
            })
        })
    }
})


function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};