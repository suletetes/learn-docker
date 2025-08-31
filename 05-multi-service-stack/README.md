# 05-multi-service-stack

Purpose

Development-focused fullstack example demonstrating a simple local stack composed of:
- client (React dev server)
- server (Node API)
- worker (background job processor)
- nginx (dev reverse proxy)

Quick start (dev)

- cd 05-multi-service-stack
- Create a `.env` or use `.env.example` below
- docker-compose up --build
- Open the client at http://localhost:3000 (confirm compose mapping)

Services and ports (typical)

- client: 3000 (React dev server)
- server: 5000 (Node API)
- nginx: 80 → proxies to client/server in dev
- worker: background process (no public port)

Environment

Create a `.env` in this folder or rely on docker-compose service names. Example shown in `.env.example`.

Files of interest

- docker-compose.yml — orchestrates the dev services
- client/Dockerfile.dev — client dev image (hot-reload)
- server/Dockerfile.dev — server dev image
- worker/Dockerfile.dev — worker dev image
- nginx/default.conf and Dockerfile.dev — dev proxy configuration

Notes

- The server and worker reference variables exported by server/keys.js. Ensure the environment variables below match what the compose file expects.
- For fast client iteration run `npm start` inside client/ locally.


