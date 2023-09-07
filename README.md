# React.js Frontend with Rails API Integration

This README provides an overview and instructions for setting up and using a React.js frontend application that communicates with a Ruby on Rails backend API. This application allows users to log in using Devise authentication and provides full CRUD functionality for interacting with a PostgreSQL database.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Setting Up the Backend](#setting-up-the-backend)
  - [Setting Up the Frontend](#setting-up-the-frontend)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) for the frontend.
- [Ruby](https://www.ruby-lang.org/en/documentation/installation/) and [Ruby on Rails](https://rubyonrails.org/) for the backend.
- [PostgreSQL](https://www.postgresql.org/) for the database.
- [Devise](https://github.com/plataformatec/devise) gem for user authentication in the Rails backend.

## Getting Started

# Setting Up the Backend

1. Clone the Rails backend repository:

   ```bash
   git clone <backend-repo-url>
   ```

2. Navigate to the backend directory:

   ```bash
   cd <backend-directory>
   ```

3. Install gem dependencies:
 
   bundle install
  
4. Set up the PostgreSQL database and configure the `config/database.yml` file with your database settings.

5. Generate Devise user authentication:


   rails generate devise:install
   rails generate devise User
   rails db:migrate
   

6. Start the Rails server:


   rails server


Your Rails API is now running at `http://localhost:3000`.

## Setting Up the Frontend

1. Clone the React frontend repository:

   git clone <frontend-repo-url>


2. Navigate to the frontend directory:

 
   cd <frontend-directory>
  

3. Install npm/yarn dependencies:

   
   npm install
   yarn install

4. Open the `app.js` file and update the url endpoint to match your Rails backend URL.

   const url = 'http://localhost:3000'; // Update this URL
  

5. Start the React development server:


   npm start
   yarn start

Your React frontend is now running at `http://localhost:3001`.

## Usage

1. Open your web browser and visit `http://localhost:3001`.
2. Sign up and log in to your application using Devise authentication.
3. You can now perform CRUD operations on the data stored in the PostgreSQL database via the React frontend.

## Demo

This is a video of the development team that worked together on this app demoing our final product.

https://www.youtube.com/watch?v=uLhmRD17Kbo

## Contributing

If you would like to contribute to this project, please follow our [contributing guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
