# Backend Project

A Node.js/Express backend application with Prisma ORM for database management.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A database system (PostgreSQL, MySQL, SQLite, or SQL Server)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory of the project:

```bash
touch .env
```

Add the following environment variables to your `.env` file:

```env
# Database connection string
# Replace with your actual database URL
DATABASE_URL="mysql://username:password@localhost:3306/database_name"
```

### 4. Database Setup with Prisma

Prisma requires additional setup steps to work with your database:

#### Generate Prisma Client

```bash
npx prisma generate
```

#### Run Database Migrations

```bash
npx prisma db push
```

### 5. Run the Application

For development with hot reload:

```bash
npm run dev
```

For production build and start:

```bash
npm run build
npm start
```

The server should now be running on the default port (usually `http://localhost:3000` unless configured otherwise).

## Available Scripts

- `npm run dev` - Starts the development server with hot reload using tsx
- `npm run build` - Compiles TypeScript to JavaScript
- `npm start` - Runs the compiled JavaScript application

## Prisma Commands

Here are some useful Prisma commands you might need:

```bash
# View your database in Prisma Studio
npx prisma studio

# Reset your database (WARNING: This will delete all data)
npx prisma migrate reset

# Generate Prisma client after schema changes
npx prisma generate

# Apply schema changes to database
npx prisma db push

# Create and apply a new migration
npx prisma migrate dev --name migration_name
```

## Environment Variables

Make sure to set up the following environment variables in your `.env` file:

| Variable | Description | Required |
|----------|-------------|----------|
