    var config = {
        apiKey: "AIzaSyCjJqNcWazQphV6_EnJWTEwyh4f_PmbVzQ",
        authDomain: "poolst4ts.firebaseapp.com",
        databaseURL: "https://poolst4ts.firebaseio.com",
        projectId: "poolst4ts",
        storageBucket: "poolst4ts.appspot.com",
        messagingSenderId: "413155449404"
    };
    firebase.initializeApp(config);
    var final = []

    firebase.database().ref("userprofiles/").once("value", function (snapshot) {

        var users = snapshotToArray(snapshot)


        users.forEach(element => {


            firebase.database().ref("users/" + element.key).once("value", function (snapshot) {
                var fullname = snapshot.val().fullname
                var birth = snapshot.val().birthyear
                var username = snapshot.val().username
                var category = element.category || "-"
                var cue = element.cue || "-"
                var media = element.kozoom || "-"
                var key = element.key

                var player = {
                    fullname: fullname,
                    birth: birth,
                    username: username,
                    category: category,
                    cue: cue,
                    media: media,
                    link: key
                }
                final.push(player)
            })

        });

        console.log(final)

        setTimeout(() => {
            getdemboyz(final)

        }, 3000);

    })

    function getdemboyz(playerarray) {

        console.log(playerarray)
        playerarray.forEach(element => {
            playerdiv = document.createElement("div")
            playerdiv.className = "playerdiv"
            document.getElementById("players").appendChild(playerdiv)

            const playerbtn = document.createElement("btn")
            playerbtn.className = "playerbtn btn white"
            playerbtn.id = element.link
            playerbtn.style.color = "black"
            playerbtn.innerHTML = element.fullname + " - " + element.username

            playerdiv.appendChild(playerbtn)

            playerbtn.addEventListener("click", E => {
                sessionStorage.setItem("link", element.link)
            })


        });

    }


    function snapshotToArray(snapshot) {
        var returnArr = [];

        snapshot.forEach(function (childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;

            returnArr.push(item);
        });

        return returnArr;
    };