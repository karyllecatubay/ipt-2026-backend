# Final Project: Full-Stack Authentication System Deployment

## Live Deployment

- **Frontend:** https://ipt-2026-frontendd.onrender.com
- **Backend:** https://ipt-2026-backend-ujcl.onrender.com
- **Swagger Docs:** https://ipt-2026-backend-ujcl.onrender.com/api-docs

---

## Overview

A simple authentication REST API built with Node.js, TypeScript, Express, Sequelize, and JWT.

---

## Features

- Email Sign Up and Verification
- JWT Authentication with Refresh Tokens
- Role-Based Authorization (Admin & User)
- Forgot Password and Reset Password
- Admin Panel for Managing Accounts

---

## Tech Stack

### Frontend
- Angular 21
- Bootstrap 5

### Backend
- Node.js + TypeScript
- Express.js
- MySQL + Sequelize (Aiven)

### Authentication & Services
- JWT Authentication
- Resend (Email Service)

### Deployment
- Render

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the backend root directory:

```env
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=

JWT_SECRET=

RESEND_API_KEY=

CORS_ORIGIN=http://localhost:4200
```

> Never commit your `.env` file to GitHub.

---

### 3. Start Development Server

```bash
npm run start:dev
```

---

### 4. Build for Production

```bash
npm run build
```

---

### 5. Open Swagger API Documentation

Visit:

```txt
https://ipt-2026-backend-ujcl.onrender.com/api-docs
```

---

## Production Deployment (Render)

Set the following environment variables in Render:

```env
NODE_ENV=production

JWT_SECRET=your_secure_secret

CORS_ORIGIN=https://ipt-2026-frontendd.onrender.com

DB_HOST=your_aiven_host
DB_PORT=your_aiven_port
DB_USER=your_aiven_user
DB_PASSWORD=your_aiven_password
DB_NAME=your_database_name

RESEND_API_KEY=your_resend_api_key
```

---

## API Endpoints

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | `/accounts/register` | Public | Register new account |
| POST | `/accounts/verify-email` | Public | Verify email with token |
| POST | `/accounts/authenticate` | Public | Login and get JWT token |
| POST | `/accounts/refresh-token` | Cookie | Get new JWT token |
| POST | `/accounts/revoke-token` | JWT | Revoke refresh token |
| POST | `/accounts/forgot-password` | Public | Request password reset |
| POST | `/accounts/validate-reset-token` | Public | Validate reset token |
| POST | `/accounts/reset-password` | Public | Reset password |
| GET | `/accounts` | Admin | Get all accounts |
| GET | `/accounts/:id` | JWT | Get account by ID |
| POST | `/accounts` | Admin | Create account |
| PUT | `/accounts/:id` | JWT | Update account |
| DELETE | `/accounts/:id` | JWT | Delete account |

---

## How Authentication Works

1. Register an account
2. Verify email using verification token
3. Login to receive authentication tokens
4. Access protected routes using JWT Bearer Token
5. Use refresh token to generate a new JWT when expired

### Token Expiration

- JWT Access Token: **15 minutes**
- Refresh Token: **7 days**

---

## Notes

- The first registered account is automatically assigned the `Admin` role
- All succeeding accounts are assigned the `User` role by default
- Sensitive credentials are stored securely using environment variables
- No secrets are hardcoded in the application
- Swagger documentation is available for API testing and development