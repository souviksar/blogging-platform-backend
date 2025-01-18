# Blogging Platform

## About the Project

This is a blogging platform application where users can register themselves, create, edit, and delete their blogs, view their own blogs as well as blogs created by others, and leave comments on them.

---

## Features

- Sign up for an account.

- Log in with their credentials.

- Create new blog posts with a title and content.

- View a list of all blog posts with their titles and authors.

- Click on a blog post to view its full content and comments.

- Add comments to blog posts.

- Edit and update their own blog posts.

- Delete their own blog posts.

- Log out.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/souviksar/blogging-platform-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd blogging-platform-backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```env
   NODE_ENV=development
   PORT=4000
   MONGODB_URL=mongodb+srv://MEAN:GkspNVHiEpmOO8AD@test.woia0.mongodb.net/blogging-platform?retryWrites=true&w=majority&appName=test
   JWT_SECRET=f4b8097a-59ed-4f48-85fd-157d43cb6848
   JWT_ACCESS_EXPIRATION_MINUTES=60
   JWT_REFRESH_EXPIRATION_DAYS=30

   ```

### Running in Development Mode

For hot-reloading during development:

```bash
npm run dev
```

---

## Folder Structure

```plaintext
src/
├── controllers/        # Route handlers
├── services/           # Business logic
├── models/             # Mongoose models
├── routes/             # Express routes
├── middlewares/        # Custom middleware
├── utils/              # Utility functions
├── config/             # Configuration files
├── app.js              # Express application setup
└── index.js           # Entry point for the application
```

---

## Technologies Used

- [Node.js](https://nodejs.org)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT (JSON Web Tokens)](https://jwt.io/)
