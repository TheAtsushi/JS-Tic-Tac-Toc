const tabel = [
    ["","",""],
    ["","",""],
    ["","",""],
]

var swiched = false;
var disableToo = false;
const errorMessage_1 = "The place is reserved";

function addFunOne() {
    var button = document.getElementById("play-button-1");
    var message = document.getElementById("label");

    if (button.innerText == "" && tabel[0][0] != "1" && tabel [0][0] != "0" && !swiched){
        button.innerText = "X";
        tabel[0][0] = "1";
        firstRule();
        swichAll()
    } else if(button.innerText == "" && tabel[0][0] != "1" && tabel [0][0] != "0" && swiched){
        button.innerText = "O";
        tabel[0][0] = "0";
        firstRule();
        swichAll()
    }
    else {
        document.getElementById("error-input").classList.remove("disable");
        message.innerText = errorMessage_1;
    }
}
function addFunTwo() {
    var button = document.getElementById("play-button-2");
    var message = document.getElementById("label");

    if (button.innerText == "" && tabel[1][0] != "1" && tabel [1][0] != "0" && !swiched){
        button.innerText = "X";
        tabel[1][0] = "1";
        firstRule();
        swichAll()
    } else if(button.innerText == "" && tabel[1][0] != "1" && tabel [1][0] != "0" && swiched){
        button.innerText = "O";
        tabel[1][0] = "0";
        firstRule();
        swichAll()
    }
    else {
        document.getElementById("error-input").classList.remove("disable");
        message.innerText = errorMessage_1;
    }
}
function addFunThr() {
    var button = document.getElementById("play-button-3");
    var message = document.getElementById("label");

    if (button.innerText == "" && tabel[2][0] != "1" && tabel [2][0] != "0" && !swiched){
        button.innerText = "X";
        tabel[2][0] = "1";
        firstRule();
        swichAll()
    } else if(button.innerText == "" && tabel[2][0] != "1" && tabel [2][0] != "0" && swiched){
        button.innerText = "O";
        tabel[2][0] = "0";
        firstRule();
        swichAll()
    }
    else {
        document.getElementById("error-input").classList.remove("disable");
        message.innerText = errorMessage_1;
    }
}
function addFunFor() {
    var button = document.getElementById("play-button-4");
    var message = document.getElementById("label");

    if (button.innerText == "" && tabel[0][1] != "1" && tabel [0][1] != "0" && !swiched){
        button.innerText = "X";
        tabel[0][1] = "1";
        firstRule();
        swichAll()
    } else if(button.innerText == "" && tabel[0][1] != "1" && tabel [0][1] != "0" && swiched){
        button.innerText = "O";
        tabel[0][1] = "0";
        firstRule();
        swichAll()
    }
    else {
        document.getElementById("error-input").classList.remove("disable");
        message.innerText = errorMessage_1;
    }
}
function addFunFiv() {
    var button = document.getElementById("play-button-5");
    var message = document.getElementById("label");

    if (button.innerText == "" && tabel[1][1] != "1" && tabel [1][1] != "0" && !swiched){
        button.innerText = "X";
        tabel[1][1] = "1";
        firstRule();
        swichAll()
    } else if(button.innerText == "" && tabel[1][1] != "1" && tabel [1][1] != "0" && swiched){
        button.innerText = "O";
        tabel[1][1] = "0";
        firstRule();
        swichAll()
    }
    else {
        document.getElementById("error-input").classList.remove("disable");
        message.innerText = errorMessage_1;
    }
}
function addFunSix() {
    var button = document.getElementById("play-button-6");
    var message = document.getElementById("label");

    if (button.innerText == "" && tabel[2][1] != "1" && tabel [2][1] != "0" && !swiched){
        button.innerText = "X";
        tabel[2][1] = "1";
        firstRule();
        swichAll()
    } else if(button.innerText == "" && tabel[2][1] != "1" && tabel [2][1] != "0" && swiched){
        button.innerText = "O";
        tabel[2][1] = "0";
        firstRule();
        swichAll()
    }
    else {
        document.getElementById("error-input").classList.remove("disable");
        message.innerText = errorMessage_1;
    }
}
function addFunSev() {
    var button = document.getElementById("play-button-7");
    var message = document.getElementById("label");

    if (button.innerText == "" && tabel[0][2] != "1" && tabel [0][2] != "0" && !swiched){
        button.innerText = "X";
        tabel[0][2] = "1";
        firstRule();
        swichAll()
    } else if(button.innerText == "" && tabel[0][2] != "1" && tabel [0][2] != "0" && swiched){
        button.innerText = "O";
        tabel[0][2] = "0";
        firstRule();
        swichAll()
    }
    else {
        document.getElementById("error-input").classList.remove("disable");
        message.innerText = errorMessage_1;
    }
}
function addFunEig() {
    var button = document.getElementById("play-button-8");
    var message = document.getElementById("label");

    if (button.innerText == "" && tabel[1][2] != "1" && tabel [1][2] != "0" && !swiched){
        button.innerText = "X";
        tabel[1][2] = "1";
        firstRule();
        swichAll()
    } else if(button.innerText == "" && tabel[1][2] != "1" && tabel [1][2] != "0" && swiched){
        button.innerText = "O";
        tabel[1][2] = "0";
        firstRule();
        swichAll()
    }
    else {
        document.getElementById("error-input").classList.remove("disable");
        message.innerText = errorMessage_1;
    }
}
function addFunNin() {
    var button = document.getElementById("play-button-9");
    var message = document.getElementById("label");

    if (button.innerText == "" && tabel[2][2] != "1" && tabel [2][2] != "0" && !swiched){
        button.innerText = "X";
        tabel[2][2] = "1";
        firstRule();
        swichAll()
    } else if(button.innerText == "" && tabel[2][2] != "1" && tabel [2][2] != "0" && swiched){
        button.innerText = "O";
        tabel[2][2] = "0";
        firstRule();
        swichAll()
    }
    else {
        document.getElementById("error-input").classList.remove("disable");
        message.innerText = errorMessage_1;
    }
}
function firstRule() {

    if (tabel[0][0] == '1' && tabel[0][1] == '1' && tabel[0][2] == '1') {
        document.getElementById("play-button-1").style.borderColor = "green";
        document.getElementById("play-button-4").style.borderColor = "green";
        document.getElementById("play-button-7").style.borderColor = "green";
        disableAll();
    } else if(tabel[0][0] == '0' && tabel[0][1] == '0' && tabel[0][2] == '0'){
        document.getElementById("play-button-1").style.borderColor = "red";
        document.getElementById("play-button-4").style.borderColor = "red";
        document.getElementById("play-button-7").style.borderColor = "red";
        disableAll();
    }

    if (tabel[1][0] == '1' && tabel[1][1] == '1' && tabel[1][2] == '1') {
        document.getElementById("play-button-2").style.borderColor = "green";
        document.getElementById("play-button-5").style.borderColor = "green";
        document.getElementById("play-button-8").style.borderColor = "green";
        disableAll();
    } else if(tabel[1][0] == '0' && tabel[1][1] == '0' && tabel[1][2] == '0') {
        document.getElementById("play-button-2").style.borderColor = "red";
        document.getElementById("play-button-5").style.borderColor = "red";
        document.getElementById("play-button-8").style.borderColor = "red";
        disableAll();
    }

    if (tabel[0][0] == '1' && tabel[1][0] == '1' && tabel[2][0] == '1') {
        document.getElementById("play-button-1").style.borderColor = "green";
        document.getElementById("play-button-2").style.borderColor = "green";
        document.getElementById("play-button-3").style.borderColor = "green";
        disableAll();
    } else if (tabel[0][0] == '0' && tabel[1][0] == '0' && tabel[2][0] == '0') {
        document.getElementById("play-button-1").style.borderColor = "red";
        document.getElementById("play-button-2").style.borderColor = "red";
        document.getElementById("play-button-3").style.borderColor = "red";
        disableAll();
    }

    if (tabel[2][0] == '1' && tabel[2][1] == '1' && tabel[2][2] == '1') {
        document.getElementById("play-button-3").style.borderColor = "green";
        document.getElementById("play-button-6").style.borderColor = "green";
        document.getElementById("play-button-9").style.borderColor = "green";
        disableAll();
    } else if (tabel[2][0] == '0' && tabel[2][1] == '0' && tabel[2][2] == '0') {
        document.getElementById("play-button-3").style.borderColor = "red";
        document.getElementById("play-button-6").style.borderColor = "red";
        document.getElementById("play-button-9").style.borderColor = "red";
        disableAll();
    }

    if (tabel[0][2] == '1' && tabel[1][2] == '1' && tabel[2][2] == '1') {
        document.getElementById("play-button-7").style.borderColor = "green";
        document.getElementById("play-button-8").style.borderColor = "green";
        document.getElementById("play-button-9").style.borderColor = "green";
        disableAll();
    } else if (tabel[0][2] == '0' && tabel[1][2] == '0' && tabel[2][2] == '0') {
        document.getElementById("play-button-7").style.borderColor = "red";
        document.getElementById("play-button-8").style.borderColor = "red";
        document.getElementById("play-button-9").style.borderColor = "red";
        disableAll();
    }
    
    if (tabel[0][1] == '1' && tabel[1][1] == '1' && tabel[2][1] == '1') {
        document.getElementById("play-button-4").style.borderColor = "green";
        document.getElementById("play-button-5").style.borderColor = "green";
        document.getElementById("play-button-6").style.borderColor = "green";
        disableAll();
    } else if (tabel[0][1] == '0' && tabel[1][1] == '0' && tabel[2][1] == '0') {
        document.getElementById("play-button-4").style.borderColor = "red";
        document.getElementById("play-button-5").style.borderColor = "red";
        document.getElementById("play-button-6").style.borderColor = "red";
        disableAll();
    }

    if (tabel[0][0] == '1' && tabel[1][1] == '1' && tabel[2][2] == '1') {
        document.getElementById("play-button-1").style.borderColor = "green";
        document.getElementById("play-button-5").style.borderColor = "green";
        document.getElementById("play-button-9").style.borderColor = "green";
        disableAll();
    } else if (tabel[0][0] == '0' && tabel[1][1] == '0' && tabel[2][2] == '0') {
        document.getElementById("play-button-1").style.borderColor = "red";
        document.getElementById("play-button-5").style.borderColor = "red";
        document.getElementById("play-button-9").style.borderColor = "red";
        disableAll();
    }

    if (tabel[0][2] == '1' && tabel[1][1] == '1' && tabel[2][0] == '1') {
        document.getElementById("play-button-7").style.borderColor = "green";
        document.getElementById("play-button-5").style.borderColor = "green";
        document.getElementById("play-button-3").style.borderColor = "green";
        disableAll();
    } else if (tabel[0][2] == '0' && tabel[1][1] == '0' && tabel[2][0] == '0') {
        document.getElementById("play-button-7").style.borderColor = "red";
        document.getElementById("play-button-5").style.borderColor = "red";
        document.getElementById("play-button-3").style.borderColor = "red";
        disableAll();
    }
}
function disableAll() {
    if (!disableToo) {
        document.getElementById("play-button-1").disabled = true;
        document.getElementById("play-button-2").disabled = true;
        document.getElementById("play-button-3").disabled = true;
        document.getElementById("play-button-4").disabled = true;
        document.getElementById("play-button-5").disabled = true;
        document.getElementById("play-button-6").disabled = true;
        document.getElementById("play-button-7").disabled = true;
        document.getElementById("play-button-8").disabled = true;
        document.getElementById("play-button-9").disabled = true;
        disableToo = true;
    } else {
        document.getElementById("play-button-1").disabled = false;
        document.getElementById("play-button-2").disabled = false;
        document.getElementById("play-button-3").disabled = false;
        document.getElementById("play-button-4").disabled = false;
        document.getElementById("play-button-5").disabled = false;
        document.getElementById("play-button-6").disabled = false;
        document.getElementById("play-button-7").disabled = false;
        document.getElementById("play-button-8").disabled = false;
        document.getElementById("play-button-9").disabled = false;
        disableToo = false;
    }
}
function swichAll() {
    if (!swiched) swiched = true;
    else swiched = false;
}