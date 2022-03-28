
function ageindays() {
var birthyear = prompt('What year were you born in bro?');
var ageindayss = (2022 - birthyear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are ' + ageindayss  + ' days old');
h1.setAttribute('id' , 'ageindays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
} 

 function reset() {
     document.getElementById('ageindays').remove();
 }