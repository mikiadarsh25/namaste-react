## React App Setup Guide

This guide walks you through creating a React application from scratch using Parcel bundler.

## Prerequisites
- Node.js and npm installed on your system
- Basic understanding of React concepts

## Step 1: Project Initialization
```bash
# Create a new directory for your project
mkdir my-react-app
cd my-react-app

# Initialize your project
npm init -y
```

## Step 2: Install Dependencies
```bash
# Install Parcel bundler as a development dependency
npm install -D parcel

# Install React and React DOM
npm install react react-dom
```

## Step 3: Create Project Files

### Create index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="./src/App.js"></script>
</body>
</html>
```

### Create src/App.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    return (
        <div>
            <h1>Hello React!</h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

## Step 4: Configure Package.json
Add these scripts to your package.json:
```json
{
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  }
}
```

## Step 5: Running the Application

### Development Mode
```bash
# Either use
npm run start
# Or
npx parcel index.html
```

### Production Build
```bash
# Either use
npm run build
# Or
npx parcel build index.html
```

## Important Notes
- Ensure all React files are placed in a `src` directory for better organization
- Parcel automatically handles:
  - Babel configuration
  - Hot Module Replacement (HMR)
  - Asset optimization
- The development server typically runs on `http://localhost:1234`

## Common Issues
- If you get browser compatibility errors, add a `.browserslistrc` file
- Ensure all import/export statements use ES6 syntax
- Clear the `.parcel-cache` directory if you encounter bundling issues

## Additional Configuration (Optional)
- Add `.gitignore` file:
  ```
  node_modules
  dist
  .parcel-cache
  ```
- Add project metadata to package.json (author, description, license)

## Next Steps
- Add CSS/SCSS files for styling
- Configure ESLint and Prettier
- Add testing framework (Jest, React Testing Library)
