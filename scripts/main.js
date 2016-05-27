/*
var myImage=document.querySelector('img');

myImage.onclick=function(){

var mySrc=myImage.getAttribute('src');
if (mySrc==='images/grid1.jpg'){myImage.setAttribute('src','images/white.png');}
else{myImage.setAttribute('src','images/grid1.jpg');}

};


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName(){
  var myName=prompt('plz enter your name');
  localStorage.setItem('name',myName);
  myHeading.textContent="play "+myName;
}

if(!localStorage.getItem('name')) {
  setUserName();}
else{
  var storedName = localStorage.getItem('name');
myHeading.textContent = 'play ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
*/
