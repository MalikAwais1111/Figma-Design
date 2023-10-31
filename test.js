let menu = document.getElementById("menu-items");
let menuIT = document.getElementById("menu-bar");
menuIT.onclick = function () {
    if(menu.className == "open"){
    menu.className="";
}
    else{
        menu.className = "open"
    }
}

let imtop = document.getElementById("TP");
// let imH = document.getElementById("TH");
// let imDT = document.getElementById("TDT");
// let imTD = document.getElementById("TD");

let imMP = document.getElementById("MP");
// let imMH = document.getElementById("MH");
// let imMDT = document.getElementById("MDT");
// let imMD = document.getElementById("MD");

let imagess = [imtop, imMP];
// let headings = [imH, imMH];
// let Datentext = [imDT, imMDT];
// let details = [imTD, imMD];
let count2 = 0;

function changecontent() {
    // if (count2 >= imagess.length) {
    //     count2 = 0;
    // }
    for (let i = 0; i < imagess.length; i++) {
        if (i === count2) {
            imagess[i].style.display = "flex";
            // headings[i].style.display = "flex";
            // Datentext[i].style.display = "flex";
            // details[i].style.display = "flex";
        } else {
            imagess[i].style.display = "flex";
            // headings[i].style.display = "none";
            // Datentext[i].style.display = "none";
            // details[i].style.display = "none";
        }
    }

    count2++;
}

setInterval(changecontent, 1000);
