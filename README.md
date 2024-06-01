<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  

# Task Management Backend Service

This project is a backend service for a task management application similar to Trello. It is built using Node.js, Nest.js, TypeScript, and MongoDB with Mongoose ODM.

## Features

- **Columns Management:**
  - Create, update, delete columns.
  - Columns represent different states of tasks (e.g., To Do, In Progress, Completed).

- **Tasks Management:**
  - Create, update, delete tasks.
  - Each task has fields: id, description, owner, columnId, order.

- **Task Ordering:**
  - Reorder tasks within a column.

- **Completion Notification:**
  - Send an email notification to the task owner when a task is completed.

## Prerequisites

- Node.js (v14 or later)
- MongoDB (Running instance)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sdrasai/Task-Management.git
   cd Task-Management


### Instructions Summary

1. **Clone and Install Dependencies:** Clone the repository and install dependencies using `npm install`.
2. **Start MongoDB:** Ensure MongoDB server is running.
3. **Run the Project:** Use `npm run start:dev` to start the NestJS application.
4. **API Endpoints:** Use the provided endpoints to interact with the columns and tasks.



## License

Nest is [MIT licensed](LICENSE).
