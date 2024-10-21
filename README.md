# Motor Insurance Pricing API

This is a Node.js API built with NestJS and PostgreSQL to handle motor insurance pricing queries.
It allows users to fetch insurance prices based on the product ID and location, and includes administrative functionalities for maintaining product information. The API is also Dockerized for easy deployment.

## Features

- CRUD Operations for Products: Add, update, delete, and retrieve product prices.
- Role-Based Access: Only admins can access certain endpoints (like adding or modifying product prices).
- PostgreSQL Database: For storing and managing product data.
- Swagger Integration: Auto-generated API documentation.
- Token-Based Authentication: OAuth2 Google sign-in for secure access.
- Dockerized Setup: Easily deployable with Docker Compose.
- Database Auto-Creation: Automatically checks and creates the database if it doesn't exist.

## Prerequisites

Make sure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup Instructions

Follow these steps to get the project up and running using Docker.

### 1. Clone the Repository

```bash
git clone https://github.com/YQWOH/motor-insurance-api.git
cd motor-insurance-api
```

### 2. Set Up Environment Variables

No need to create .env files directly if you're using Docker Compose. The environment variables are already defined in docker-compose.yml.

However, for local development, you can create an .env file with the following variables:

POSTGRES_HOST=db
POSTGRES_PORT=5432
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=MOTOR_INSURANCE_WEBSITE

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-secret

### 3. Dockerize the Application

You can easily spin up the API and MySQL database using Docker and Docker Compose.

Build and Start the Containers

```bash
docker-compose up --build
```

This will:

- Build the Docker image for the Node.js API.
- Pull and run the PostgreSQL image.
- Automatically create the MOTOR_INSURANCE_WEBSITE database.
- Link the api container with the db (PostgreSQL) container.

Access the API
Once the containers are running, the API will be accessible at: http://localhost:3001

Access the Swagger Documentation
The Swagger documentation will be available at: http://localhost:3001/api

Access the PostgreSQL Database
You can connect to the PostgreSQL database using a client such as pgAdmin. Use the following credentials:

Host: localhost
Port: 5432
Username: user
Password: your_password (replace your_password with the actual password).
Database: MOTOR_INSURANCE_WEBSITE

### 4. Running the API Locally Without Docker

If you prefer to run the app locally without Docker, follow these steps:

Install PostgreSQL locally and create a database.

Create an .env file with your local database credentials:

```bash
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=your_db_user
POSTGRES_PASSWORD=your_db_password
POSTGRES_DB=MOTOR_INSURANCE_WEBSITE
```

Install dependencies:

```bash
npm install
```

Start the API:

```bash
npm run start:dev
```

The API will be available at http://localhost:3001.

Stopping the Containers
To stop the running containers, press CTRL + C in the terminal or run:

```bash
docker-compose down
```
