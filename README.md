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

1. Clone the repository: `git clone https://github.com/sarthak107/Task-Reminder.git`
2. Install dependencies: `npm install`
3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add MongoDB URI, SendGrid API Key, jwt secret key and other necessary variables

### Usage

1. Run the server: `npm run dev`
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

![image](https://github.com/sarthak107/Task-Reminder/assets/77851794/c896a6e7-c656-43f5-a033-f4081371f50c)
![image](https://github.com/sarthak107/Task-Reminder/assets/77851794/6f34bb31-b658-4055-8454-fc7da9187a63)
![image](https://github.com/sarthak107/Task-Reminder/assets/77851794/a8f10947-d416-48c7-857a-7383ebbe0ca5)
![image](https://github.com/sarthak107/Task-Reminder/assets/77851794/a00e0dc5-483c-4006-8e20-066e4610f506)
![image](https://github.com/sarthak107/Task-Reminder/assets/77851794/c2cfc10e-370b-4fd7-a4c7-eefeb8553ca0)
