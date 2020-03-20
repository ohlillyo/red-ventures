import random
import time

taskList = [('do the dishes', 1000), ('sweep the house',3000), ('do the laundry',10000), \
    ('take out the recycling',4000), ('make a sammich',7000), ('mow the lawn',20000), \
    ('rake the leaves',18000), ('give the dog a bath',14500), ('bake some cookies',8000), \
    ('wash the car',20000)]

#CLASSES
class Robot:
    def __init__(self, name, model):
        self.name = name
        self.model = model

    #This method assigns 5 tasks to the robot from the end of a given list
    #Inputs:
    #   taskList - a list of tuples with the format ('task description', ETA) with
    #              types (string, int)
    #Returns:
    #   None
    def doTasks(self, taskList):
        i = 0
        sum = 0
        while i < 5 and taskList:
            task, delay = taskList.pop()
            time.sleep(delay / 1000)
            print(f'Completed task: {task}')
            sum += delay / 1000
            i += 1
        print(f"I, {self.name}, have completed my tasks in {sum} seconds.\n")

##OTHER METHODS
def robotName():
    #This method returns the robot's name from User Input
    return input("Please enter your robot's name: \n")

def robotType():
    #This method returns the robot's model from User Input
    robots = ['Unipedal', 'Bipedal','Quadrupedal','Arachnid', 'Radial', 'Aeronautical']
    ind = input("Please enter the number of your robot's model: \n" \
        "1: Unipedal\n2: Bipedal\n3: Quadrupedal\n4: Arachnid\n5: Radial\n6: Aeronautical\n")
    try:
        return robots[int(ind)-1]
    except:
        print("Sorry, please enter a valid number.")

def makeBot():
    try:
        name = robotName()
        type = robotType()
        bot = Robot(name, type)
        print(f"I am {bot.name}, a {bot.model} robot.\n")
        return bot
    except:
        print("Sorry, your bot was unable to be created. Please try again.\n")


bot = makeBot()
bot.doTasks(taskList)
