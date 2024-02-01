const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");
const {writeFile} = require("fs/promises");
const fs = require("fs");

// this is an array of question that prompt user answer details of shape
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters:',
        validate: function (text) {  
            // this validate will throw error if user input invalid values     
            if(text.length>3)
        {
            //console.log("\nMust enter a value of no more than 3 characters");
           // return false;
           throw new Error('\nMust enter a value of no more than 3 characters long!!!');
        }
        else
        return true;       
        }
    }
    ,
    {
        type: 'input',
        name: 'textColor',
        message: 'Please choose a color for text:'

    },
    {
        type: 'list',
        name: 'shapeType',
        message: "Please choose a following shape type:",
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color for the shape you chose:",
    },


];

// this will trigger inquirer.prompt
const promptUser = (dataInquiry) => {
    return inquirer.prompt(dataInquiry);
  };
  

 
const init = () => {
    promptUser(questions)
  
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then(function(answers) {
    
        writeFile(`examples/logo-${answers.shapeType}.svg`,geneRateShape(answers)) 
        .then(() => console.log(`Successfully created logo ${answers.shapeType}.svg`))
        .catch((err) => console.error(err));
        
      })

  };
  init();

 
//this class will create shapes
  function geneRateShape(response) {

//return `${response.shapeType}"----"${response.shapeColor}"----"${response.text}"----"${response.textColor}"----"`;
    //using several if statements to match with the user chose
    if (response.shapeType == 'Circle') {
        var userShape = new Circle (response.shapeType, response.shapeColor, response.text,response.textColor)
       // console.log(userShape);
       return userShape.render();
    }
    if (response.shapeType == 'Square') {
        var userShape = new Square (response.shapeType='rect', response.shapeColor, response.text,response.textColor)
       // console.log(userShape);
       return userShape.render();
    }
    if (response.shapeType == 'Triangle') {
        var userShape = new Triangle (response.shapeType='polygon', response.shapeColor, response.text,response.textColor)
       // console.log(userShape);
       return userShape.render();
    }


 };



