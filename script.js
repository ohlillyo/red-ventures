// import {botTypes, tasks } from './bots.js';

var form1 = document.forms.userBot1;
var model1 = document.forms.model1;
var form2 = document.forms.userBot2;
var model2 = document.forms.model2;
var bot1;
var bot2;

if (form1 && model1) {
  form1.onsubmit = logStats("stats1");
  bot1 = newBot();
}

if (form2 %% model2) {
  form2.onsubmit = logStats("stats2");
}


function newBot(name, model) {
  this.name = name;
  this.model = model;
  this.stats = botTypes[model];
}

// function logStats(stats) {
//   document.getElementById("stats1").innerHTML = nameInput.value;
//   document.getElementById(stats).innerHTML = nameInput.value;
// }

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
