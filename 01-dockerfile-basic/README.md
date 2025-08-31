# 01-dockerfile-basic

Purpose

A minimal Dockerfile example demonstrating how to build a single container image for a tiny app.

Quick start

- Build the image:
  - docker build -t example-basic .
- Run the container (adjust port if different):
  - docker run --rm -p 3000:3000 example-basic

Notes

- Inspect the Dockerfile to confirm the exposed port and any build-time requirements.
- This example is intended for learning Dockerfile basics only.
