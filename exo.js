let pomme = "Elle est belle ma pomme !";

console.log(pomme.lastIndexOf('m'));
document.getElementById("index-pomme").innerHTML = pomme.indexOf("pomme")

for(let lettre = pomme.length - 1; lettre >= 0; lettre --){
    let lettreChoix = pomme[lettre];
    if(lettreChoix === "m"){
        document.getElementById("last-index-m").innerHTML = lettre;
        break;
    }
}

if(pomme.startsWith("Elle")){
    console.log(pomme + " commence par elle")
}

if(pomme.endsWith("!")){
    console.log(pomme + " termine par !")
}

document.getElementById("pomme").innerHTML =pomme.substring(pomme.indexOf("pomme"));

let tab = pomme.split("")
for(let lettre of tab){
    document.getElementById("one-line").innerHTML += lettre + "<br>"
}