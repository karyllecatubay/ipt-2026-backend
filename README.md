Final Project: Full-Stack Authentication System Deployment
A simple authentication REST API built with Node.js, TypeScript, Express, Sequelize, and JWT.
Live Deployment

Frontend URL: https://ipt-2026-frontendd.onrender.com
Backend URL: https://ipt-2026-backend-ujcl.onrender.com
Swagger API Docs: https://ipt-2026-backend-ujcl.onrender.com/api-docs

Tech Stack

Node.js + TypeScript — runtime and language
Express — web framework
MySQL + Sequelize (Aiven) — database and ORM
JWT — authentication tokens
Resend — email sending (HTTPS API)
Deployed on Render

Setup

Install dependencies — run npm install
Configure environment variables — create a .env file with DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, JWT_SECRET, RESEND_API_KEY, CORS_ORIGIN. Never commit .env to GitHub.
Start the server — run npm run start:dev
Open Swagger UI — go to https://ipt-2026-backend-ujcl.onrender.com/api-docs

Production Deployment (Render)

NODE_ENV: production
JWT_SECRET: your secure secret
CORS_ORIGIN: https://ipt-2026-frontendd.onrender.com
DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME: your Aiven credentials
RESEND_API_KEY: your Resend API key

API Endpoints
MethodRouteAuthDescriptionPOST/accounts/registerPublicRegister new accountPOST/accounts/verify-emailPublicVerify email with tokenPOST/accounts/authenticatePublicLogin and get JWT tokenPOST/accounts/refresh-tokenCookieGet new JWT tokenPOST/accounts/revoke-tokenJWTRevoke refresh tokenPOST/accounts/forgot-passwordPublicRequest password resetPOST/accounts/validate-reset-tokenPublicValidate reset tokenPOST/accounts/reset-passwordPublicReset passwordGET/accountsAdminGet all accountsGET/accounts/:idJWTGet account by IDPOST/accountsAdminCreate accountPUT/accounts/:idJWTUpdate accountDELETE/accounts/:idJWTDelete account
How Authentication Works

Register → verify email → login
Login returns a JWT token (expires in 15 min) and a refresh token (expires in 7 days)
Use JWT as Bearer Token in Authorization header for protected routes
Use the refresh token to get a new JWT when it expires

Notes

First registered account is automatically Admin
All other accounts are User by default
No sensitive data hardcoded — all secrets handled via environment variables on Render