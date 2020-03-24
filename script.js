import {botTypes, tasks } from './bots.js';

function newBot(name, model) {
  this.name = name;
  this.model = model;
  this.stats = botTypes[model];
}

function logStats(nameInput) {
  document.getElementById("stats").innerHTML = nameInput.value;
}

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
