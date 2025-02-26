# map-service-back

## Project Description

This is a backend service for working with map data. The service provides an API for managing camera locations on a map.

## Key Features

- Storage and management of camera location data
- REST API for camera operations
- Database migrations

## Project Structure

- `src/models` - data models
- `src/routes` - API routes
- `migrations` - database migrations

## Tech Stack

- Node.js
- TypeScript
- Express
- Sequelize (for database operations)

## API

### Cameras

- `GET /camera` - get list of cameras
- `POST /camera` - add a new camera
- `PUT /camera/:id` - update camera information
- `DELETE /camera/:id` - delete a camera

## Installation and Running

# Install dependencies
npm install

# Run migrations
npm run migrate

# Run server in development mode
npm run dev

# Run server in production mode
npm run start
