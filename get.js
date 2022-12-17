 var x = new XMLHttpRequest();
 x.open("GET", "/echo/json/", true);
 x.onload = function (){
    alert( x.responseText);
 }
 x.send(null)