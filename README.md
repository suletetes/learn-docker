# Docker Examples

A set of small, focused examples demonstrating Docker and Docker Compose workflows for single-container apps, frontend apps, multi-service development stacks, and production-ready fullstack builds.

## Table of contents

- [Overview](#overview)
- [Quick start](#quick-start)
- [Examples (short)](#examples-short)
- [Environment (.env) sample](#environment-env-sample)
- [Common commands](#common-commands)
- [Troubleshooting](#troubleshooting)
- [How I can help next](#how-i-can-help-next)

## Overview

This repository contains multiple example folders you can run locally to learn patterns for building Docker images and composing services.

## Quick start

1. Pick an example folder listed below.
2. Inspect its Dockerfile / docker-compose.yml for ports and env variables.
3. From that folder run:
   - `docker-compose up --build`
   - or `docker build` / `docker run` as appropriate.

## Examples (short)

1. **01-dockerfile-basic/** — Minimal Dockerfile example.
2. **02-node-docker-hello/** — Tiny Node.js app containerized.
3. **03-docker-compose-simple/** — Single-service docker-compose example.
4. **04-react-frontend-example/** — React frontend (dev + prod Dockerfiles).
5. **05-multi-service-stack/** — Dev-focused fullstack: client, server, worker, nginx.
6. **06-fullstack-prod-stack/** — Production-oriented multi-stage builds and nginx static serving.

## Environment (.env) sample

Create a `.env` in the folder where you run docker-compose (05 or 06 stacks). Example:

```
REDIS_HOST=redis
REDIS_PORT=6379
PGUSER=postgres
PGHOST=postgres
PGDATABASE=postgres
PGPASSWORD=postgres
PGPORT=5432
SESSION_SECRET=changeme
```

Notes: server/keys.js reads the variables above; ensure they match your compose services or external DB/Redis.

## Common commands

- Build image: `docker build -t my-image .`
- Run container: `docker run --rm -p HOST:CONTAINER my-image`
- Compose up: `docker-compose up --build`
- Compose down: `docker-compose down`
- Logs: `docker-compose logs -f`

## Troubleshooting

- Port conflicts: change host port mapping or stop conflicting service.
- Docker daemon: make sure Docker is running.
- Missing env vars: add .env or set variables in compose files.

## How I can help next

- Add .env.example files to the stacks
- Inspect docker-compose.yml and Dockerfiles to document exact ports and commands
- Add a Makefile or CONTRIBUTING.md to automate common tasks
