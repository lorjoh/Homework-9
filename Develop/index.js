const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "badge",
        message: "Please provide the badges links that you want"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide your project's description"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage"
    },
    {
        type: "input",
        name: "licence",
        message: "Please provide the project licence or your badge link"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide the project tests"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?"
    },
];

// function to write README file
function writeToFile(FileName, data) {
    fs.writeFile(FileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("Buyaah!!! created successfully!");
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function (data) {
            const queryUrl = `https://api.github.com/users/${data.username}`;
           
            axios.get(queryUrl)
                .then(function (response) {
                    const githubData = {
                        Img: response.data.avatar_url,
                        email: response.data.email,
                        profile: response.data.html_url,
                        name: response.data.name
                    };
                    writeToFile("newREADME.md", generateMarkdown(data, githubData));
                })
                
                .catch(function (err) {
                    console.log(err);
                });
        })
}
// function call to initialize program
init();
