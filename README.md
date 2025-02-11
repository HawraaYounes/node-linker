# Dynamic Graph with React Flow - Next.js Application

This project is a **Next.js** application that allows users to dynamically add and edit nodes in a graph using **React Flow**. The nodes support two types:
- **User Node**: Contains a text input for entering a username.
- **Habit Node**: Contains a dropdown menu with selectable options (e.g., Reading, Exercise,Meditation).

The application includes functionality for adding, editing, and linking nodes, and ensures proper form validation using **react-hook-form** and **zod**.

## Features

- **Add Nodes**: Select a node type (User or Habit) and provide its properties to add it to the graph.
- **Edit Nodes**: Click on an existing node to open a side panel and update its properties.
- **Automatic Edge Creation**: Each newly added node is automatically linked to the previously added node.
- **Form Validation**: Ensures proper validation for node names and user input (with `react-hook-form` and `zod`).
  - **Node Name**: Required, 3–20 characters.
  - **User Node Username**: Required, 3–50 characters.
  - **Habit Node Dropdown**: Required, valid predefined options (e.g., Reading, Exercise).

## Technologies Used

- **Next.js**: Framework for building React applications.
- **React Flow**: A library for creating and managing graphs and nodes.
- **react-hook-form**: A library for handling form validation and submission.
- **zod**: A schema validation library used for validating form inputs.
- **TailwindCSS**: For styling and layout.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/HawraaYounes/node-linker.git
   cd node-linker

2. **Install Dependencies**:
    ```bash
    npm install

1. **Run the development server**:
    ```bash
    npm run dev
    Open http://localhost:3000 in your browser to view the app.