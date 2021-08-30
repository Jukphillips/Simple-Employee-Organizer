# A Simple Team Profile Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Walkthrough Video

[Click For Video](https://drive.google.com/file/d/1g3QK9QT4LfEi2NvSQQBKjuVJIK36ZoNc/view)

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Description

The project allows the end user to create a team profile, which includes a Manager, engineers, and Interns. It automatically displays cards once one puts in their team info and has distinct difference between each role. The Manager role will display their room number at the bottom, while the engineer will display their github and the Intern will display their school. Each role card has a name, id number, email, and their role/position in the company.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

> npm i

## Usage

One you want to begin inputting your team info type "npm start" to begin the question prompts.

## License

This project is licensed under the MIT license.

## Contributing

Contact me! I'm always will to collaborate.

## Tests

> npm test

## Questions

If you have any questions about the repo, open an issue or contact me directly jukphillips1990@gmail.com. You can find more of my work at my github account: jukphillips1990.
