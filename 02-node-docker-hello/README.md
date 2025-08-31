# 02-node-docker-hello

Purpose

Small Node.js "hello" application demonstrating how to containerize a Node app with a Dockerfile.

Quick start

- Run locally:
  - cd 02-node-docker-hello
  - npm install
  - npm start

- Build and run with Docker:
  - docker build -t node-hello .
  - docker run --rm -p 3000:3000 node-hello

Notes

- Confirm the exposed port in the Dockerfile and package.json start script.
- Useful for learning how to copy source, set NODE_ENV, and run a Node process in a container.
