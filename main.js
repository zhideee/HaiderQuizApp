
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
    },
    {
        "frage" : "Wie hieß des Lords Vater?",
        "A1" : "Rudolf",
        "A2" : "Ralf",
        "A3" : "Rudi*"
    }
]`

var currenQ = {}
currenQ.score = 0

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function resetColor(id) {
    document.getElementById(id).style.border = '10px solid rgb(207, 100, 143)';
    document.getElementById(id).style.backgroundColor = '#d487a6'
}

function next(){
    var Fragen = JSON.parse(data);
    var len = data.replace(/[^{]/g, "").length
    var random_num = randomIntFromInterval(0, len - 1)

    currenQ.num = random_num
    console.log(random_num)

    document.getElementById('frage').innerHTML = Fragen[random_num].frage;

    resetColor('Antwort1')
    resetColor('Antwort2')
    resetColor('Antwort3')

    document.getElementById('Antwort1').innerHTML = Fragen[random_num].A1.replace("*", "");
    document.getElementById('Antwort2').innerHTML = Fragen[random_num].A2.replace("*", "");
    document.getElementById('Antwort3').innerHTML = Fragen[random_num].A3.replace("*", "");
}

function checkanswer(number) {
    var Fragen = JSON.parse(data);
    
    if(number === 1) {
        antwort = Fragen[currenQ.num].A1

        if (antwort.includes("*")) {
            document.getElementById('Antwort1').style.backgroundColor = "green";
            document.getElementById('Antwort1').style.border = "10px solid rgb(60, 179, 13";
            Score = currenQ.score + 1
            currenQ.score = Score
            document.getElementById('score').innerHTML = Score;
    
        }
        else{
            document.getElementById('Antwort1').style.backgroundColor = "red"
            document.getElementById('Antwort1').style.border = "10px solid rgb(194, 67, 67)"
            var Score = currenQ.score = 0
            document.getElementById('score').innerHTML = Score
    
            if (Fragen[currenQ.num].A2.includes("*")){
                document.getElementById('Antwort2').style.backgroundColor = "green";
                document.getElementById('Antwort2').style.border = "10px solid rgb(60, 179, 13";
            }
            if (Fragen[currenQ.num].A3.includes("*")){
                document.getElementById('Antwort3').style.backgroundColor = "green";
                document.getElementById('Antwort3').style.border = "10px solid rgb(60, 179, 13";
            }
            
        }
    
    }

    if (number === 2) {
        antwort = Fragen[currenQ.num].A2

        if (antwort.includes("*")) {
            document.getElementById('Antwort2').style.backgroundColor = "green";
            document.getElementById('Antwort2').style.border = "10px solid rgb(60, 179, 13";
            Score = currenQ.score + 1
            currenQ.score = Score
            document.getElementById('score').innerHTML = Score;
    
        }
        else{
            document.getElementById('Antwort2').style.backgroundColor = "red"
            document.getElementById('Antwort2').style.border = "10px solid rgb(194, 67, 67)"
            var Score = currenQ.score = 0
            document.getElementById('score').innerHTML = Score
    
            if (Fragen[currenQ.num].A1.includes("*")){
                document.getElementById('Antwort1').style.backgroundColor = "green";
                document.getElementById('Antwort1').style.border = "10px solid rgb(60, 179, 13";
            }
            if (Fragen[currenQ.num].A3.includes("*")){
                document.getElementById('Antwort3').style.backgroundColor = "green";
                document.getElementById('Antwort3').style.border = "10px solid rgb(60, 179, 13";
            }

        }
    
    }

    if (number === 3) {
        antwort = Fragen[currenQ.num].A3

        if (antwort.includes("*")) {
            document.getElementById('Antwort3').style.backgroundColor = "green";
            document.getElementById('Antwort3').style.border = "10px solid rgb(60, 179, 13";
            Score = currenQ.score + 1
            currenQ.score = Score
            document.getElementById('score').innerHTML = Score;
    
        }
        else{
            document.getElementById('Antwort3').style.backgroundColor = "red"
            document.getElementById('Antwort3').style.border = "10px solid rgb(194, 67, 67)"
            var Score = currenQ.score = 0
            document.getElementById('score').innerHTML = Score
    
            if (Fragen[currenQ.num].A1.includes("*")){
                document.getElementById('Antwort1').style.backgroundColor = "green";
                document.getElementById('Antwort1').style.border = "10px solid rgb(60, 179, 13";
            }
            if (Fragen[currenQ.num].A2.includes("*")){
                document.getElementById('Antwort2').style.backgroundColor = "green";
                document.getElementById('Antwort2').style.border = "10px solid rgb(60, 179, 13";
            }

        }
    }



}

