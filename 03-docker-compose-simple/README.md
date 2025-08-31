# 03-docker-compose-simple

Purpose

A minimal Docker Compose example that demonstrates how to define and run a single service using a Dockerfile and compose.

Quick start

- cd 03-docker-compose-simple
- docker-compose up --build
- Open the service at the port mapped in docker-compose.yml (check file for mapping).
- Stop the stack: docker-compose down

Notes

- Useful to learn service definitions, build context, ports and volumes in docker-compose.
- Inspect docker-compose.yml to see environment variables and port mappings.
