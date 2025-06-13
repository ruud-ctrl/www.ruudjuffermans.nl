# Personal Website Project

A modern full-stack web application built with Node.js, React, and PostgreSQL.

## Tech Stack

### Frontend
- React (Vite)
- Modern JavaScript (ES6+)
- ESLint for code quality

### Backend
- Node.js
- Express.js
- PostgreSQL database

### Infrastructure
- Docker & Docker Compose for containerization
- PostgreSQL 14 for data persistence

## Prerequisites

Before you begin, ensure you have the following installed:
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/) (for local development)

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone [your-repository-url]
   cd [repository-name]
   ```

2. Start the application using Docker Compose:
   ```bash
   docker-compose up --build
   ```

3. The application will be available at:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3002
   - PostgreSQL: localhost:5432

## Development

### Frontend Development
The frontend is built with React and Vite. To run it locally:

```bash
cd frontend
npm install
npm run dev
```

### Backend Development
The backend is a Node.js application. To run it locally:

```bash
cd backend
npm install
npm start
```

## Project Structure

```
.
├── frontend/           # React frontend application
├── backend/           # Node.js backend application
├── docker-compose.yml # Docker configuration
└── init.sql          # Database initialization script
```

## Environment Variables

The application uses the following environment variables:

### Frontend
- `VITE_API_URL`: Backend API URL (default: http://localhost:3002)

### Backend
- `POSTGRES_HOST`: Database host
- `POSTGRES_USER`: Database user
- `POSTGRES_PASSWORD`: Database password
- `POSTGRES_DB`: Database name
