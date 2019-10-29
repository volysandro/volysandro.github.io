

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
      

      const btnChoose8Ball = document.getElementById('choose8Ball');
      const btnChoose9Ball = document.getElementById('choose9Ball');
      const btnChoose10Ball = document.getElementById('choose10Ball');
      const btnChooseStraightPool = document.getElementById('chooseStraightPool');
      const btnChooseOnePocket = document.getElementById('chooseOnePocket');

      const txtRaceTo = document.getElementById('raceTo');
      








if (btnChoose8Ball){
    btnChoose8Ball.addEventListener('click', e => {
        var setRaceTo = txtRaceTo.value;
        sessionStorage.setItem('gametype', '8-Ball');
        sessionStorage.setItem('raceto', setRaceTo);
        window.location = 'Gamepageguest.html';
    });
}

if (btnChoose9Ball){
    btnChoose9Ball.addEventListener('click', e => {
        var setRaceTo = txtRaceTo.value;
        sessionStorage.setItem('gametype', '9-Ball');
        sessionStorage.setItem('raceto', setRaceTo);
        window.location = 'Gamepageguest.html';

    });
}

if (btnChoose10Ball){
    btnChoose10Ball.addEventListener('click', e => {
        var setRaceTo = txtRaceTo.value;
        sessionStorage.setItem('gametype', '10-Ball');
        sessionStorage.setItem('raceto', setRaceTo);
        window.location = 'Gamepageguest.html';

    });
}

if (btnChooseStraightPool){
    btnChooseStraightPool.addEventListener('click', e => {
        var setRaceTo = txtRaceTo.value;
        sessionStorage.setItem('gametype', 'Straight Pool');
        sessionStorage.setItem('raceto', setRaceTo);
        window.location = 'Gamepageguest.html';

    });
}

if (btnChooseOnePocket){
    btnChooseOnePocket.addEventListener('click', e => {
        var setRaceTo = txtRaceTo.value;
        sessionStorage.setItem('gametype', 'One Pocket');
        sessionStorage.setItem('raceto', setRaceTo);
        window.location = 'Gamepageguest.html';

    });
}


















