
    
    $.ajax({
        url:'texts/welcome.txt',
        success: function (data){
            //parse your data here
            //you can split into lines using data.split('\n') 
            //an use regex functions to effectively parse 
            
            console.log(data)

            document.getElementById('pwelcomeText').innerHTML = data;
        }
    });

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        console.log('mobile')
        triggerMobile()
    }
    
    
    function triggerMobile(){

        document.getElementById('mobileLinks').style.display = 'block';

    }




