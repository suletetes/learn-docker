# 06-fullstack-prod-stack

Purpose

Production-oriented fullstack example showing multi-stage builds for the client and server, production nginx to serve static assets, and a compose file that builds production images.

Quick start (build & run locally)

- cd 06-fullstack-prod-stack
- Create a `.env` or use `.env.example` provided below
- docker-compose up --build -d
- Visit the mapped host ports (check docker-compose.yml for exact mappings)

Files of interest

- client/Dockerfile — production multi-stage build for React app
- server/Dockerfile — production server image (Node API)
- nginx/Dockerfile — production nginx image to serve client static files
- docker-compose.yml — orchestrates building and running production images for testing

Environment

A sample `.env.example` is included in this folder. Ensure values match your production or local test services (Postgres, Redis, etc.).

Notes

- These production Dockerfiles are optimized for smaller images and faster startup. For deployment to a real cluster, replace compose with Kubernetes manifests or a CI/CD pipeline to push images to a registry.
- Keep secrets out of .env for real deployments: use secrets management or environment injection by your platform.


