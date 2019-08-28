
var sports = []
sports.push
(
{
    name: 'Biken',
    count: 7
},
{
    name: 'Inlineskating Anfängerkurs',
    count: 7
},
{
    name: 'Tennis',
    count: 7
},
{
    name: 'Squash',
    count: 7
},
{
    name: 'Fechten',
    count: 7
},
{
    name: 'Streetworkout',
    count: 7
},
{
    name: 'Tischtennis',
    count: 7
},
{
    name: 'Stadt-OL',
    count: 7
},
{
    name: 'Beachvolleyball',
    count: 7
},
{
    name: 'Bouldern/Klettern',
    count: 7
},
{
    name: 'Bogenschiessen',
    count: 7
},
{
    name: 'Boule, kubb',
    count: 7
},
{
    name: 'Rugby',
    count: 7
},
{
    name: 'Schwingen',
    count: 7
},
{
    name: 'Baseball',
    count: 7
},
{
    name: 'Beachsoccer',
    count: 7
},
{
    name: 'Minigolf',
    count: 7
},
{
    name: 'HipHop',
    count: 7
},
{
    name: 'Disc Golf',
    count: 7
},
{
    name: 'Thaiboxen',
    count: 7
},
{
    name: 'Hornussen',
    count: 7
},
{
    name: 'Skaten',
    count: 7
},
{
    name: 'Freestyle Trampolin',
    count: 7
},
)


var room = 0
sports.forEach(element => {
    room = room + element.count
});
console.log("Sports: " + sports.length + ", Room: " + room)

var fs = require("fs")

studentsRaw = fs.readFileSync("students.json")
students = JSON.parse(studentsRaw)

studentsNew = []

index = 0

for (student in students){

    firstChoice = sports[Math.floor(Math.random()*sports.length)].name

    secondChoice = sports[Math.floor(Math.random()*sports.length)].name

    thirdChoice = sports[Math.floor(Math.random()*sports.length)].name

    while(firstChoice == secondChoice || secondChoice == thirdChoice || firstChoice == thirdChoice){

        firstChoice = sports[Math.floor(Math.random()*sports.length)].name

        secondChoice = sports[Math.floor(Math.random()*sports.length)].name
    
        thirdChoice = sports[Math.floor(Math.random()*sports.length)].name
    
    }

    studentsNew.push({
        name: student,
        first: firstChoice,
        second: secondChoice,
        third: thirdChoice,
        id: index

    })

    index++

}

fs.writeFileSync("studentsChoices.json", JSON.stringify(studentsNew, null, 2))

console.log("Students: " + studentsNew.length)


finalSelection = algo(studentsNew, sports)


function algo(studentsSet, sportsSet){

    array = []



    sportsSet.forEach(element => {
        var sport = element.name
        signedAsFirst = []
        signedAsSecond = []
        signedAsThird = []

        studentsSet.forEach(student => {
            if (student.first == sport){
                signedAsFirst.push({
                    name: student.name,
                    id: student.id
                })
            }
            if (student.second == sport){
                signedAsSecond.push({
                    name: student.name,
                    id: student.id
                })
            }
            if (student.third == sport){
                signedAsThird.push({
                    name: student.name,
                    id: student.id
                })
            }
        })


        console.log(sport + ": " + signedAsFirst.length + " times as first choice, " + signedAsSecond.length + " times as second choice, " + signedAsThird.length + " times as third choice, ")

        asport = []
        asport.push({
            name: element.name
        })
        
        for (x = 0; x <= element.count; x++){

            if (signedAsFirst.length > 0){
                asport.push(signedAsFirst[0])
                studentsSet.splice(studentsSet.findIndex(x => x.id == signedAsFirst[0].id), 1)
                signedAsFirst.shift()

                
            }
            else if (signedAsSecond.length > 0){
                asport.push(signedAsSecond[0])
                studentsSet.splice(studentsSet.findIndex(x => x.id == signedAsSecond[0].id), 1)
                signedAsSecond.shift()

            }
            else if (signedAsThird.length > 0){
                asport.push(signedAsThird[0])
                studentsSet.splice(studentsSet.findIndex(x => x.id == signedAsThird[0].id), 1)
                signedAsThird.shift()

            }



        }
        
        array.push(asport)
        
    });
    
    

    console.log(studentsSet)
    console.log(array)

    return array
}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}