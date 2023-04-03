var mny1 = document.getElementById('money');
var mny2 = document.getElementById('money2');
var mny3 = document.getElementById('money3');


var total = document.getElementById('total');

function Slide1() {
    var slider = document.getElementById('long').value;
    mny1.innerHTML = slider + ' AZN'
    document.getElementById('1').value=slider
}

function Slide2() {
    var slider2 = document.getElementById('long1').value;
    mny2.innerHTML = slider2 + ' Ay'
    document.getElementById('2').value=slider2;
}

function Slide3() {
    var slider3 = document.getElementById('long2').value;
    mny3.innerHTML = slider3 + '%';
    document.getElementById('3').value=slider3
}

var button = document.getElementById('btn');

button.onclick = function () {
    var h1 = Number(document.getElementById('1').value);
    var h2 = Number(document.getElementById('2').value);
    var h3 = Number(document.getElementById('3').value);
    var total = document.getElementById('total')
    var total1 =document.getElementById('total1')
    
    var a = (h1 * (100 + h3)) / 100/h2
    var b = (h1 * (100 + h3)) / 100 
    total.innerHTML = a.toFixed(2)
    total1.innerHTML = b.toFixed(2)
}