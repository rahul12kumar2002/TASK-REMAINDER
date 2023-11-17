# 📅 Task Reminder App

This Task Reminder application is built on the MERN (MongoDB, Express, React, Node.js) stack, allowing users to manage tasks and receive daily reminders about pending tasks via email.

## Features

✅ User Authentication using JWT for secure access  
🔐 Complete hashing and salting for password privacy  
📧 Uses SendGrid API for sending daily task reminder emails  
⏰ Cron job scheduled at 8 AM daily to notify users of due tasks  
👤 Maintains three separate models: Profile, Tasks, and Users  
📝 MIT License for open-source use

## Setup

### Prerequisites

- React.js
- Node.js
- MongoDB
- SendGrid API Key

### Installation

1. Clone the repository: `git clone <repository_url>`
2. Install dependencies: `npm install`
3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add MongoDB URI, SendGrid API Key, jwt secret key and other necessary variables

### Usage

1. Run the server: `npm start`
2. Access the application in your browser: `http://localhost:3000`


## API Endpoints

- `POST /api/users/register`: Register a new user
- `POST /api/users/login`: User login and authentication
- `GET /api/profile`: Get user profile details
- `POST /api/tasks/add`: Add a new task
- `GET /api/tasks/:id`: Get task details by ID
- `PUT /api/tasks/:id`: Update task details
- `DELETE /api/tasks/:id`: Delete a task


## License

This project is licensed under the [MIT License](LICENSE).


# Screenshots :
![image](./client/src/img/Screenshot%202022-06-06%20173603.jpg)
![image](./client/src/img/Screenshot%202023-11-17%20164151.png)
![image](./client/src/img/Screenshot%202023-11-17%20163518.png)
![image](./client/src/img/Screenshot%202023-11-17%20163519.png)
![image](./client/src/img/Screenshot%202023-11-17%20163723.png)
