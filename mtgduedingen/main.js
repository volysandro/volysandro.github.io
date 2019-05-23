
    
    $.ajax({
        url:'file.txt',
        success: function (data){
            //parse your data here
            //you can split into lines using data.split('\n') 
            //an use regex functions to effectively parse 
            
            console.log(data)
        }
    });




