$.ajax({
    url:'texts/news.txt',
    success: function (data){
        //parse your data here
        //you can split into lines using data.split('\n') 
        //an use regex functions to effectively parse 
        
        console.log(data)
        var rawnews = data.split('%')
        console.log(rawnews)

        var news = [

        ]
        i = 0
        
        
        rawnews.forEach(element => {
            news[i] = {
                title: element.split('$')[0],
                date: element.split('$')[1],
                text: element.split('$')[2]
            }
            i++
        });

        console.log(news)
        writenews(news)

    }
});

function writenews(news){
    
    news.forEach(element => {
        
        console.log(element)
        newsdiv = document.createElement('div')
        newsdiv.className = 'center card white hoverable'
        newsdiv.style.width = '80%'
        newsdiv.style.marginTop = '30px'
        document.body.appendChild(newsdiv)

        newstitle = document.createElement('h6')
        newstitle.id = 'newstitle'
        newstitle.innerHTML = element.title
        newsdiv.appendChild(newstitle)

        newsdate = document.createElement('h6')
        newsdate.id = 'newsdate'
        newsdate.innerHTML = element.date
        newsdiv.appendChild(newsdate)
        pnews = document.createElement('p')
        pnews.id = 'newsparagraph'
        newsdiv.appendChild(pnews)
        pnews.innerHTML = element.text
        
        
    });
}
