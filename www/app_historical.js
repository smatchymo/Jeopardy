//$('.launchButton').hide();

function runGame() {
//prepareInterstitialAd();    
//initApp();
$('.warningBox').hide();
    $('.warningBoxTwo').hide();
$('.highScorePage').hide();
$('.launchButton').hide();
//var timerThree = 6;
document.getElementById('loadingMsg').innerHTML = "Loading questions... ";
//var xyz = setInterval(runButton, 1000);

screen.orientation.lock('landscape');
loadCat1();
var tableDates = ["tableDate1", "tableDate2", "tableDate3", "tableDate4", "tableDate5", "tableDate6", "tableDate7", "tableDate8", "tableDate9", "tableDate10"];
var tableScores = ["tableScore1", "tableScore2", "tableScore3", "tableScore4", "tableScore5", "tableScore6", "tableScore7", "tableScore8", "tableScore9", "tableScore10"];
var tableRights = ["tableRight1", "tableRight2", "tableRight3", "tableRight4", "tableRight5", "tableRight6", "tableRight7", "tableRight8", "tableRight9", "tableRight10"];
var tableWrongs = ["tableWrong1", "tableWrong2", "tableWrong3", "tableWrong4", "tableWrong5", "tableWrong6", "tableWrong7", "tableWrong8", "tableWrong9", "tableWrong10"];
var tableSkips = ["tableSkipped1", "tableSkipped2", "tableSkipped3", "tableSkipped4", "tableSkipped5", "tableSkipped6", "tableSkipped7", "tableSkipped8", "tableSkipped9", "tableSkipped10"];
var gameResult = {};
var highscoreList = [];
var storedHighscoreList = JSON.parse(localStorage.getItem("storedHighscoreList"));
var buttonshow = false;
var removeWordsTwo = '<i>|</i>|&';
var removeWordsThree = ' the | and | of | his | hers | their | a | an |<i>|</i>';
var myData;
var currentQuestion;
var intervalOne;
var intervalTwo;
var intervalThree;
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];;
var d = new Date();
var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear().toString().substr(-2);
var datePlayed = month + "/" + day + "/" + year;
var t1 = 9;
var t2 = 29;
var total = 0;
var all = 0;
var correct = 0;
var wrong = 0;
var skipped = 0;
var category1b;
var category2b;
var category3b;
var category4b;
var category5b;
var category6b;
var currentValue;
var int1;
var int2;
var int3;
var int4;
var int5;
var int6;
var finalClue;
var finalQuestionDate;
var finalAnswer;
var finalCategory;
var doubleWagerAmount;
var finalRound = false;
var finalRoundTwo = false;
var doubleWager = false;
var dailyDouble;
var as;
var bs;
var qs;
var qds,
    q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    q7,
    q8,
    q9,
    q10,
    q11,
    q12,
    q13,
    q14,
    q15,
    q16,
    q17,
    q18,
    q19,
    q20,
    q21,
    q22,
    q23,
    q24,
    q25,
    q26,
    q27,
    q28,
    q29,
    q30,
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    a8,
    a9,
    a10,
    a11,
    a12,
    a13,
    a14,
    a15,
    a16,
    a17,
    a18,
    a19,
    a20,
    a21,
    a22,
    a23,
    a24,
    a25,
    a26,
    a27,
    a28,
    a29,
    a30,
    b1,
    b2,
    b3,
    b4,
    b5,
    b6,
    b7,
    b8,
    b9,
    b10,
    b11,
    b12,
    b13,
    b14,
    b15,
    b16,
    b17,
    b18,
    b19,
    b20,
    b21,
    b22,
    b23,
    b24,
    b25,
    b26,
    b27,
    b28,
    b29,
    b30;

if (highscoreList === null) {
    highscoreList = [];
}
else {
    console.log("highscoreList " + highscoreList);
}

document.getElementById("question1").addEventListener("click", function () {
    console.log("answer is " + a1);
    console.log("as answer is " + as[0]);
    console.log("currentQuestion minus 1 is " + (currentQuestion - 1));
    currentQuestion = 1;
    currentValue = 100;
    all += 1;
    //setInterval(showInterstitialAd, 60000);
    document.getElementById('category').innerHTML = titleCase(category1b);
    document.getElementById('question1').innerHTML = "";
    $('.block1').show();
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 0) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q1;
    document.getElementById('showDate').innerHTML = "Question created on: " + qd1;
    intervalOne = setInterval(myTimerOne, 1000);

    }
});
document.getElementById("question2").addEventListener("click", function () {
    currentQuestion = 2;
    all += 1;
    document.getElementById('category').innerHTML = titleCase(category1b);
    document.getElementById('question2').innerHTML = "";
    $('.block2').show();
    currentQuestion = 2;
    currentValue = 200;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 1) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q2;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd2;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question3").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category1b);
    document.getElementById('question3').innerHTML = "";
    $('.block3').show();
    currentQuestion = 3;
    currentValue = 300;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 2) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q3;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd3;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question4").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category1b);
    document.getElementById('question4').innerHTML = "";
    $('.block4').show();
    currentQuestion = 4;
    currentValue = 400;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 3) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q4;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd4;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question5").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category1b);
    document.getElementById('question5').innerHTML = "";
    $('.block5').show();
    currentQuestion = 5;
    currentValue = 500;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 4) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q5;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd5;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question6").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category2b);
    document.getElementById('question6').innerHTML = "";
    $('.block6').show();
    currentQuestion = 6;
    currentValue = 100;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 5) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q6;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd6;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question7").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category2b);
    document.getElementById('question7').innerHTML = "";
    $('.block7').show();
    currentQuestion = 7;
    currentValue = 200;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 6) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q7;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd7;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question8").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category2b);
    document.getElementById('question8').innerHTML = "";
    $('.block8').show();
    currentQuestion = 8;
    currentValue = 300;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 7) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q8;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd8;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question9").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category2b);
    document.getElementById('question9').innerHTML = "";
    $('.block9').show();
    currentQuestion = 9;
    currentValue = 400;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 8) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q9;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd9;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question10").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category2b);
    document.getElementById('question10').innerHTML = "";
    $('.block10').show();
    currentQuestion = 10;
    currentValue = 500;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 9) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q10;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd10;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question11").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category3b);
    document.getElementById('question11').innerHTML = "";
    $('.block11').show();
    currentQuestion = 11;
    currentValue = 100;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 10) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q11;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd11;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question12").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category3b);
    document.getElementById('question12').innerHTML = "";
    $('.block12').show();
    currentQuestion = 12;
    currentValue = 200;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 11) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q12;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd12;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question13").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category3b);
    document.getElementById('question13').innerHTML = "";
    $('.block13').show();
    currentQuestion = 13;
    currentValue = 300;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 12) {
        $('.doublePageBody').show();

        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q13;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd13;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question14").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category3b);
    document.getElementById('question14').innerHTML = "";
    $('.block14').show();
    currentQuestion = 14;
    currentValue = 400;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 13) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q14;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd14;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question15").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category3b);
    document.getElementById('question15').innerHTML = "";
    $('.block15').show();
    currentQuestion = 15;
    currentValue = 500;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 14) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q15;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd15;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question16").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category4b);
    document.getElementById('question16').innerHTML = "";
    $('.block16').show();
    currentQuestion = 16;
    currentValue = 100;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 15) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q16;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd16;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question17").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category4b);
    document.getElementById('question17').innerHTML = "";
    $('.block17').show();
    currentQuestion = 17;
    currentValue = 200;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 16) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q17;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd17;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question18").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category4b);
    document.getElementById('question18').innerHTML = "";
    $('.block18').show();
    currentQuestion = 18;
    currentValue = 300;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 17) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q18;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd18;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question19").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category4b);
    document.getElementById('question19').innerHTML = "";
    $('.block19').show();
    currentQuestion = 19;
    currentValue = 400;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 18) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q19;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd19;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question20").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category4b);
    document.getElementById('question20').innerHTML = "";
    $('.block20').show();
    currentQuestion = 20;
    currentValue = 500;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 19) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q20;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd20;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question21").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category5b);
    document.getElementById('question21').innerHTML = "";
    $('.block21').show();
    currentQuestion = 21;
    currentValue = 100;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 20) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q21;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd21;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question22").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category5b);
    document.getElementById('question22').innerHTML = "";
    $('.block22').show();
    currentQuestion = 22;
    currentValue = 200;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 21) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q22;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd22;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question23").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category5b);
    document.getElementById('question23').innerHTML = "";
    $('.block23').show();
    currentQuestion = 23;
    currentValue = 300;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 22) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q23;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd23;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question24").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category5b);
    document.getElementById('question24').innerHTML = "";
    $('.block24').show();
    currentQuestion = 24;
    currentValue = 400;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 23) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q24;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd24;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question25").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category5b);
    document.getElementById('question25').innerHTML = "";
    $('.block25').show();
    currentQuestion = 25;
    currentValue = 500;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 24) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q25;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd25;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question26").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category6b);
    document.getElementById('question26').innerHTML = "";
    $('.block26').show();
    currentQuestion = 26;
    currentValue = 100;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 25) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q26;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd26;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question27").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category6b);
    document.getElementById('question27').innerHTML = "";
    $('.block27').show();
    currentQuestion = 27;
    currentValue = 200;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 26) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q27;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd27;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question28").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category6b);
    document.getElementById('question28').innerHTML = "";
    $('.block28').show();
    currentQuestion = 28;
    currentValue = 300;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 27) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q28;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd28;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question29").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category6b);
    document.getElementById('question29').innerHTML = "";
    $('.block29').show();
    currentQuestion = 29;
    currentValue = 400;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 28) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q29;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd29;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});
document.getElementById("question30").addEventListener("click", function () {
    document.getElementById('category').innerHTML = titleCase(category6b);
    document.getElementById('question30').innerHTML = "";
    $('.block30').show();
    currentQuestion = 30;
    currentValue = 500;
    all += 1;
    document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
    if (dailyDouble === 29) {
        $('.doublePageBody').show();
        runDailyDouble();
    }
    else {
    $('.questionPage').show();
    $('.blockContainer').hide();
    document.getElementById('showQuestion').innerHTML = q30;
        document.getElementById('showDate').innerHTML = "Question created on: " + qd30;
    intervalOne = setInterval(myTimerOne, 1000);
    }
});

document.getElementById('answerButton').addEventListener("click", runAnswer);
document.getElementById('passButton').addEventListener("click", runTimesUp);
document.getElementById('answerSubmit').addEventListener("click", checkAnswer);
//document.getElementById('launchClick').addEventListener("click", runLaunch);
document.getElementById('clearButton').addEventListener("click", runWarningTwo);
document.getElementById('closeClick').addEventListener("click", runWarning);
document.getElementById('restartButton').addEventListener("click", runPreGame);
document.getElementById('yesClick').addEventListener("click", closeGame);
document.getElementById('noClick').addEventListener("click", noChange);
document.getElementById('yesClickTwo').addEventListener("click", clearScores);
document.getElementById('noClickTwo').addEventListener("click", noChange);    


document.getElementById('score').innerHTML = "$" + total;
document.getElementById('totalQ').innerHTML = "Total: " + all +"/30";
document.getElementById('correctQ').innerHTML = "Correct: " + correct;
document.getElementById('wrongQ').innerHTML = "Wrong: " + wrong;
document.getElementById('skippedQ').innerHTML = "Skipped: " + skipped;

//var i;
//var j;
//var k;
//var l;
//var m;
//var n;

var answersOne = ["answer1", "answer2", "answer3", "answer4", "answer5"];
var answersTwo = ["answer1", "answer2", "answer3", "answer4", "answer5"];
var answersThree = ["answer1", "answer2", "answer3", "answer4", "answer5"];
var answersFour = ["answer1", "answer2", "answer3", "answer4", "answer5"];
var answersFive = ["answer1", "answer2", "answer3", "answer4", "answer5"];
var answersSix = ["answer1", "answer2", "answer3", "answer4", "answer5"];
var questionsOne = ["question1", "question2", "question3", "question4", "question5"];
var questionsTwo = ["question1", "question2", "question3", "question4", "question5"];
var questionsThree = ["question1", "question2", "question3", "question4", "question5"];
var questionsFour = ["question1", "question2", "question3", "question4", "question5"];
var questionsFive = ["question1", "question2", "question3", "question4", "question5"];
var questionsSix = ["question1", "question2", "question3", "question4", "question5"];
var questionDatesOne = ["question1", "question2", "question3", "question4", "question5"];
var questionDatesTwo = ["question1", "question2", "question3", "question4", "question5"];
var questionDatesThree = ["question1", "question2", "question3", "question4", "question5"];
var questionDatesFour = ["question1", "question2", "question3", "question4", "question5"];
var questionDatesFive = ["question1", "question2", "question3", "question4", "question5"];
var questionDatesSix = ["question1", "question2", "question3", "question4", "question5"];

var isPendingInterstitial = false;
var isAutoshowInterstitial = false;

function prepareInterstitialAd() {
    if (!isPendingInterstitial) {
        admob.requestInterstitialAd({
            autoShowInterstitial: isAutoshowInterstitial
        });
    }
}

function onAdLoadedEvent(e) {
    if (e.adType === admob.AD_TYPE.INTERSTITIAL && !isAutoshowInterstitial) {
        isPendingInterstitial = true;
    }
}

function onDeviceReady() {
    document.removeEventListener('deviceready', onDeviceReady, false);

    admob.setOptions({
        publisherId:          "pub-4513123627041392",
        interstitialAdId:     "ca-app-pub-4513123627041392/1522682869",
    });   
    
    document.addEventListener(admob.events.onAdLoaded, onAdLoadedEvent);
    prepareInterstitialAd();
}

document.addEventListener("deviceready", onDeviceReady, false);

function showInterstitialAd() {
    if (isPendingInterstitial) {
        admob.showInterstitialAd(function () {
            alert("honestly, what the fuck?");
                isPendingInterstitial = false;
                isAutoshowInterstitial = false;
                prepareInterstitialAd();
        });
    } 
    else {
        isAutoshowInterstitial = true;
        admob.requestInterstitialAd({
        autoShowInterstitial: isAutoshowInterstitial
        });
    }
}
   
/* function runButton() {
    timerThree--;
    document.getElementById('loadingMsg').innerHTML = "Loading questions... " + timerThree;
    if (timerThree <= 0) {
        clearInterval(xyz);
        document.getElementById('loadingMsg').innerHTML = "Ready to start!"
        $('.launchButton').show();
    }
} */
    
function runPreGame() {
    window.location.reload();
}    
    
function closeGame() {
    if (navigator.app) {
                   navigator.app.exitApp();
                }
                else if (navigator.device) {
                    navigator.device.exitApp();
                }
}
    
function noChange() {
    $('.warningBox').hide();
    $('.warningBoxTwo').hide();
}    

function runWarning() {
    $('.warningBox').show();
}    
    
function runWarningTwo() {
    $('.warningBoxTwo').show();
}    
    
function myTimerOne() {
    if (t1 <= 0) {
        runTimesUp();
	clearInterval(intervalOne);
        document.getElementById('timer').innerHTML = 0;
    }
    document.getElementById('timer').innerHTML = t1;
    t1--;
}

function myTimerTwo() {
    if (t2 <= 0) {
        runTimesUpTwo();
	clearInterval(intervalTwo);
        document.getElementById('timer').innerHTML = 0;
    }
    document.getElementById('timer').innerHTML = t2;
    t2--;
}

function runLaunch() {
    $('.welcomeLaunch').hide();
}

function runDailyDouble() {
    $('.blockContainer').hide();
    doubleWager = true;
    setTimeout(runQuestion, 3000);
}

function runFinalRound() {
    document.getElementById('answerText').value = '';
    document.getElementById('showQuestion').innerHTML = "Final" + "<br />" + "Round";
    document.getElementById('showDate').innerHTML = "";
    setTimeout(runQuestion, 3000);
    t2 = 29;
}
    

function runQuestion() {
    showInterstitialAd();
    $('.clickBlock').hide();
    $('.doublePageBody').hide();
    $('.questionPage').show();
    $('.answerInputs').show();
    if (finalRound) {
	document.getElementById('category').innerHTML = titleCase(finalCategory);
    }
    if (total <= 500) {
        
        document.getElementById('showQuestion').innerHTML = "Place your wager between $5 and $500.";
    }
    else {
        document.getElementById('showQuestion').innerHTML = "Place your wager between $5 and " + total;
    }
    document.getElementById('timer').innerHTML = '';
}

function runTimesUp() {
console.log("times up #1");
    $('.clickBlock').show();
    clearInterval(intervalOne);
    document.getElementById('showQuestion').innerHTML = "Time's Up!" + "<br />" + "Correct answer: " + bs[currentQuestion-1];
    document.getElementById('showDate').innerHTML = ""
    skipped += 1;
    document.getElementById('skippedQ').innerHTML = "Skipped: " + skipped;
    setTimeout(backToCategories, 5000);
    document.getElementById('timer').innerHTML = 0;
}

function runTimesUpTwo() {
console.log("times up #2");
    $('.clickBlock').show();
    document.getElementById('showQuestion').innerHTML = "Time's Up!" + "<br />" + "Correct answer: " + bs[currentQuestion-1];
    document.getElementById('showQuestion').innerHTML = ""
    wrong += 1;
    document.getElementById('wrongQ').innerHTML = "Wrong: " + wrong;
    document.getElementById('timer').innerHTML = 0;
    setTimeout(backToCategories, 5000);
    total -= currentValue;
    document.getElementById('score').innerHTML = "$" + total;
}

function clearScores() {
    $('.warningBoxTwo').hide();
    localStorage.clear();
    for (var i=0; i<10; i++) {
    document.getElementById(tableDates[i]).innerHTML = "";
    }
    for (var i=0; i<10; i++) {
    document.getElementById(tableScores[i]).innerHTML = "";
    }
    
    for (var i=0; i<10; i++) {
    document.getElementById(tableRights[i]).innerHTML = "";
    }
    
    for (var i=0; i<10; i++) {
    document.getElementById(tableWrongs[i]).innerHTML = "";
    }
    
    for (var i=0; i<10; i++) {
    document.getElementById(tableSkips[i]).innerHTML = "";
    }
}

function runAnswer() {
    $('.answerInputs').show();
    clearInterval(intervalOne);
    t1 = 9;
    document.getElementById('timer').innerHTML = 30;
    intervalTwo = setInterval(myTimerTwo, 1000);
}

function runPass() {
    $('.clickBlock').show();
    clearInterval(intervalOne);
    t1 = 9;
    skipped += 1;
    document.getElementById('skippedQ').innerHTML = "Skipped: " + skipped;
}

function checkAnswer() {
    $('.clickBlock').show();
    var preUserAnswer = document.getElementById('answerText').value.toLowerCase();
    //console.log("preUserAnswer " + preUserAnswer);
    var preAnswer = as[currentQuestion-1].toLowerCase();
    //console.log("preAnswer " + preAnswer);
    var userAnswer = removeWords(preUserAnswer);
    //console.log("userAnswer " + userAnswer);
    var answer = removeWords(preAnswer);
    //console.log("answer " + answer);
    var answerUpdate = answer.toLowerCase();
    var userAnswerUpdate = userAnswer.toLowerCase();
    answerUpdate = answerUpdate.trim();
    userAnswerUpdate = userAnswerUpdate.trim();
    //console.log("userAnswer update " + userAnswerUpdate);
    //console.log("answer update " + answerUpdate);
    var answerSplit = answerUpdate.split(" ");
    answerSplit = cleanArray(answerSplit);
    //console.log("answer split " + answerSplit);
    var answerLength = answerSplit.length;
    //console.log("answerLength " + answerLength);
    var userAnswerSplit = userAnswerUpdate.split(" ");
    userAnswerSplit = cleanArray(userAnswerSplit);
    //console.log("user answer split " + userAnswerSplit);
    var userAnswerLength = userAnswerSplit.length;
    //console.log("user answer length " + userAnswerLength);
    var commonAnswers;
    
    if (answerLength > 2) {
        console.log("Hey we made it here")
        commonAnswers = intersect_arrays(answerSplit, userAnswerSplit)
        console.log("commonAnswers " + commonAnswers);
    }
    
    function intersect_arrays(a, b) {
        var sorted_a = a.concat().sort();
        var sorted_b = b.concat().sort();
        var common = [];
        var a_i = 0;
        var b_i = 0;

        while (a_i < a.length
               && b_i < b.length)
        {
            if (sorted_a[a_i] === sorted_b[b_i]) {
                common.push(sorted_a[a_i]);
                a_i++;
                b_i++;
            }
            else if(sorted_a[a_i] < sorted_b[b_i]) {
                a_i++;
            }
            else {
                b_i++;
            }
        }
        return common;
    }
    
    userAnswerUpdate = specialStringUser(userAnswerUpdate);
    //console.log("userAnswer update#2 " + userAnswerUpdate);
    answerUpdate = specialString(answerUpdate);
    //console.log("answer update " + answerUpdate);
    //console.log("user answer post function " + userAnswer);
    clearInterval(intervalTwo);
    t2 = 29;
    var preFinalAnswer = removeWords(finalAnswer);
    var finalAnswerUpdate = preFinalAnswer.toLowerCase();
    var finalAnswerSplit = finalAnswerUpdate.split(" ");
    finalAnswerSplit = cleanArray(finalAnswerSplit);
    //console.log("answer split " + answerSplit);
    var finalAnswerLength = finalAnswerSplit.length;
    finalAnswerUpdate = specialString(finalAnswerUpdate);
    if (isNaN(userAnswer)) {
	userAnswerUpdate = userAnswerUpdate.toLowerCase();
//console.log("It's not a number so making it lowercase");
    }
    else {
        //console.log("useranswerUpdate = userAnswer we made it here")
        userAnswerUpdate = userAnswerUpdate;
    }
    if (doubleWager || finalRound) {
            //var fakeUserAnswer = document.getElementById('answerText').value;
	        userAnswer = parseInt(document.getElementById('answerText').value);
            document.getElementById('timer').innerHTML = 30;
//console.log("double wager is running");
            doubleWagerAmount = userAnswer;
	        if (isNaN(doubleWagerAmount)) {
//console.log("double wager is running but not a number");
	               document.getElementById('showQuestion').innerHTML = "Please use only numbers.  No special characters.";
                    document.getElementById('answerText').value = '';
	               runDailyDouble();
	               $('.clickBlock').hide();
            }
	        else if (doubleWagerAmount > total) {
//console.log("double wager is running but greater than total");
	               if (doubleWagerAmount < 5) {
//console.log("double wager is running but greater than total and 500");
		                  document.getElementById('showQuestion').innerHTML = "Please wager more than $5.";
                          document.getElementById('answerText').value = '';
		                  runDailyDouble();
                          $('.clickBlock').hide();
	               }
	               else if (doubleWagerAmount <= 500) {
		                  doubleWager = false;
		                  currentValue = doubleWagerAmount;
		                  document.getElementById('answerText').value = '';
		                  if (finalRound) {
	                            finalRound = false;
//	console.log("We hit the final clue fine");
		                        document.getElementById('showQuestion').innerHTML = finalClue;
                                document.getElementById('showDate').innerHTML = "Question created on: " + finalQuestionDate;
    		                    intervalTwo = setInterval(myTimerTwo, 1000);
                                $('.clickBlock').hide();
		                  }
		                  else {
//	console.log("This is the daily double");
    		                      document.getElementById('showQuestion').innerHTML = qs[currentQuestion - 1];
                                  document.getElementById('showDate').innerHTML = "Question created on: " + qds[currentQuestion - 1];
    		                      intervalTwo = setInterval(myTimerTwo, 1000);
                                  $('.clickBlock').hide();
		                  }
	               }
	               else {
		        //userAnswerUpdate = userAnswer.toLowerCase();
		                  if (total < 500) {
		                          document.getElementById('showQuestion').innerHTML = "Please wager $500 or less.";
                                  document.getElementById('answerText').value = '';
		                          runDailyDouble();
                                  $('.clickBlock').hide();
		                  }
		                  else {
		                          document.getElementById('showQuestion').innerHTML = "Please wager $" + total + " or less.";
                                  document.getElementById('answerText').value = '';
		                          runDailyDouble();
                                  $('.clickBlock').hide();
		                  }

	               }
            }
	        else if (doubleWagerAmount < 5) {
	               document.getElementById('showQuestion').innerHTML = "Please wager more than $5.";
	               document.getElementById('answerText').value = '';
	               runDailyDouble();
	               $('.clickBlock').hide();
	        }
	        else {
	        doubleWager = false;
	        currentValue = doubleWagerAmount;
	               if (finalRound) {
		                  finalRound = false;
	                      //console.log("The final clue should be running fine.");
	                      document.getElementById('showQuestion').innerHTML = finalClue;
                          document.getElementById('showDate').innerHTML = "Question created on: " + finalQuestionDate;
    	                  intervalTwo = setInterval(myTimerTwo, 1000);
		                  document.getElementById('answerText').value = '';
                          $('.clickBlock').hide();
	                }
	                else {
                            //prepareInterstitialAd();
       	                    document.getElementById('showQuestion').innerHTML = qs[currentQuestion - 1];
                            document.getElementById('showDate').innerHTML = "Question created on: " + qds[currentQuestion - 1];
	                        document.getElementById('answerText').value = '';
    	                    intervalTwo = setInterval(myTimerTwo, 1000);
	                        $('.clickBlock').hide();
	                }
	         }    
    }
    else {
            if (finalRoundTwo) {
                    if (finalAnswerLength > 2) {
                            console.log("Hey we made it here")
                            commonAnswers = intersect_arrays(finalAnswerSplit, userAnswerSplit)
                            console.log("commonAnswers " + commonAnswers);
                    }
                    if (commonAnswers == null) {
	                       if (userAnswerUpdate.includes(finalAnswerUpdate)) {
                                    correct += 1;
	                                total += currentValue;
                                    document.getElementById('category').innerHTML = "Correct!";
	                                document.getElementById('showQuestion').innerHTML = finalAnswer;
                                    document.getElementById('showDate').innerHTML = "";
       	                            document.getElementById('score').innerHTML = "$" + total;
	                                document.getElementById('correctQ').innerHTML = "Correct: " + correct;
                                    console.log("useranswerUpdate " + userAnswerUpdate);
                                    console.log("finalanswerUpdate " + finalAnswerUpdate);
                                    setTimeout(backToCategories, 5000);
	                       }
	                       else {
                                    document.getElementById('category').innerHTML = "Incorrect!";
	                                document.getElementById('showQuestion').innerHTML = "Correct answer: " + finalAnswer + "<br />" + "Your answer: " + userAnswer;
                                    document.getElementById('showDate').innerHTML = "";
	                                wrong += 1;
	                                total -= currentValue;
                                    setTimeout(backToCategories, 5000);
	                                document.getElementById('score').innerHTML = "$" + total;
	                                document.getElementById('wrongQ').innerHTML = "Wrong: " + wrong;
                                    console.log("useranswerUpdate " + userAnswerUpdate);
                                    console.log("finalanswerUpdate " + finalAnswerUpdate);
	                       }
                    }
                    else {
                            if (userAnswerUpdate.length === finalAnswerUpdate.length) {
                                    if (userAnswerUpdate.includes(finalAnswerUpdate)) {
                                            correct += 1;
	                                        total += currentValue;
                                            document.getElementById('category').innerHTML = "Correct!";
	                                        document.getElementById('showQuestion').innerHTML = finalAnswer;
                                            document.getElementById('showDate').innerHTML = "";
       	                                    document.getElementById('score').innerHTML = "$" + total;
	                                        document.getElementById('correctQ').innerHTML = "Correct: " + correct;
                                            setTimeout(backToCategories, 5000);
                                            console.log("useranswerUpdate " + userAnswerUpdate);
                                            console.log("finalanswerUpdate " + finalAnswerUpdate);
                                    }
                                    else {
                                            document.getElementById('category').innerHTML = "Incorrect!";
	                                        document.getElementById('showQuestion').innerHTML = "Correct answer: " + finalAnswer + "<br />" + "Your answer: " + userAnswer;
                                            document.getElementById('showDate').innerHTML = "";
	                                        wrong += 1;
                                            total -= currentValue;
                                            setTimeout(backToCategories, 5000);
	                                        document.getElementById('score').innerHTML = "$" + total;
                                            document.getElementById('wrongQ').innerHTML = "Wrong: " + wrong;
                                            console.log("useranswerUpdate " + userAnswerUpdate);
                                            console.log("finalanswerUpdate " + finalAnswerUpdate);
                                    }
                            }
                            else {
                                    if (userAnswerUpdate.includes(finalAnswerUpdate) || (finalAnswerLength - 1 === commonAnswers.length)) {
                                            correct += 1;
	                                        total += currentValue;
                                            document.getElementById('category').innerHTML = "Correct!";
	                                        document.getElementById('showQuestion').innerHTML = finalAnswer;
                                            document.getElementById('showDate').innerHTML = "";
       	                                    document.getElementById('score').innerHTML = "$" + total;
	                                        document.getElementById('correctQ').innerHTML = "Correct: " + correct;
                                            setTimeout(backToCategories, 5000);
                                            console.log("useranswerUpdate " + userAnswerUpdate);
                                            console.log("finalanswerUpdate " + finalAnswerUpdate);
	                                }
	                                else {
                                            document.getElementById('category').innerHTML = "Incorrect!";
	                                        document.getElementById('showQuestion').innerHTML = "Correct answer: " + finalAnswer + "<br />" + "Your answer: " + userAnswer;
                                            document.getElementById('showDate').innerHTML = "";
	                                        wrong += 1;
	                                        total -= currentValue;
                                            setTimeout(backToCategories, 5000);
	                                        document.getElementById('score').innerHTML = "$" + total;
	                                        document.getElementById('wrongQ').innerHTML = "Wrong: " + wrong;
                                            console.log("useranswerUpdate " + userAnswerUpdate);
                                            console.log("finalanswerUpdate " + finalAnswerUpdate);
	                               } 
                            }
	               }
            }
	        else {
                //            console.log("hey userAnswerUpdate " + userAnswerUpdate);
                //console.log("hey answerUpdate " + answerUpdate);
                //console.log("commonAnswers " + commonAnswers);
                    if (commonAnswers == null) {
                            if (userAnswerUpdate.includes(answerUpdate)) {
                                    correct += 1;
	                                total += currentValue;
                                    document.getElementById('category').innerHTML = "Correct!";
	                                document.getElementById('showQuestion').innerHTML = bs[currentQuestion - 1];
                                    document.getElementById('showDate').innerHTML = "";
       	                            document.getElementById('score').innerHTML = "$" + total;
	                                document.getElementById('correctQ').innerHTML = "Correct: " + correct;
                                    console.log("userAnswerUpdate " + userAnswerUpdate);
                                    console.log("answerUpdate " + answerUpdate);
                                    setTimeout(backToCategories, 5000);
                            }
                            else {
             
                                    document.getElementById('category').innerHTML = "Incorrect!";
	                                document.getElementById('showQuestion').innerHTML = "Correct answer: " + bs[currentQuestion - 1] + "<br />" + "Your answer: " + preUserAnswer;
                                    document.getElementById('showDate').innerHTML = "";
	                                wrong += 1;
	                                total -= currentValue;
                                    setTimeout(backToCategories, 5000);
	                                document.getElementById('score').innerHTML = "$" + total;
	                                document.getElementById('wrongQ').innerHTML = "Wrong: " + wrong;
                            }
                
                    }
                    else {
                            console.log("userAnswerUpdate again " + userAnswerUpdate);
                            console.log("answerUpdate again " + answerUpdate);
                            console.log("commonAnswers " + commonAnswers);
                            if (userAnswerUpdate.length === answerUpdate.length) {
                                    if (userAnswerUpdate.includes(answerUpdate)) {
                                            correct += 1;
	                                        total += currentValue;
                                            document.getElementById('category').innerHTML = "Correct!";
	                                        document.getElementById('showQuestion').innerHTML = bs[currentQuestion - 1];
                                            document.getElementById('showDate').innerHTML = "";
       	                                    document.getElementById('score').innerHTML = "$" + total;
	                                        document.getElementById('correctQ').innerHTML = "Correct: " + correct;
                                            setTimeout(backToCategories, 5000);
                                            console.log("useranswerUpdate " + userAnswerUpdate);
                                            console.log("answerUpdate " + answerUpdate);
                                    }
                                    else {
                                            document.getElementById('category').innerHTML = "Incorrect!";
	                                        document.getElementById('showQuestion').innerHTML = "Correct answer: " + bs[currentQuestion - 1] + "<br />" + "Your answer: " + userAnswer;
                                            document.getElementById('showDate').innerHTML = "";
	                                        wrong += 1;
                                            total -= currentValue;
                                            setTimeout(backToCategories, 5000);
	                                        document.getElementById('score').innerHTML = "$" + total;
                                            document.getElementById('wrongQ').innerHTML = "Wrong: " + wrong;
                                            console.log("useranswerUpdate " + userAnswerUpdate);
                                            console.log("answerUpdate " + answerUpdate);
                                    }
                            }
                            else {
                                    if (userAnswerUpdate.includes(answerUpdate) || (answerLength - 1 === commonAnswers.length)) {
                                            correct += 1;
	                                        total += currentValue;
                                            document.getElementById('category').innerHTML = "Correct!";
	                                        document.getElementById('showQuestion').innerHTML = bs[currentQuestion - 1];
                                            document.getElementById('showDate').innerHTML = "";
       	                                    document.getElementById('score').innerHTML = "$" + total;
	                                        document.getElementById('correctQ').innerHTML = "Correct: " + correct;
                                            setTimeout(backToCategories, 5000);
                                            console.log("useranswerUpdate " + userAnswerUpdate);
                                            console.log("answerUpdate " + answerUpdate);
	                                }
	                                else {
                                            document.getElementById('category').innerHTML = "Incorrect!";
	                                        document.getElementById('showQuestion').innerHTML = "Correct answer: " + bs[currentQuestion - 1] + "<br />" + "Your answer: " + userAnswer;
                                            document.getElementById('showDate').innerHTML = "";
	                                        wrong += 1;
	                                        total -= currentValue;
                                            setTimeout(backToCategories, 5000);
	                                        document.getElementById('score').innerHTML = "$" + total;
	                                        document.getElementById('wrongQ').innerHTML = "Wrong: " + wrong;
                                            console.log("useranswerUpdate " + userAnswerUpdate);
                                            console.log("answerUpdate " + answerUpdate);
	                               } 
                            }
	                 }
              }
       }
}

$("#answerText").keyup(function(e){
    if(e.which == 13)
    { 
        checkAnswer();
    }
});

function toHighscoreList() {
    $('.clickBlock').hide();
    console.log("storedHighscoreList " + storedHighscoreList);
    gameResult = {date: datePlayed, endScore: total, numRight: correct, numWrong: wrong, numSkipped: skipped};
    console.log(gameResult);
    //highscoreList.push(gameResult);
    if (storedHighscoreList == null) {
        storedHighscoreList = [];
        storedHighscoreList.push(gameResult);
    }
    else {
        storedHighscoreList.push(gameResult);
        console.log("stored list is not null");
        console.log(storedHighscoreList);
        console.log(storedHighscoreList[0]);
        console.log(storedHighscoreList[1]);
        console.log(storedHighscoreList[0].endScore);
        console.log(storedHighscoreList[1].endScore);
    }
    
    localStorage.setItem("storedHighscoreList", JSON.stringify(storedHighscoreList));
    storedHighscoreList = JSON.parse(localStorage.getItem("storedHighscoreList"));
    
    storedHighscoreList.sort(function(a,b) { return (b.endScore - a.endScore ) });
    console.log("storedHighscoreList " + storedHighscoreList);
    
    if (storedHighscoreList.length > 10) {
        var length = storedHighscoreList.length;
        storedHighscoreList.splice(10, length - 10);
        console.log(storedHighscoreList);
        for (var i=0; i<storedHighscoreList.length; i++) {
    document.getElementById(tableDates[i]).innerHTML = storedHighscoreList[i].date;
    }
    
    for (var i=0; i<storedHighscoreList.length; i++) {
    document.getElementById(tableScores[i]).innerHTML = "$" + storedHighscoreList[i].endScore;
    }
    
    for (var i=0; i<storedHighscoreList.length; i++) {
    document.getElementById(tableRights[i]).innerHTML = storedHighscoreList[i].numRight;
    }
    
    for (var i=0; i<storedHighscoreList.length; i++) {
    document.getElementById(tableWrongs[i]).innerHTML = storedHighscoreList[i].numWrong;
    }
    
    for (var i=0; i<storedHighscoreList.length; i++) {
    document.getElementById(tableSkips[i]).innerHTML = storedHighscoreList[i].numSkipped;
    }
    }
    else {
    
    for (var i=0; i<storedHighscoreList.length; i++) {
    document.getElementById(tableDates[i]).innerHTML = storedHighscoreList[i].date;
    }
    
    for (var i=0; i<storedHighscoreList.length; i++) {
    document.getElementById(tableScores[i]).innerHTML = "$" + storedHighscoreList[i].endScore;
    }
    
    for (var i=0; i<storedHighscoreList.length; i++) {
    document.getElementById(tableRights[i]).innerHTML = storedHighscoreList[i].numRight;
    }
    
    for (var i=0; i<storedHighscoreList.length; i++) {
    document.getElementById(tableWrongs[i]).innerHTML = storedHighscoreList[i].numWrong;
    }
    
    for (var i=0; i<storedHighscoreList.length; i++) {
    document.getElementById(tableSkips[i]).innerHTML = storedHighscoreList[i].numSkipped;
    }
    }
    
    localStorage.setItem("storedHighscoreList", JSON.stringify(storedHighscoreList));
    
    console.log("we're not here are we?");
    $('.highScorePage').show();
    $('.eBoard').hide();
    $('.questionPage').hide();
    
}
    

/* function toHighscoreList() {
    console.log(datePlayed + " " + total + " " + correct + " " + wrong + " " + skipped);
    //highscoreList.push(gameResult);
    //var jsonHighScores = JSON.stringify(highscoreList);
    
    localStorage.date = datePlayed;
    localStorage.endScore = total;
    localStorage.numRight = correct;
    localStorage.numWrong = wrong;
    localStorage.numSkipped = skipped;
    
    //highscoreList.push(gameResult);
    //highscoreList.sort(function(a,b) { return (b.endScore - a.endScore ) });

    document.getElementById('tableDate1').innerHTML = localStorage.toHighScoreList[0].date;
    document.getElementById('tableScore1').innerHTML = localStorage.toHighScoreList[0].endScore;
    document.getElementById('tableRight1').innerHTML = localStorage.toHighScoreList[0].numRight;
    document.getElementById('tableWrong1').innerHTML = localStorage.toHighScoreList[0].numWrong;
    document.getElementById('tableSkipped1').innerHTML = localStorage.toHighScoreList[0].numSkipped;
    document.getElementById('tableDate2').innerHTML = localStorage.toHighScoreList[1].date;
    document.getElementById('tableScore2').innerHTML = localStorage.toHighScoreList[1].endScore;
    document.getElementById('tableRight2').innerHTML = localStorage.toHighScoreList[1].numRight;
    document.getElementById('tableWrong2').innerHTML = localStorage.toHighScoreList[1].numWrong;
    document.getElementById('tableSkipped2').innerHTML = localStorage.toHighScoreList[1].numSkipped;
    $('.eBoard').hide();
    
}; */

function backToCategories() {
    if (all === 30 && finalRoundTwo === true) {
	document.getElementById('showQuestion').innerHTML = "Game" + "<br />" + "Over!";
    //setTimeout(showInterstitialAd, 2000)    
    setTimeout(toHighscoreList, 2500);
    }
    else if (all === 30) {
	finalRound = true;
	finalRoundTwo = true;
        console.log("finalRoundTwo = true");
        runFinalRound();
    }
    else {
        $('.clickBlock').hide();
        $('.answerInputs').hide();
        $('.questionPage').hide();
        $('.blockContainer').show();
        document.getElementById('timer').innerHTML = 10;
        document.getElementById('answerText').value = '';
        t1 = 9;
        t2 = 29;
    }
}

function loadFinalQuestion() {
    var int7 = Math.floor(Math.random() * 18418);
    var finalURL = "http://jservice.io/api/category?id=" + int7;
    
    //var int7 = Math.floor(Math.random() * 2);
    //var finalURL = ["http://jservice.io/api/clues?value=1000", "http://jservice.io/api/clues?value=500"];
    
    $.getJSON(finalURL, function(data) {
console.log("finalURL " + finalURL);

        var finalData = data;
        var numClues = finalData.clues.length;
        console.log("final numClues " + numClues);
        var x = (numClues/5) - 1;
        var i = (Math.floor(Math.random() * x) * 5) + 4;
        console.log("x " + x);
        console.log("i " + i);
        finalCategory = finalData.title;
        console.log("finalCategory " + finalCategory);
	finalClue = finalData.clues[i].question;
    finalQuestionDate = finalData.clues[i].airdate;
    var questionDatesSplit = finalQuestionDate.split("T");
    var questionDatesA = questionDatesSplit[0];
    var questionDatesSplit2 = questionDatesA.split('-');
    finalQuestionDate = questionDatesSplit2[1] + "/" + questionDatesSplit2[2] + "/" + questionDatesSplit2[0]; 
    finalAnswer = finalData.clues[i].answer;    
	//finalAnswer = finalData[x].answer;
        console.log("checking i again " + i);
        var finalValue = finalData.clues[i].value;
console.log("here is the final category " + finalCategory);
console.log("here is the final clue  " + finalClue);
console.log("here is the final answer " + finalAnswer); 
console.log("here is the final value " + finalValue);
//localStorage.myname = prompt("Please enter your name.");
    if ((!finalClue) || (!finalAnswer) || finalClue.includes("seen here") || finalAnswer.includes("heard here")) {
        loadFinalQuestion();
    }    
    });
    runLaunch();
}

function loadCat1() {
    $('.clickBlock').hide();
    $('.block1').hide();
    $('.block2').hide();
    $('.block3').hide();
    $('.block4').hide();
    $('.block5').hide();
    $('.block6').hide();
    $('.block7').hide();
    $('.block8').hide();
    $('.block9').hide();
    $('.block10').hide();
    $('.block11').hide();
    $('.block12').hide();
    $('.block13').hide();
    $('.block14').hide();
    $('.block15').hide();
    $('.block16').hide();
    $('.block17').hide();
    $('.block18').hide();
    $('.block19').hide();
    $('.block20').hide();
    $('.block21').hide();
    $('.block22').hide();
    $('.block23').hide();
    $('.block24').hide();
    $('.block25').hide();
    $('.block26').hide();
    $('.block27').hide();
    $('.block28').hide();
    $('.block29').hide();
    $('.block30').hide();
    $('.doublePageBody').hide();
    $('.questionPage').hide();
    console.log("hide me baby");
    int1 = Math.floor(Math.random() * 18418);
    var anyCatURL = "http://jservice.io/api/category?id=" + int1;
    $('.welcomePage').hide();
    $('.answerInputs').hide();
    $.getJSON(anyCatURL, function(data) {
        myData = data;
      	console.log("URL " + anyCatURL);
      	console.log("1 " + myData);
        category1b = myData.title;
        var numClues = myData.clues.length;
        console.log("numClues " + numClues);
        var x = (numClues/5) - 1;
        console.log("var x " + x);
        if (x % 1 === 0) {
	    var i = (Math.floor(Math.random() * x) * 5);
        var j = i + 5;

        for (i; i<j; i++) {
            console.log("keeping track of i " + i);
            answersOne[i] = myData.clues[i].answer;
            questionsOne[i] = myData.clues[i].question;
            questionDatesOne[i] = myData.clues[i].airdate;
            console.log(questionDatesOne[i]);
            var questionDatesSplit = questionDatesOne[i].split("T");
            var questionDatesA = questionDatesSplit[0];
            var questionDatesSplit2 = questionDatesA.split('-');
            questionDatesOne[i] = questionDatesSplit2[1] + "/" + questionDatesSplit2[2] + "/" + questionDatesSplit2[0];
            console.log("answers " + myData.clues[i].answer);
            console.log("questionsOne " + myData.clues[i].question);
            if (questionsOne[i].includes("seen here") || questionsOne[i].includes("heard here")) {
                console.log("video or audio clue");
                questionsOne[i] = null;
            }
        }
        console.log("answersOne " + answersOne);
        
        //console.log(loadGame());
    if (((answersOne[i-5].match(/[a-z]/i)) || (/\d/.test(answersOne[i-5]))) || ((answersOne[i-4].match(/[a-z]/i)) || (/\d/.test(answersOne[i-4]))) || ((answersOne[i-3].match(/[a-z]/i)) || (/\d/.test(answersOne[i-3]))) || ((answersOne[i-2].match(/[a-z]/i)) || (/\d/.test(answersOne[i-2]))) || ((answersOne[i-1].match(/[a-z]/i)) || (/\d/.test(answersOne[i-1])))) {    
	if ((!answersOne[i-5]) || (!answersOne[i-4]) || (!answersOne[i-3]) || (!answersOne[i-2]) || (!answersOne[i-1]) || (!questionsOne[i-5]) || (!questionsOne[i-4]) || (!questionsOne[i-3]) || (!questionsOne[i-2]) || (!questionsOne[i-1]) || answersOne[i-5].includes("href=") || answersOne[i-4].includes("href=") || answersOne[i-3].includes("href=") || answersOne[i-2].includes("href=") || answersOne[i-1].includes("href=")) {
            console.log("we hit null");
            console.log("numclues " + numClues);
            console.log("i = " + i);
            console.log("answer1 " + (i-5) + answersOne[i-5]);
            console.log("answer2 " + (i-4) + answersOne[i-4]);
            console.log("answer3 " + (i-3) + answersOne[i-3]);
            console.log("answer4 " + (i-2) + answersOne[i-2]);
            console.log("answer5 " + (i-1) + answersOne[i-1]);
            loadCat1();
        }
        else {
	    console.log("no null");
	    a1 = answersOne[i-5];
	    a2 = answersOne[i-4];
	    a3 = answersOne[i-3];
	    a4 = answersOne[i-2];
	    a5 = answersOne[i-1];
        b1 = answersOne[i-5];
	    b2 = answersOne[i-4];
	    b3 = answersOne[i-3];
	    b4 = answersOne[i-2];
	    b5 = answersOne[i-1];
	    q1 = questionsOne[i-5];
	    q2 = questionsOne[i-4];
	    q3 = questionsOne[i-3];
	    q4 = questionsOne[i-2];
	    q5 = questionsOne[i-1];
        qd1 = questionDatesOne[i-5];
	    qd2 = questionDatesOne[i-4];
	    qd3 = questionDatesOne[i-3];
	    qd4 = questionDatesOne[i-2];
	    qd5 = questionDatesOne[i-1];    
            console.log("answer1 " + (i-5) + a1);
            console.log("answer2 " + (i-4) + a2);
            console.log("answer3 " + (i-3) + a3);
            console.log("answer4 " + (i-2) + a4);
            console.log("answer5 " + (i-1) + a5);
            console.log("answer1 " + (i-5) + answersOne[i-5]);
            console.log("answer2 " + (i-4) + answersOne[i-4]);
            console.log("answer3 " + (i-3) + answersOne[i-3]);
            console.log("answer4 " + (i-2) + answersOne[i-2]);
            console.log("answer5 " + (i-1) + answersOne[i-1]);
	    document.getElementById("category1").innerHTML = titleCase(myData.title);
	    var delaly = setTimeout(loadCat2, 500);
        }
    }
            else {
                loadCat1();
            }
        }
        else {
            loadCat1();
        }
        
   });
}

function loadCat2() {
    int2 = Math.floor(Math.random() * 18418);
    
    while (int2 === int1) {
        int2 = Math.floor(Math.random() * 18418);
    }
    //var i = (numClues/5) - 1;
    var anyCatURL = "http://jservice.io/api/category?id=" + int2;
    $('.welcomePage').hide();
    $.getJSON(anyCatURL, function(data) {
        myData = data;
      	console.log("URL " + anyCatURL);
      	console.log("1 " + myData);
        category2b = myData.title;
        var numClues = myData.clues.length;
        console.log("numClues Cat2 " + numClues);
        var x = (numClues/5) - 1;
        console.log("var x cat2 " + x);
        if (x % 1 === 0) {
	var i = (Math.floor(Math.random() * x) * 5);
        var j = i + 5;


        for (i; i<j; i++) {
            console.log("keeping track of i " + i);
            answersTwo[i] = myData.clues[i].answer;
            questionsTwo[i] = myData.clues[i].question;
            questionDatesTwo[i] = myData.clues[i].airdate;
            var questionDatesSplit = questionDatesTwo[i].split("T");
            var questionDatesA = questionDatesSplit[0];
            var questionDatesSplit2 = questionDatesA.split('-');
            questionDatesTwo[i] = questionDatesSplit2[1] + "/" + questionDatesSplit2[2] + "/" + questionDatesSplit2[0];
            console.log("answers " + myData.clues[i].answer);
            console.log("questionsTwo " + myData.clues[i].question);
                        if (questionsTwo[i].includes("seen here") || questionsTwo[i].includes("heard here")) {
                console.log("video or audio clue");
                questionsTwo[i] = null;
        }
        }
        console.log("answersTwo " + answersTwo); 
        
        //console.log(loadGame());
    if (((answersTwo[i-5].match(/[a-z]/i)) || (/\d/.test(answersTwo[i-5]))) || ((answersTwo[i-4].match(/[a-z]/i)) || (/\d/.test(answersTwo[i-4]))) || ((answersTwo[i-3].match(/[a-z]/i)) || (/\d/.test(answersTwo[i-3]))) || ((answersTwo[i-2].match(/[a-z]/i)) || (/\d/.test(answersTwo[i-2]))) || ((answersTwo[i-1].match(/[a-z]/i)) || (/\d/.test(answersTwo[i-1])))) {         
	if ((!answersTwo[i-5]) || (!answersTwo[i-4]) || (!answersTwo[i-3]) || (!answersTwo[i-2]) || (!answersTwo[i-1]) || (!questionsTwo[i-5]) || (!questionsTwo[i-4]) || (!questionsTwo[i-3]) || (!questionsTwo[i-2]) || (!questionsTwo[i-1]) || answersTwo[i-5].includes("href=") || answersTwo[i-4].includes("href=") || answersTwo[i-3].includes("href=") || answersTwo[i-2].includes("href=") || answersTwo[i-1].includes("href=")) {   
            console.log("we hit null");
            console.log("numclues " + numClues);
            console.log("i = " + i);
            console.log("answer1 " + (i-5) + answersTwo[i-5]);
            console.log("answer2 " + (i-4) + answersTwo[i-4]);
            console.log("answer3 " + (i-3) + answersTwo[i-3]);
            console.log("answer4 " + (i-2) + answersTwo[i-2]);
            console.log("answer5 " + (i-1) + answersTwo[i-1]);
            loadCat2();
        }
        else {
	    console.log("no null");
        a6 = answersTwo[i-5];
	    a7 = answersTwo[i-4];
	    a8 = answersTwo[i-3];
	    a9 = answersTwo[i-2];
	    a10 = answersTwo[i-1];
	    b6 = answersTwo[i-5];
	    b7 = answersTwo[i-4];
	    b8 = answersTwo[i-3];
	    b9 = answersTwo[i-2];
	    b10 = answersTwo[i-1];
	    q6 = questionsTwo[i-5];
	    q7 = questionsTwo[i-4];
	    q8 = questionsTwo[i-3];
	    q9 = questionsTwo[i-2];
	    q10 = questionsTwo[i-1];
        qd6 = questionDatesTwo[i-5];
	    qd7 = questionDatesTwo[i-4];
	    qd8 = questionDatesTwo[i-3];
	    qd9 = questionDatesTwo[i-2];
	    qd10 = questionDatesTwo[i-1];
        console.log("answer1 " + (i-5) + a6);
        console.log("answer2 " + (i-4) + a7);
        console.log("answer3 " + (i-3) + a8);
        console.log("answer4 " + (i-2) + a9);
        console.log("answer5 " + (i-1) + a10);
        console.log("answer1 " + (i-5) + answersTwo[i-5]);
        console.log("answer2 " + (i-4) + answersTwo[i-4]);
        console.log("answer3 " + (i-3) + answersTwo[i-3]);
        console.log("answer4 " + (i-2) + answersTwo[i-2]);
        console.log("answer5 " + (i-1) + answersTwo[i-1]);
	    document.getElementById("category2").innerHTML = titleCase(myData.title);
	    var delayTwo = setTimeout(loadCat3, 500);
        }
    }
            else {
                loadCat2();
            }
        }
        else {
            loadCat2();
        }
   });
}

function loadCat3() {
    int3 = Math.floor(Math.random() * 18418);
    
    while (int3 === int2 || int3 === int1) {
        int3 = Math.floor(Math.random() * 18418);
    }
    //var i = (numClues/5) - 1;
    var anyCatURL = "http://jservice.io/api/category?id=" + int3;
    $('.welcomePage').hide();
    $.getJSON(anyCatURL, function(data) {
        myData = data;
      	console.log("URL " + anyCatURL);
      	console.log("1 " + myData);
        category3b = myData.title;
        var numClues = myData.clues.length;
        console.log("numClues cat3 " + numClues);
        var x = (numClues/5) - 1;
        console.log("var x cat3 " + x);
        if (x % 1 === 0) {
	var i = (Math.floor(Math.random() * x) * 5);
        var j = i + 5;


        for (i; i<j; i++) {
            console.log("keeping track of i " + i);
            answersThree[i] = myData.clues[i].answer;
            questionsThree[i] = myData.clues[i].question;
            questionDatesThree[i] = myData.clues[i].airdate;
            var questionDatesSplit = questionDatesThree[i].split("T");
            var questionDatesA = questionDatesSplit[0];
            var questionDatesSplit2 = questionDatesA.split('-');
            questionDatesThree[i] = questionDatesSplit2[1] + "/" + questionDatesSplit2[2] + "/" + questionDatesSplit2[0];
            console.log("answers " + myData.clues[i].answer);
            console.log("questionsThree " + myData.clues[i].question);
                        if (questionsThree[i].includes("seen here") || questionsThree[i].includes("heard here")) {
                console.log("video or audio clue");
                questionsThree[i] = null;
        }
        }
        console.log("answersThree " + answersThree);
        //console.log(loadGame());
    if (((answersThree[i-5].match(/[a-z]/i)) || (/\d/.test(answersThree[i-5]))) || ((answersThree[i-4].match(/[a-z]/i)) || (/\d/.test(answersThree[i-4]))) || ((answersThree[i-3].match(/[a-z]/i)) || (/\d/.test(answersThree[i-3]))) || ((answersThree[i-2].match(/[a-z]/i)) || (/\d/.test(answersThree[i-2]))) || ((answersThree[i-1].match(/[a-z]/i)) || (/\d/.test(answersThree[i-1])))) {            
	if ((!answersThree[i-5]) || (!answersThree[i-4]) || (!answersThree[i-3]) || (!answersThree[i-2]) || (!answersThree[i-1]) || (!questionsThree[i-5]) || (!questionsThree[i-4]) || (!questionsThree[i-3]) || (!questionsThree[i-2]) || (!questionsThree[i-1]) || answersThree[i-5].includes("href=") || answersThree[i-4].includes("href=") || answersThree[i-3].includes("href=") || answersThree[i-2].includes("href=") || answersThree[i-1].includes("href=")) {
            console.log("we hit null");
            console.log("numclues " + numClues);
            console.log("i = " + i);
            console.log("answer1 " + (i-5) + answersThree[i-5]);
            console.log("answer2 " + (i-4) + answersThree[i-4]);
            console.log("answer3 " + (i-3) + answersThree[i-3]);
            console.log("answer4 " + (i-2) + answersThree[i-2]);
            console.log("answer5 " + (i-1) + answersThree[i-1]);
            loadCat3();
        }
        else {
	    console.log("no null");
        a11 = answersThree[i-5];
	    a12 = answersThree[i-4];
	    a13 = answersThree[i-3];
	    a14 = answersThree[i-2];
	    a15 = answersThree[i-1];
	    b11 = answersThree[i-5];
	    b12 = answersThree[i-4];
	    b13 = answersThree[i-3];
	    b14 = answersThree[i-2];
	    b15 = answersThree[i-1];
	    q11 = questionsThree[i-5];
	    q12 = questionsThree[i-4];
	    q13 = questionsThree[i-3];
	    q14 = questionsThree[i-2];
	    q15 = questionsThree[i-1];
        qd11 = questionDatesThree[i-5];
	    qd12 = questionDatesThree[i-4];
	    qd13 = questionDatesThree[i-3];
	    qd14 = questionDatesThree[i-2];
	    qd15 = questionDatesThree[i-1];    
        console.log("answer1 " + (i-5) + a11);
        console.log("answer2 " + (i-4) + a12);
        console.log("answer3 " + (i-3) + a13);
        console.log("answer4 " + (i-2) + a14);
        console.log("answer5 " + (i-1) + a15);
        console.log("answer1 " + (i-5) + answersThree[i-5]);
        console.log("answer2 " + (i-4) + answersThree[i-4]);
        console.log("answer3 " + (i-3) + answersThree[i-3]);
        console.log("answer4 " + (i-2) + answersThree[i-2]);
        console.log("answer5 " + (i-1) + answersThree[i-1]);
	    document.getElementById("category3").innerHTML = titleCase(myData.title);
	    var delalyThree = setTimeout(loadCat4, 500);
        }
    }
            else {
                loadCat3();
            }
        }
        else {
            loadCat3();
        }
   });
}

function loadCat4() {
    int4 = Math.floor(Math.random() * 18418);
    
    while (int4 === int3 || int4 === int2 || int4 === int1) {
        int4 = Math.floor(Math.random() * 18418);
    }
    //var i = (numClues/5) - 1;
    var anyCatURL = "http://jservice.io/api/category?id=" + int4;
    $('.welcomePage').hide();
    $.getJSON(anyCatURL, function(data) {
        myData = data;
      	console.log("URL " + anyCatURL);
      	console.log("1 " + myData);
        category4b = myData.title;
        var numClues = myData.clues.length;
        console.log("numclues cat4 " + numClues);
        var x = (numClues/5) - 1;
        console.log("var x " + x);
        if (x % 1 === 0) {
	var i = (Math.floor(Math.random() * x) * 5);
        var j = i + 5;


        for (i; i<j; i++) {
            console.log("keeping track of i " + i);
            answersFour[i] = myData.clues[i].answer;
            questionsFour[i] = myData.clues[i].question;
            questionDatesFour[i] = myData.clues[i].airdate;
            var questionDatesSplit = questionDatesFour[i].split("T");
            var questionDatesA = questionDatesSplit[0];
            var questionDatesSplit2 = questionDatesA.split('-');
            questionDatesFour[i] = questionDatesSplit2[1] + "/" + questionDatesSplit2[2] + "/" + questionDatesSplit2[0];
            console.log("answers " + myData.clues[i].answer);
            console.log("questionsFour " + myData.clues[i].question);
                        if (questionsFour[i].includes("seen here") || questionsFour[i].includes("heard here")) {
                console.log("video or audio clue");
                questionsFour[i] = null;
        }
        }
        console.log("answersFour " + answersFour);
        
        //console.log(loadGame());
    if (((answersFour[i-5].match(/[a-z]/i)) || (/\d/.test(answersFour[i-5]))) || ((answersFour[i-4].match(/[a-z]/i)) || (/\d/.test(answersFour[i-4]))) || ((answersFour[i-3].match(/[a-z]/i)) || (/\d/.test(answersFour[i-3]))) || ((answersFour[i-2].match(/[a-z]/i)) || (/\d/.test(answersFour[i-2]))) || ((answersFour[i-1].match(/[a-z]/i)) || (/\d/.test(answersFour[i-1])))) {         
	if ((!answersFour[i-5]) || (!answersFour[i-4]) || (!answersFour[i-3]) || (!answersFour[i-2]) || (!answersFour[i-1]) || (!questionsFour[i-5]) || (!questionsFour[i-4]) || (!questionsFour[i-3]) || (!questionsFour[i-2]) || (!questionsFour[i-1]) || questionsFour[i-5].includes("href=") || answersFour[i-4].includes("href=") || answersFour[i-3].includes("href=") || answersFour[i-2].includes("href=") || answersFour[i-1].includes("href=")) {
            console.log("we hit null");
            console.log("numclues " + numClues);
            console.log("i = " + i);
            console.log("answer1 " + (i-5) + answersFour[i-5]);
            console.log("answer2 " + (i-4) + answersFour[i-4]);
            console.log("answer3 " + (i-3) + answersFour[i-3]);
            console.log("answer4 " + (i-2) + answersFour[i-2]);
            console.log("answer5 " + (i-1) + answersFour[i-1]);
            loadCat4();
        }
        else {
	    console.log("no null");
        a16 = answersFour[i-5];
	    a17 = answersFour[i-4];
	    a18 = answersFour[i-3];
	    a19 = answersFour[i-2];
	    a20 = answersFour[i-1];
	    b16 = answersFour[i-5];
	    b17 = answersFour[i-4];
	    b18 = answersFour[i-3];
	    b19 = answersFour[i-2];
	    b20 = answersFour[i-1];
	    q16 = questionsFour[i-5];
	    q17 = questionsFour[i-4];
	    q18 = questionsFour[i-3];
	    q19 = questionsFour[i-2];
	    q20 = questionsFour[i-1];
        qd16 = questionDatesFour[i-5];
	    qd17 = questionDatesFour[i-4];
	    qd18 = questionDatesFour[i-3];
	    qd19 = questionDatesFour[i-2];
	    qd20 = questionDatesFour[i-1];
        console.log("answer1 " + (i-5) + a16);
        console.log("answer2 " + (i-4) + a17);
        console.log("answer3 " + (i-3) + a18);
        console.log("answer4 " + (i-2) + a19);
        console.log("answer5 " + (i-1) + a20);
        console.log("answer1 " + (i-5) + answersFour[i-5]);
        console.log("answer2 " + (i-4) + answersFour[i-4]);
        console.log("answer3 " + (i-3) + answersFour[i-3]);
        console.log("answer4 " + (i-2) + answersFour[i-2]);
        console.log("answer5 " + (i-1) + answersFour[i-1]);
	    document.getElementById("category4").innerHTML = titleCase(myData.title);
	    var delalyFour = setTimeout(loadCat5, 500);
        }
    }
            else {
                loadCat4();
            }
        }
        else {
            loadCat4();
        }
   });
}

function loadCat5() {
    int5 = Math.floor(Math.random() * 18418);
    
    while (int5 === int4 || int5 === int3 || int5 === int2 || int5 === int1) {
        int5 = Math.floor(Math.random() * 18418);
    }
    //var i = (numClues/5) - 1;
    var anyCatURL = "http://jservice.io/api/category?id=" + int5;
    $('.welcomePage').hide();
    $.getJSON(anyCatURL, function(data) {
        myData = data;
      	console.log("URL " + anyCatURL);
      	console.log("1 " + myData);
        category5b = myData.title;
        var numClues = myData.clues.length;
        console.log("numClues " + numClues);
        var x = (numClues/5) - 1;
        console.log("var x " + x);
        if (x % 1 === 0) {
	var i = (Math.floor(Math.random() * x) * 5);
        var j = i + 5;


        for (i - 1; i<j; i++) {
            console.log("keeping track of i " + i);
            answersFive[i] = myData.clues[i].answer;
            questionsFive[i] = myData.clues[i].question;
            questionDatesFive[i] = myData.clues[i].airdate;
            var questionDatesSplit = questionDatesFive[i].split("T");
            var questionDatesA = questionDatesSplit[0];
            var questionDatesSplit2 = questionDatesA.split('-');
            questionDatesFive[i] = questionDatesSplit2[1] + "/" + questionDatesSplit2[2] + "/" + questionDatesSplit2[0];
            console.log("answers " + myData.clues[i].answer);
            console.log("questionsFive " + myData.clues[i].question);
                        if (questionsFive[i].includes("seen here") || questionsFive[i].includes("heard here")) {
                console.log("video or audio clue");
                questionsFive[i] = null;
        }
        }
        console.log("answersFive " + answersFive);
        
        //console.log(loadGame());
    if (((answersFive[i-5].match(/[a-z]/i)) || (/\d/.test(answersFive[i-5]))) || ((answersFive[i-4].match(/[a-z]/i)) || (/\d/.test(answersFive[i-4]))) || ((answersFive[i-3].match(/[a-z]/i)) || (/\d/.test(answersFive[i-3]))) || ((answersFive[i-2].match(/[a-z]/i)) || (/\d/.test(answersFive[i-2]))) || ((answersFive[i-1].match(/[a-z]/i)) || (/\d/.test(answersFive[i-1])))) {         
	if ((!answersFive[i-5]) || (!answersFive[i-4]) || (!answersFive[i-3]) || (!answersFive[i-2]) || (!answersFive[i-1]) || (!questionsFive[i-5]) || (!questionsFive[i-4]) || (!questionsFive[i-3]) || (!questionsFive[i-2]) || (!questionsFive[i-1]) || answersFive[i-5].includes("href=") || answersFive[i-4].includes("href=") || answersFive[i-3].includes("href=") || answersFive[i-2].includes("href=") || answersFive[i-1].includes("href=")) {
            console.log("we hit null");
            console.log("numclues " + numClues);
            console.log("i = " + i);
            console.log("answer1 " + (i-5) + answersFive[i-5]);
            console.log("answer2 " + (i-4) + answersFive[i-4]);
            console.log("answer3 " + (i-3) + answersFive[i-3]);
            console.log("answer4 " + (i-2) + answersFive[i-2]);
            console.log("answer5 " + (i-1) + answersFive[i-1]);
	    loadCat5();
        }
        else {
	    console.log("no null");
	    document.getElementById("category5").innerHTML = titleCase(myData.title);
        var delalyFive = setTimeout(loadCat6, 500);
        a21 = answersFive[i-5];
	    a22 = answersFive[i-4];
	    a23 = answersFive[i-3];
	    a24 = answersFive[i-2];
	    a25 = answersFive[i-1];    
	    b21 = answersFive[i-5];
	    b22 = answersFive[i-4];
	    b23 = answersFive[i-3];
	    b24 = answersFive[i-2];
	    b25 = answersFive[i-1];
	    q21 = questionsFive[i-5];
	    q22 = questionsFive[i-4];
	    q23 = questionsFive[i-3];
	    q24 = questionsFive[i-2];
	    q25 = questionsFive[i-1];
        qd21 = questionDatesFive[i-5];
	    qd22 = questionDatesFive[i-4];
	    qd23 = questionDatesFive[i-3];
	    qd24 = questionDatesFive[i-2];
	    qd25 = questionDatesFive[i-1];
        console.log("answer1 " + (i-5) + a21);
        console.log("answer2 " + (i-4) + a22);
        console.log("answer3 " + (i-3) + a23);
        console.log("answer4 " + (i-2) + a24);
        console.log("answer5 " + (i-1) + a25);
        console.log("answer1 " + (i-5) + answersFive[i-5]);
        console.log("answer2 " + (i-4) + answersFive[i-4]);
        console.log("answer3 " + (i-3) + answersFive[i-3]);
        console.log("answer4 " + (i-2) + answersFive[i-2]);
        console.log("answer5 " + (i-1) + answersFive[i-1]);            
        }
    }
            else {
                loadCat5();
            }
        }
        else {
            loadCat5();
        }
   });
}

function loadCat6() {
    int6 = Math.floor(Math.random() * 18418);
    
    while (int6 === int5 || int6 === int4 || int6 === int3 || int6 === int2 || int6 === int1) {
        int6 = Math.floor(Math.random() * 18418);
    }
    //var i = (numClues/5) - 1;
    var anyCatURL = "http://jservice.io/api/category?id=" + int6;
    $('.welcomePage').hide();
    $.getJSON(anyCatURL, function(data) {
        myData = data;
      	console.log("URL " + anyCatURL);
      	console.log("1 " + myData);
        category6b = myData.title;
        var numClues = myData.clues.length;
        console.log("numClues cat6 " + numClues);
        var x = (numClues/5) - 1;
        console.log("var x cat6 " + x);
        if (x % 1 === 0) {
	var i = (Math.floor(Math.random() * x) * 5);
        var j = i + 5;


        for (i - 1; i<j; i++) {
            console.log("keeping track of i " + i);
            answersSix[i] = myData.clues[i].answer;
            questionsSix[i] = myData.clues[i].question;
            questionDatesSix[i] = myData.clues[i].airdate;
            var questionDatesSplit = questionDatesSix[i].split("T");
            var questionDatesA = questionDatesSplit[0];
            var questionDatesSplit2 = questionDatesA.split('-');
            questionDatesSix[i] = questionDatesSplit2[1] + "/" + questionDatesSplit2[2] + "/" + questionDatesSplit2[0];
            console.log("answers " + myData.clues[i].answer);
            console.log("questionsSix " + myData.clues[i].question);
                        if (questionsSix[i].includes("seen here") || questionsSix[i].includes("heard here")) {
                console.log("video or audio clue");
                questionsSix[i] = null;
        }
        }
        console.log("answersSix " + answersSix);
        
        //console.log(loadGame());
    if (((answersSix[i-5].match(/[a-z]/i)) || (/\d/.test(answersSix[i-5]))) || ((answersSix[i-4].match(/[a-z]/i)) || (/\d/.test(answersSix[i-4]))) || ((answersSix[i-3].match(/[a-z]/i)) || (/\d/.test(answersSix[i-3]))) || ((answersSix[i-2].match(/[a-z]/i)) || (/\d/.test(answersSix[i-2]))) || ((answersSix[i-1].match(/[a-z]/i)) || (/\d/.test(answersSix[i-1])))) {         
	if ((!answersSix[i-5]) || (!answersSix[i-4]) || (!answersSix[i-3]) || (!answersSix[i-2]) || (!answersSix[i-1]) || (!questionsSix[i-5]) || (!questionsSix[i-4]) || (!questionsSix[i-3]) || (!questionsSix[i-2]) || (!questionsSix[i-1]) || answersSix[i-5].includes("href=") || answersSix[i-4].includes("href=") || answersSix[i-3].includes("href=") || answersSix[i-2].includes("href=") || answersSix[i-1].includes("href=")) {
            console.log("we hit null");
            console.log("numclues " + numClues);
            console.log("i = " + i);
            console.log("answer1 " + (i-5) + answersSix[i-5]);
            console.log("answer2 " + (i-4) + answersSix[i-4]);
            console.log("answer3 " + (i-3) + answersSix[i-3]);
            console.log("answer4 " + (i-2) + answersSix[i-2]);
            console.log("answer5 " + (i-1) + answersSix[i-1]);
	    loadCat6();
        }
        else {
	    console.log("no null");
	    var delalySix = setTimeout(loadFinalQuestion, 500);
	    document.getElementById("category6").innerHTML = titleCase(myData.title);
        a26 = answersSix[i-5];
	    a27 = answersSix[i-4];
	    a28 = answersSix[i-3];
	    a29 = answersSix[i-2];
	    a30 = answersSix[i-1];    
	    b26 = answersSix[i-5];
	    b27 = answersSix[i-4];
	    b28 = answersSix[i-3];
	    b29 = answersSix[i-2];
	    b30 = answersSix[i-1];
	    q26 = questionsSix[i-5];
	    q27 = questionsSix[i-4];
	    q28 = questionsSix[i-3];
	    q29 = questionsSix[i-2];
	    q30 = questionsSix[i-1];
        qd26 = questionDatesSix[i-5];
	    qd27 = questionDatesSix[i-4];
	    qd28 = questionDatesSix[i-3];
	    qd29 = questionDatesSix[i-2];
	    qd30 = questionDatesSix[i-1];
        console.log("answer1 " + (i-5) + a26);
        console.log("answer2 " + (i-4) + a27);
        console.log("answer3 " + (i-3) + a28);
        console.log("answer4 " + (i-2) + a29);
        console.log("answer5 " + (i-1) + a30);
        console.log("answer1 " + (i-5) + answersSix[i-5]);
        console.log("answer2 " + (i-4) + answersSix[i-4]);
        console.log("answer3 " + (i-3) + answersSix[i-3]);
        console.log("answer4 " + (i-2) + answersSix[i-2]);
        console.log("answer5 " + (i-1) + answersSix[i-1]);
	    as = [a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30];
        bs = [b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,b27,b28,b29,b30];    
	    qs = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30];
        qds = [qd1, qd2, qd3, qd4, qd5, qd6, qd7, qd8, qd9, qd10, qd11, qd12, qd13, qd14, qd15, qd16, qd17, qd18, qd19, qd20, qd21, qd22, qd23, qd24, qd25, qd26, qd27, qd28, qd30];
	    dailyDouble = Math.floor(Math.random() * 30);
            console.log("daily double is " + dailyDouble);
        }
    }
            else {
                loadCat6();
            }
        }
        else {
            loadCat6();
        }
   });
}

function specialStringUser(str) {
    return str.replace(/[^A-Z0-9]+/ig, "");
}

function removeWords(input) {
  var stop_words = ['a', 'an', 'the', 'of', 'and', 'his', 'her', 'their', '&', '<i>', '</i>', 'to '];

  console.log('IN: ' + input);

  // JavaScript 1.6 array filter
  var filtered  = input.split( /\b/ ).filter( function( v ){
        return stop_words.indexOf( v ) == -1;
  });

  //console.log( 'OUT 1 : ' + filtered.join(''));
  return wordRemove(filtered.join(''));
}

function cleanArray(actual) {
  var newArray = new Array();
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}

function wordRemove(str) {
    var re = new RegExp(removeWordsTwo, 'gi');
    return str.replace(re, ' ');
}

function specialString(str) {
    str = str.replace(/ *\([^)]*\) */g, "");
    return str.replace(/[^A-Z0-9]+/ig, "");
}

function titleCase(str) {
console.log("we made it");
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       
       if (splitStr[i].charAt(0) === '"') {
           console.log("it's a quote");
           splitStr[i] = '"' + splitStr[i].charAt(1).toUpperCase() + splitStr[i].substring(2);
       }
       else {
           console.log("else");
           splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1); 
       }    
   }
   // Directly return the joined string
   return splitStr.join(' '); 
}
}

window.onload = function() {runGame()};

