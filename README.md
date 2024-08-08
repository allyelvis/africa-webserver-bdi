# Africa Web Server

This is a simple web server setup using Node.js and Express, designed with features to optimize performance, security, and usability. It includes compression, security headers, and basic logging.

## Features

- **Compression**: Reduces the size of responses to improve load times.
- **Security**: Implements security headers using Helmet.
- **Logging**: Logs HTTP requests using Morgan.
- **Basic API**: Example route for serving JSON data.

## Prerequisites

- [Node.js](https://nodejs.org/) and npm installed.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/allyelvis/africa-webserver-bdi.git
   cd africa-webserver-bdi
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

## Usage

1. **Start the Server**

   ```bash
   node server.js
   ```

2. **Access the Application**

   Open your web browser and navigate to `http://localhost:3000` to view the welcome message. Access the API at `http://localhost:3000/api/data`.

## Project Structure

- `server.js`: Main server file with route handlers and middleware.
- `package.json`: Lists project dependencies and scripts.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or suggestions, please contact:

- **Name**: Ally Elvis Nzeyimana
- **Email**: allyelvis6569@gmail.com
