var divArr = document.getElementsByTagName("div");
var numberColor = document.getElementById('numberColor');

window.onload = function () {
    window.onbeforeunload = function() { 
    return "";
    };
}

for (var i = 0; i < divArr.length; i++) {
    divArr[i].onclick = function () {
        this.style.backgroundColor = "red";
    }
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
        }
    divArr[i].onmouseover = function () {
        this.style.backgroundColor = 'rgb('+getRandomInt(0,255)+', '+getRandomInt(0,255)+', '+getRandomInt(0,255)+')';
        this.innerHTML = this.style.backgroundColor;
    };
}

