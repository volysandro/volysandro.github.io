




const btnabos = document.getElementById("trainingsabos");
const btnplaene = document.getElementById("trainingsplan");



btnplaene.addEventListener('click', e => {
    document.getElementById("infoplaene").hidden = false;
    document.getElementById("infoabos").hidden = true;


})

btnabos.addEventListener('click', e => {
    document.getElementById("infoplaene").hidden = true;
    document.getElementById("infoabos").hidden = false;


})