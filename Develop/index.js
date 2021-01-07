const inquirer = require("inquirer");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
inquirer.prompt(questions.then((response)=> {
fs.appendFileSync("README.md",("#" + response.repoName )+  `\n`, function(err) {
    if (err) {
        console.log(err)
    }
    else {
        console.log("Buyah!!")
    }
})
fs.appendFileSync("README.md", ("This application was developed by: " + response.githubName + `\n`) + `\n`, function(err){
    if (err) {
        console.log(err)
    }
    else {
        console.log("Buyah!!")
    }

})
fs.appendFileSync("README.md", ( response.description) + `\n`, function(err){
    if (err) {
        console.log(err)
    }
    else {
        console.log("Buyah!!")
    }

})
}}




// function call to initialize program
init();


