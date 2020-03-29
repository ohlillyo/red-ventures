export const MODELS = [
  {
  'Unipedal': {
    maxPoints: false,
    maxTasks: false,
    friendly: true,
  },
  'Bipedal': {
    maxPoints: false,
    maxTasks: true,
    friendly: true,
  },
  'Quadrupedal': {
    maxPoints: true,
    maxTasks: false,
    friendly: true,
  },
  'Aeronautical': {
    maxPoints: true,
    maxTasks: true,
    friendly: true,
  },
  'Radial': {
    maxPoints: false,
    maxTasks: true,
    friendly: false,
  },
  'Arachnid': {
    maxPoints: true,
    maxTasks: true,
    friendly: false,
}
];

export const TASKS = [
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
