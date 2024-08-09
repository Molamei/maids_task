Overview
This project is an Angular application designed to demonstrate proficiency in Angular (7+). The application features a dynamic user dashboard that allows users to view a list of users, search for specific users, and navigate to detailed user information pages. The app includes advanced features like state management, observables, and a loading screen that appears when the user data is being fetched or when the users array is empty.

Features
User List: Displays a paginated list of users fetched from an external API.
User Details: Allows navigation to a detailed page for each user, showing additional information.
Search Functionality: Provides instant search capability for users by their ID.
Loading Screen: Displays a loading indicator when user data is being fetched or when the users array is empty.
State Management: Utilizes state management techniques for efficient data handling.
Responsive Design: Ensures the application is accessible and visually appealing on different devices.
Technologies Used
Angular (7+): The main framework used to build the application.
Bootstrap: Used for styling and pagination.
RxJS: Used for handling asynchronous operations.
Angular CLI: Used for project setup and management.
Angular Material (Optional): Can be used for UI components.
Getting Started
Prerequisites
Node.js (v12 or higher)
Angular CLI (v7+)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/MoLamei/maids_task.git
Navigate to the project directory:

bash
Copy code
cd maids_task
Install the dependencies:

bash
Copy code
npm install
Running the Application
To run the application locally, use:

bash
Copy code
ng serve
Navigate to http://localhost:4200/ in your web browser to view the application.

Building the Application
To build the project for production, use:

bash
Copy code
ng build --prod
The build artifacts will be stored in the dist/ directory.

Usage
User List
The user list is displayed on the home page, showing six users per page.
Click on a user's name to view more details on a separate page.
User Search
Use the search bar at the top of the page to instantly search users by their ID.
The search results update as you type.
Loading Screen
A loading screen is displayed when the user data is being fetched or if the users array is empty.
State Management
The application uses state management to handle the loading and display of user data efficiently.