# 04-react-frontend-example

Purpose

React frontend example demonstrating both development and production Dockerfiles and a docker-compose-based dev workflow.

Quick start (development)

- cd 04-react-frontend-example/frontend
- docker-compose up --build
- Open http://localhost:3000 (confirm port in docker-compose.yml)

Build production image

- cd 04-react-frontend-example/frontend
- docker build -t react-frontend-prod .
- The production build produces static assets that should be served by a web server (nginx) or the production nginx in the fullstack folders.

Files of interest

- docker-compose.yml — dev compose orchestration (if present)
- Dockerfile.dev — development Dockerfile (hot-reload, mounted source)
- Dockerfile — production multi-stage Dockerfile
- package.json — scripts and dependencies

Notes

- For fastest local iteration run `npm start` locally in the frontend folder.
- When using Docker dev workflow, source is typically mounted into the container to enable hot-reload.
