const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

let employeeList = [];
let currentEmployee = 'Manager';
let newElement;
let newEmployee;

// Queries the user information about their team.
const getEmployeeInfo = (empType) => {
    inquirer.prompt ([
        {
            type: 'input',
            message: `What is the name of your ${empType}?`,
            name: 'empName'
        },
        {
            type: 'input',
            message: 'What is their employee ID?',
            name: 'empID'
        },
        {
            type: 'input',
            message: 'What is their email address?',
            name: 'empEmail'
        },
        {
            type: 'input',
            message: `What is their office number?`,
            name: 'officeNum',
            when: () => empType === 'Manager',
        },
        {
            type: 'input',
            message: `What is their GitHub username?`,
            name: 'githubUsername',
            when: () => empType === 'Engineer',
        },
        {
            type: 'input',
            message: `What school do they go to?`,
            name: 'internSchool',
            when: () => empType === 'Intern',
        },
        {
            type: 'list',
            message: 'Would you like to add another employee to your team?',
            choices:  [
                'Engineer','Intern', 'I am finished building my team'
            ],
            name: 'newEmpSelection'
        }
    ])
    .then((data) => {
        createEmployee(data, currentEmployee);
        updateEmployeeArray(newEmployee);
        currentEmployee = data.newEmpSelection;
        if (currentEmployee === 'I am finished building my team'){
        //Create html file
        const finalREADMEText = createHTML(parseEmpList(employeeList));
        fs.appendFile('createdhtml.html', finalREADMEText, (err) =>
        err ? console.error(err) : console.log('File Created/Updated')
        );
        }else{
            getEmployeeInfo(data.newEmpSelection);
        }
    });
}


// Pushes a newly created employee onto the list of employees array.
const updateEmployeeArray = (newEmployee) => {
    employeeList.push(newEmployee);
}

// Creates the HTML needed for the created file.
const createHTML = empList => 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossorigin="anonymous"
  />
  <link rel="stylesheet" href="./style.css">
    <title>Team Builder</title>
</head>
<body>
    <header>
        <div class="jumbotron jumbotron-fluid bg-danger">
            <div class="container">
            <h1 class="display-5 text-white d-flex justify-content-center">My Team</h1>
        </div>
          </div>
    </header>
    <section class="container-fluid my-5">
            <div id="myEmployeeArea">
                <div class="row d-flex justify-content-center">
                    ${empList}
                </div>
            </div>
          </div>
          </div>
      </section>
</body>
</html>
`

// Parses through the list of employees on the team and creates an article for them on the HTML.
const parseEmpList = employeeList => {  
    let elementList = [];
    employeeList.forEach(element => {
        switch(element.constructor.name){
            case 'Manager':
            newElement = `
            <article class="employeeInfo col-12 col-md-6 col-xl-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body bg-primary text-light">
                  <h5 class="card-title">${element.getName()}</h5>
                  <p class="card-text"><i class="fas fa-mug-hot"></i> Manager</p>
                </div>
                <ul class="list-group">
                  <li class="list-group-item">ID: ${element.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                  <li class="list-group-item">Office Number: ${element.getOfficeNumber()}</li>
                </ul>
              </div>
            </article>
                `;
                elementList += newElement;
            break;
            case 'Engineer':
                newElement = `
                <article class="employeeInfo col-12 col-md-6 col-xl-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-body bg-primary text-light">
                      <h5 class="card-title">${element.getName()}</h5>
                      <p class="card-text"><i class="fas fa-glasses"></i> Engineer</p>
                    </div>
                    <ul class="list-group">
                      <li class="list-group-item">ID: ${element.getId()}</li>
                      <li class="list-group-item">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                      <li class="list-group-item">GitHub: <a href="https://github.com/${element.getGitHubUsername()}" target="_blank">${element.getGitHubUsername()}</a></li>
                    </ul>
                  </div>
                </article>
                    `;
                    elementList += newElement;
            break;
            case 'Intern':
                newElement = `
                <article class="employeeInfo col-12 col-md-6 col-xl-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-body bg-primary text-light">
                      <h5 class="card-title">${element.getName()}</h5>
                      <p class="card-text"><i class="fas fa-user-graduate"></i> Intern</p>
                    </div>
                    <ul class="list-group">
                      <li class="list-group-item">ID: ${element.getId()}</li>
                      <li class="list-group-item">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                      <li class="list-group-item">School: ${element.getSchool()}</li>
                    </ul>
                  </div>
                </article>
                    `;
                    elementList += newElement;
            break;
        }
    })
    return elementList;
}

// Creates an instance of an employee based on its employee type.
const createEmployee = (data, currentEmployee) => {
    switch (currentEmployee) {
        case 'Manager':
            newEmployee = new Manager(data.empName, data.empID, data.empEmail, data.officeNum);
        break;
        case 'Engineer':
            newEmployee = new Engineer(data.empName, data.empID, data.empEmail, data.githubUsername);
        break;
        case 'Intern':
            newEmployee = new Intern(data.empName, data.empID, data.empEmail, data.internSchool);
        break;
    }
}

getEmployeeInfo(currentEmployee);
