# Profile Management -  Project

This project is a full-stack application that helps you Profile Management. It integrates both a frontend (Next js) and backend (Node.js, Express, MongoDB) to manage data and provide an interactive user interface.

## Prerequisites

Before you start, make sure you have the following tools installed on your system:

- **Node.js** (LTS version)
- **MongoDB** (local or cloud database)
- **Git** (for version control)
- **npm** (Node Package Manager, included with Node.js)
- **Visual Studio Code** (or any code editor)

## Setup Instructions

### 1. Clone the Repository

Clone the project to your local machine using Git.

git clone https://github.com/Jamshadj/profileManagement
cd profileManagement

## 2. Create .env files 

cd frontend

create .env and add this 

NEXT_PUBLIC_BASEURL="http://localhost:5000/api"

cd backend

create .env and add this 

MONGO_URI=mongodb://localhost:27017/profileDB
PORT=5000

## 3. Install Backend Dependencies
Navigate to the backend folder and install the required dependencies.

Copy code

cd backend
npm install

add sample data to database

node scripts/seed.js

This script will:

Read the data from backend/utils/sampleData.json

# start
npm run dev 

backend work on http://localhost:5000/


## 4. Install Frontend Dependencies
Now, navigate to the frontend folder and install the dependencies for the React app.

Copy code

cd frontend
npm install



# start
npm run dev 

frontend http://localhost:3000/









