//import { MODELS, TASKS } from "./bots.js";
//CONSTANTS: MODELS & TASKS
const MODELS = {
  'Unipedal':     { friendly: true, },
  'Bipedal':      { friendly: true, },
  'Quadrupedal':  { friendly: true, },
  'Aeronautical': { friendly: true, },
  'Radial':       { friendly: false, },
  'Arachnid':     { friendly: false, }
};

const TASKS = [
  {
    description: 'do the dishes',
    eta: 1000,
    points: 15,
  },{
    description: 'sweep the house',
    eta: 3000,
    points: 20,
  },{
    description: 'do the laundry',
    eta: 10000,
    points: 15,
  },{
    description: 'take out the recycling',
    eta: 4000,
    points: 10,
  },{
    description: 'make a sammich',
    eta: 7000,
    points: 10,
  },{
    description: 'mow the lawn',
    eta: 20000,
    points: 30,
  },{
    description: 'rake the leaves',
    eta: 18000,
    points: 30,
  },{
    description: 'give the dog a bath',
    eta: 14500,
  },{
    description: 'bake some cookies',
    eta: 8000,
    points: 20,
  },{
    description: 'wash the car',
    eta: 20000,
    points: 25,
  },
];

//VARIABLES
var name1, model1, bot1;
var name2, model2, bot2;
var taskList = makeTaskList();


// FUNCTIONS
function makeTaskList() {

}
function logStats(div) {
  //This function creates a new robot based on user specifications, assigns it to either bot1 or bot2, and prints their information.
  //Inputs: div - a string of which div to print robot information
  //Returns: none
  let bot;
  if (div==='stats1') { //if this is Bot 1
    name1 = document.getElementById("nameInput1").value;
    model1 = document.getElementById("form1").elements["model1"].value;
    bot1 = new Robot(name1, model1);
    bot = bot1;
  } else if (div==='stats2') {
    name2 = document.getElementById("nameInput2").value;
    model2 = document.getElementById("form2").elements["model2"].value;
    bot2 = new Robot(name2, model2);
    bot = bot2;
  }
  document.getElementById(div).innerHTML = displayBot(bot);
}

function displayBot(bot) {
  //This function displays a robot's message upon creation
  //Inputs: bot - a robot object
  //Returns: mssg - the robot's message
  if (!bot.name) { //null check
    window.alert("Please enter your robot's name.")
  } else if (!bot.model) {
    window.alert("Please select your robot's model. ")
  };
  let mssg = `My name is ${bot.name}, model ${bot.model}. I am `;
  if (bot.stats.friendly) {
    mssg += "a friendly bot. Nice to meet you!";
  } else {
    mssg += "an unfriendly bot. Fear me.";
  };
  return mssg;
}

function assignTasks(bot1, bot2) {
  //This function assigns a robot different tasks by copying from the TASK object and updates the Robot.tasks attribute with a list of 5 tasks.
  //Inputs: bot1 - robot object
  //        bot2 - robot object
  //Returns: none
  let tasks;
  if (bot1.getFriendly() & bot2.getFriendly()) {
    //let's alternate tasks
  } else if (bot1.getFriendly()) {
    //bot 2 is unfriendly: loops through and gets all the tasks with max points
    //bot1 takes whatever's leftover
  } else { //bot 1 is unfriendly

  }
  this.tasks = tasks;
}


//ROBOT CONSTRUCTOR & ASSOCIATED METHODS
function Robot(name, model) {
  this.name = name;
  this.model = model;
  this.tasks = [];
  this.friendly = MODELS[model];
  // stats is an object with attributes
  //  { maxPoints: boolean, maxTasks: boolean, friendly: boolean

  function doTasks() {
    let points = 0;
    for(let i=0; i < this.tasks.length; i++) {
      //log the task when completed
      updateTaskList(this.tasks.description);
      points += this.tasks.points;
      displayTaskList();
      console.log(myArray[i]);
    }
    //for each task in this.tasks

    //print
  }


}
