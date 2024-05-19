function buttoney1() {
    window.location = "sciencefacts.html"
}

function buttoney2() {
    window.location = "ancientindiascience.html"
}

function buttoney4() {
    window.location = "sciencegame.html"
}

function buttoney3() {
    window.location = "science_quiz.html"
}

function back() {
    window.location = "index.html"
}

function checkMERCURY() {
    weight1 = document.getElementById('mercuryEARTHWEIGHT').value;
    mercury_weight = (weight1 / 9.81) * 3.7
    mercury_weight = mercury_weight.toFixed(2);
    document.getElementById("mercuryAnswer").innerHTML = mercury_weight + "kg";
}

function checkVENUS() {
    weight2 = document.getElementById('venusEARTHWEIGHT').value;
    venus_weight = (weight2 / 9.81) * 8.87
    venus_weight = venus_weight.toFixed(2);
    document.getElementById("venusAnswer").innerHTML = venus_weight + "kg";
}

function checkMARS() {
    weight3 = document.getElementById('marsEARTHWEIGHT').value;
    mars_weight = (weight3 / 9.81) * 3.71
    mars_weight = mars_weight.toFixed(2);
    document.getElementById("marsAnswer").innerHTML = mars_weight + "kg";
}

function checkJUPITER() {
    weight4 = document.getElementById('jupiterEARTHWEIGHT').value;
    jupiter_weight = (weight4 / 9.81) * 24.79
    jupiter_weight = jupiter_weight.toFixed(2);
    document.getElementById("jupiterAnswer").innerHTML = jupiter_weight + "kg";
}

function checkSATURN() {
    weight5 = document.getElementById('saturnEARTHWEIGHT').value;
    saturn_weight = (weight5 / 9.81) * 10.44
    saturn_weight = saturn_weight.toFixed(2);
    document.getElementById("saturnAnswer").innerHTML = saturn_weight + "kg";
}

function checkURANUS() {
    weight6 = document.getElementById('uranusEARTHWEIGHT').value;
    uranus_weight = (weight6 / 9.81) * 8.87
    uranus_weight = uranus_weight.toFixed(2);
    document.getElementById("uranusAnswer").innerHTML = uranus_weight + "kg";
}

function checkNEPTUNE() {
    weight7 = document.getElementById('neptuneEARTHWEIGHT').value;
    neptune_weight = (weight7 / 9.81) * 11.15
    neptune_weight = neptune_weight.toFixed(2);
    document.getElementById("neptuneAnswer").innerHTML = neptune_weight + "kg";
}

var score = 0;

function load_quiz() {
    score = 0;
    document.getElementById("yay").style = "display: none;";
    document.getElementById("something").style = "display: block;";
}

function restart() {
    score = 0;
    score1 = 0;
    score2 = 0;
    document.getElementById("yay").style = "display: none;";
    document.getElementById("something").style = "display: block;";
    window.location = "science_quiz.html"
}

function result() {
    if(document.getElementById("correct1").checked) {
        score++;
    }
    if(document.getElementById("correct2").checked) {
        score++;
    }
    if(document.getElementById("correct3").checked) {
        score++;
    }
    if(document.getElementById("correct4").checked) {
        score++;
    }
    if(document.getElementById("correct5").checked) {
        score++;
    }
    if(document.getElementById("correct6").checked) {
        score++;
    }
    if(document.getElementById("correct7").checked) {
        score++;
    }
    
    document.getElementById("something").style = "display: none;";
    document.getElementById("yay").style = "display: block;";

    score1 = (score * 100) / 7;
    score2 = score1.toFixed(0);
    
    if(score == 0){
        document.getElementById("yayy").src = "animated-text-try-harder.gif";
    }
    if(score >= 1){
        document.getElementById("yayy").src = "congrats.gif";
    }
    if(score == 0 || score == 1){
        document.getElementById("answerTHIS").innerHTML = "You scored " + score2 + "%. <br>Try better next time!";
    }
    if(score == 2 || score == 3){
        document.getElementById("answerTHIS").innerHTML = "You scored " + score2 + "%. <br>Not bad!<br> But you can do better!";
    }
    if(score == 4 || score == 5){
        document.getElementById("answerTHIS").innerHTML = "You scored " + score2 + "%. <br>Congrats!<br> This is a good score!";
    }
    if(score == 6){
        document.getElementById("answerTHIS").innerHTML = "You scored " + score2 + "%. <br>Great!<br>One more to become champion...<br>You can do this!";
    }
    if(score == 7){
        document.getElementById("answerTHIS").innerHTML = "You scored " + score2 + "%. <br>Excellent! You got all correct!<br>You are a true champion.";
    }
}