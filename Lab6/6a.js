function fromTO() {
    var e = document.getElementById("from");
    var selected = e.value;
    if(selected==="f"){
        document.getElementById("to").innerHTML="Celcius";
    }
    else {
        document.getElementById("to").innerHTML="Fahrenheit";
    }
}


function convert() {

    var e = document.getElementById("from");
    var selected = e.value;
    var num = parseInt(document.getElementById("temp").value);
    if(selected==="f"){
        document.getElementById("result").innerHTML=(num-32)/1.8 + " °C";
    }
    else {
        document.getElementById("result").innerHTML=(num*1.8)+32 + " °F";
    }
}