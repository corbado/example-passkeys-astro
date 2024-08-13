# Astro Passkey Example App

This is a sample implementation of the Corbado web-js package integrated into a web application built with Astro.

Please see the full [blog post](https://www.corbado.com/blog/astro-passkeys) to understand the detailed steps needed to integrate passkeys into Astro apps.

## File Structure

- `src/components/PasskeyList.astro`: Component for displaying the list of passkeys.
- `src/pages/Login.astro`: Page component for the sign-up / login screen.
- `src/pages/Profile.astro`: Page component for the user profile information shown after successful authentication.

## Setup

### Prerequisites

1. Follow the steps in [Getting started](https://docs.corbado.com/) to create and configure a project in the [Corbado developer panel](https://app.corbado.com/#login-init).
2. Add your project's ID to an environment file as shown in the `.env.example` file.
3. Ensure you have Node.js and npm installed to run the application.

### .env File

Create a `.env` file in the root of your project and add your Corbado project ID:

```plaintext
PUBLIC_CORBADO_PROJECT_ID=your_corbado_project_id
```

### Usage

1. **Install Dependencies**:

   ```bash
   npm install

2. **Run the Project Locally**:
   ```bash
   npm run dev
   ```
Your application will start at `http://localhost:4321`. You can now see the authentication UI and test the passkey login functionality.
