# Assignment-12 Category- 19

# TaskEarn

TaskEarn is a dynamic micro-tasking and earning platform designed to connect workers and buyers, providing opportunities to complete small tasks for rewards. This platform supports seamless task management, task creation, and platform administration.

## Admin Credentials
- **Username**: admin@gmail.com
- **Password**: 123456

## Live Site URL
[TaskEarn Live Site](https://taskearn-9782e.web.app)

## GitHub Repositories
- **Client Side**: [Client Repo](https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-khairul1036)
- **Server Side**: [Server Repo](https://github.com/Programming-Hero-Web-Course4/b10a12-server-side-khairul1036)


## Features

- **Multi-Role System**: Supports three distinct user roles: Worker, Buyer, and Admin, each with specific functionalities to ensure a streamlined experience.
  
- **Responsive Design**: Fully responsive layout for desktop, tablet, and mobile devices to provide a consistent user experience across all platforms.
  
- **Secure User Authentication**: Implements secure registration and login processes with email and password, and a Google Sign-In option for quick access.
  
- **Task Management**: Allows buyers to create tasks with detailed requirements and workers to view and complete these tasks for rewards.
  
- **Payment System**: Integrated Stripe-based payment system for coin purchases by buyers, ensuring secure and straightforward transactions.
  
- **Earning and Withdrawal**: Workers can withdraw their earnings once they reach a minimum coin threshold, with multiple payment methods supported.
  
- **Admin Control**: Comprehensive admin dashboard for managing users, tasks, and withdrawal requests, ensuring smooth platform operations.
  
- **Notification System**: Real-time notifications for task status updates, submission reviews, and payment processing to keep users informed.
  
- **Pagination and Filtering**: Advanced search and filtering options for tasks, along with paginated views to enhance usability and navigation.
  
- **Data Security**: Environment variables used to hide sensitive information like Firebase config keys and MongoDB credentials, ensuring data security.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase
- **Payment Gateway**: Stripe
- **Hosting**: Firebase (Client), Vercel (Server)

## NPM Package Versions

- **React**: 17.0.2
- **React Router DOM**: 5.3.0
- **Axios**: 0.24.0
- **Express**: 4.17.1
- **Mongoose**: 5.13.8
- **Firebase**: 9.1.3
- **Stripe**: 8.186.0
- **dotenv**: 10.0.0
- **bcrypt**: 5.0.1
- **jsonwebtoken**: 8.5.1

## Setup Instructions

### Client Side

1. Clone the repository:
   ```bash
   git clone https://github.com/user/taskearn-client.git
   cd taskearn-client

2. Install dependencies:
   ```bash
   npm install

3. Create a `.env.local` file in the root directory and add your Firebase configuration details:
   ```bash
   REACT_APP_API_KEY=your-api-key
   REACT_APP_AUTH_DOMAIN=your-auth-domain
   REACT_APP_PROJECT_ID=your-project-id
   REACT_APP_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_APP_ID=your-app-id
   VITE_IMGBB_API_KEY=your-imgbb-api-key
   VITE_STRIPE_PUBLIC_KEY=stripe-public key
   VITE_API_URL=your-server-api-url

4. Start the development server:
   ```bash
   npm run dev

### Server Side

1. Clone the repository:
   ```bash
   git clone https://github.com/user/taskearn-client.git
   cd taskearn-server

2. Install dependencies:
   ```bash
   npm install

3. Create a `.env` file in the root directory and add your environment variables:
   ```bash
   DB_USER=your-mongodb-user-name
   DB_PASS=your-mongodb-password
   JWT_SECRET=your-jwt-secret
   STRIPE_SECRET_KEY=your-stripe-secret-key

4. Run server:
   ```bash
   nodemon index.js

Happy Coding! 🚀