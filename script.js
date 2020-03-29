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
  },{
    description: 'sweep the house',
    eta: 3000,
  },{
    description: 'do the laundry',
    eta: 10000,
  },{
    description: 'take out the recycling',
    eta: 4000,
  },{
    description: 'make a sammich',
    eta: 7000,
  },{
    description: 'mow the lawn',
    eta: 20000,
  },{
    description: 'rake the leaves',
    eta: 18000,
  },{
    description: 'give the dog a bath',
    eta: 14500,
  },{
    description: 'bake some cookies',
    eta: 8000,
  },{
    description: 'wash the car',
    eta: 20000,
  },
];

//VARIABLES
var name1, model1, bot1;
var name2, model2, bot2;
var taskList = makeTaskList(TASKS);

// FUNCTIONS
function Robot(name, model) {
//This is the robot constructor woot woot
  this.name = name;
  this.model = model;
  this.tasks = ['\nBeginning tasks...'];
  this.friendly = MODELS[model].friendly;

}

function makeTaskList(tasks) {
//This function makes an array of strings from a task object's description in TASKS
//Input: tasks - array of task objects with form { description: str, eta: int, }
//Returns: none
  let arr = [];
  for (let task of tasks) {
    arr.push(' ' + task.description);
  }
  return arr;
}

function logStats(div) {
  //This function creates a new robot based on user specifications, assigns it to either bot1 or bot2, and prints its information.
  //Inputs: div - a string of the element ID to print robot information
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
  console.log(bot)
}

function displayBot(bot) {
  //This function displays a robot's message upon creation
  //Inputs: bot - a robot object
  //Returns: mssg - the robot's message
  if (!bot.name) { //null check
    window.alert("Please enter your robot's name.")
  } else if (!bot.model) {
    window.alert("Please select your robot's model.")
  };
  let mssg = `My name is ${bot.name}, model ${bot.model}. I am `;
  if (bot.friendly) {
    mssg += "a friendly bot. Nice to meet you!<br>";
  } else {
    mssg += "an unfriendly bot. Fear me.<br>";
  };
  return mssg;
}

function battleBots() {
  assignTasks(bot1, bot2);
  doTasks(bot1, bot2);
  console.log("well that was unexpected");
}

function assignTasks(bot1, bot2) {
  //This function assigns a robot different tasks by copying from the
  // TASK object and updates the Robot.tasks attribute with a list of 5
  // tasks for each robot
  //Inputs: bot1 - robot object
  //        bot2 - robot object
  //Returns: none
  if (bot1.friendly & !bot2.friendly) {
    assignFastTasks(bot2, bot1);
  } else if (bot2.friendly){ //bot 1 is unfriendly
    assignFastTasks(bot1, bot2);
  } else {
    assignAltTasks(bot1, bot2);
  }
}

function assignFastTasks(fastBot, slowBot) {
  //This function sorts TASKS in ascending order
  // by eta. It then assigns the 5 fastest tasks to a robot.
  //Inputs: fastBot - robot object that gets the fast tasks
  //        slowBot - robot that gets the slow tasks
  //Returns: none
  let sortedTasks = TASKS.slice(0, TASKS.length);
  sortedTasks.sort( function(a, b) { //sorting, ascending
    return a.eta-b.eta;
  })
  fastBot.tasks.push(sortedTasks.slice(0,5));
  slowBot.tasks.push(sortedTasks.slice(5,10));
}

function assignAltTasks(bot1, bot2) {
  //This function goes down TASKS and alternates assigning robots tasks.
  //Inputs: bot1 - robot object
  //        bot2 - robot object
  //Returns: none
  for (let i = 0; i < 10; i++) {
    if (i%2 === 1) {
      bot1.tasks.push(TASKS[i]);
    } else {
      bot2.tasks.push(TASKS[i]);
    }
  }
}

function doTasks(bot1, bot2) {
//This function alternates between two robots in completing tasks, displays
// respective completed tasks after a time delay, and updates taskList.
//Inputs: bot1 - robot object with tasks in robot.task
//        bot2 - ""
//Returns: none
  let bot1Tasks = bot1.tasks;
  let bot2Tasks = bot2.tasks;
  let taskArr;
  for (let i = 0; i < 10; i++){
    let ind =  Math.floor(i/2);
    if (i%2 === 1) {
      taskArr = bot1Tasks[1]; //accounting for first element in array
      setTimeout(
        function () {
           document.getElementById('stats1').innerHTML += taskArr[ind].description + "<br>"; },
            taskArr[ind].eta
          );
      updateTaskList(taskArr[ind].description);
      displayTaskList();
    } else {
      taskArr = bot2Tasks[1];
      console.log("Bot #2: Iteration "+ ind);
      console.log(taskArr[ind].eta);
      setTimeout(function () {
        printTask(bot2.tasks[1][ind].description + "<br>") },
        taskArr[ind].eta
      );
      updateTaskList(taskArr[ind].description);
      displayTaskList();
    }
    }
}

function printTask(taskDescrip) {
//This function displays a completed task to the robot's assigned display box
//Inputs: task - string of task description
//Returns: none
  document.getElementById('stats2').innerHTML += taskDescrip;
}


function updateTaskList(taskDescrip) {
//This function removes a specified element from taskList, the array of task
// descriptions displayed in the bottommost button.
//Inputs: taskDescrip - string representing the description of the tasks
//Returns: none
  let i = taskList.indexOf(" " + taskDescrip);
  taskList.splice(i, 1);
  var updatedTaskList = taskList;
}

function displayTaskList() {
//This function displays taskList to the #beginBattle button
//Inputs: none
//Returns: none
  document.getElementById('taskDisp').innerHTML = taskList;
  console.log(taskList);
}
