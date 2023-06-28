const fs = require('fs'); 
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const questions = require('./lib/questions');
const { shape, circle, triangle, square } = require("./lib/shapes");

prompt(questions)
  .then((answers) => {
    let shapeChoice;
    if (answers.shape === "circle") {
      shapeChoice = new circle(answers.shapeColor);
    } else if (answers.shape === "triangle") {
      shapeChoice = new triangle(answers.shapeColor);
    } else if (answers.shape === "square") {
      shapeChoice = new square(answers.shapeColor);
    }
    // created a variable for the renderLogo method from shapes.js for readability
    const generatedSVG = generateLogo(answers.textColor, shapeChoice);
    return writeFile("./examples/exampleLogo.svg", generatedSVG);
  })
  .then(() => console.log("Generated exampleLogo.svg"))
  .catch((err) => {
    console.log(err);
    console.log("Unable to write the file exampleLogo.svg");
  });
