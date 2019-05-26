$.ajax({
    url: 'texts/news.txt',
    success: function (data) {
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

            if (element.split('$')[3]) {
                news[i] = {
                    title: element.split('$')[0],
                    date: element.split('$')[1],
                    text: element.split('$')[2],
                    image: element.split('$')[3]


                }
                i++

            } else {
                news[i] = {
                    title: element.split('$')[0],
                    date: element.split('$')[1],
                    text: element.split('$')[2]


                }
                i++

            }

        });

        console.log(news)
        writenews(news)

    }
});

function writenews(news) {

    news.forEach(element => {



        console.log(element)
        newsdiv = document.createElement('div')
        newsdiv.className = 'center card white hoverable'
        newsdiv.style.width = '80%'
        newsdiv.style.marginTop = '30px'
        newsdiv.style.borderRadius = '25px'
        document.body.insertBefore(newsdiv, document.body.childNodes[2]);
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

        if (element.image) {
            image = document.createElement('img')
            image.src = 'newsimages/' + element.image
            image.className = 'center'
            image.id = 'images'
            newsdiv.appendChild(image)
        }


    });
}