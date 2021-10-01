
data = `[
    {
        "frage" : "Wie heißt der Wongl?",
        "A1" : "Rainer*",
        "A2" : "Reiner",
        "A3" : "Rudi"
    },
    {
        "frage" : "Welche Hausnummer hat der Oger?",
        "A1" : "1",
        "A2" : "8*",
        "A3" : "7"
    }
]`

var currenQ = {}

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function next(){
    var Fragen = JSON.parse(data);
    var len = data.replace(/[^{]/g, "").length
    var random_num = randomIntFromInterval(0, len - 1)

    currenQ.num = random_num
    console.log(random_num)

    document.getElementById('frage').innerHTML = Fragen[random_num].frage;
    document.getElementById('Antwort1').innerHTML = Fragen[random_num].A1.replace("*", "");
    document.getElementById('Antwort2').innerHTML = Fragen[random_num].A2.replace("*", "");
    document.getElementById('Antwort3').innerHTML = Fragen[random_num].A3.replace("*", "");
}

function checkanswer() {
    var Fragen = JSON.parse(data);
    
    console.log(currenQ.num)
    antwort = Fragen[currenQ.num].A1

    if (antwort.includes("*")) {
        document.getElementById('ergebnis').innerHTML = "Richtig!"
    }
    else{
        document.getElementById('ergebnis').innerHTML = "Falsch!"
    }
}

