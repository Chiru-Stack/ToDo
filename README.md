# To-Do List App

The To-Do List App is a feature-rich application built with **Node.js, Express, MongoDB, and the EJS templating engine**, designed to streamline task management.

![todo_app_preview](https://github.com/Chiru-Stack/ToDo/assets/65329366/3e810143-7dbd-46d5-a21d-1bea26a731dc)

## Prerequisites

Before running this project, please ensure that you have the following software installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/en/download "Node.js Download")

- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community "MongoDB Download")

## Installation

To set up the application, follow these steps:

1. Clone the repository to your local machine using your terminal:

   ```bash
   git clone https://github.com/Chiru-Stack/ToDo.git

    Navigate to the project directory:

    bash

cd ToDo

Install the required dependencies:

bash

npm install

Install additional packages:

bash

    npm install mongoose lodash

Getting Started

To run the To-Do List App, follow these instructions:

    Open a new PowerShell window.

    Start MongoDB:

    bash

mongod

Open another PowerShell window.

Launch the MongoDB shell:

bash

mongosh

Open another PowerShell window and navigate to the project directory:

bash

cd ToDo

Start the application using nodemon:

bash

    nodemon .\app.js

    Open a web browser and go to localhost:3000 to access the application. You can use localhost:3000/work or any custom path to create new to-do lists.

Usage

    Home Page (http://localhost:3000): The default page displays the "Today" list. You can add new items by typing in the input field and clicking the "+" button.

    Custom Lists: Create custom lists by adding a name to the URL (e.g., http://localhost:3000/work). Add items to custom lists and access them using the specified name.

    Deleting Items: To delete an item, click the checkbox next to it. It will be marked as completed and automatically removed from the list.

    About Page (http://localhost:3000/about): This page provides information about the To-Do List application.

Project Structure

The project structure is as follows:

    app.js: The main entry point of the application. It configures the server, sets up the routes, and connects to the database.

Models: The "app.js" file contains Mongoose models for the database schema:

    Item: Model for individual to-do list items.

    List: Model for custom lists.

    public: This directory contains static files such as CSS stylesheets.
        styles.css: Contains the CSS styles for the application.

    views: This directory contains EJS templates used to render HTML pages.
        header.ejs: Header template included in other EJS files.
        footer.ejs: Footer template included in other EJS files.
        list.ejs: Template for the to-do list page.
        about.ejs: Template for the about page.

Acknowledgments

This project was developed using Node.js, Express, MongoDB, and the EJS templating engine. Special thanks to the authors and contributors of these technologies for their valuable work. Additionally, gratitude is extended to my instructor Angela Yu for her guidance and support during the project's development.
🚀 About Me

    Undergraduate Student at Vellore Institute of Technology (Vellore)

Contact Details

    LinkedIn: @chiranjeevikaranki
