# Growx Trading Platform

Growx is a real-time trading platform where users can view market trends, place buy/sell orders, and track trade history.

## Project Structure

- `backend/`: Spring Boot application managing authentication, trade data, and real-time updates.
- `frontend/`: React application providing the user interface.

## Prerequisites

- Java 17+
- Maven
- Node.js & npm

## Getting Started

### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Build and run the application using Maven:
   ```bash
   mvn spring-boot:run
   ```
   The backend server will start on `http://localhost:8080`.

### Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`.

## Features

- **Real-time Market Trends**: View live updates of stock/commodity prices.
- **Order Management**: Place buy and sell orders.
- **Trade History**: Track your past transactions.
- **User Authentication**: Secure login and registration.
