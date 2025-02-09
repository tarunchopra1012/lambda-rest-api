# REST API with Containerized Node.js, AWS Lambda, AWS RDS, API Gateway, and Postman Testing

This project is a REST API built with Node.js and containerized using Docker. It leverages AWS Lambda for serverless functions, AWS RDS for managed relational database services, and AWS API Gateway to expose secure endpoints. A Postman collection is provided to facilitate testing and documentation of the API endpoints.

---

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Cloning the Repository](#cloning-the-repository)
  - [Installing Dependencies](#installing-dependencies)
  - [Configuring Environment Variables](#configuring-environment-variables)
- [Running Locally](#running-locally)
  - [Using Docker](#using-docker)
  - [Without Docker](#without-docker)
- [Deployment](#deployment)
  - [Deploying with AWS SAM](#deploying-with-aws-sam)
  - [Deploying with Serverless Framework](#deploying-with-serverless-framework)
- [Postman Testing](#postman-testing)
- [API Endpoints](#api-endpoints)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

This repository contains the source code for a REST API that:
- **Uses Node.js** (with Express) for application logic.
- **Runs in a Docker container** for consistent development and deployment.
- **Leverages AWS Lambda** to execute serverless functions.
- **Connects to an AWS RDS instance** (e.g., MySQL or PostgreSQL) for data persistence.
- **Exposes endpoints via AWS API Gateway** for secure access.
- **Includes a Postman collection** for API testing and documentation.

---

## Architecture

Below is a high-level overview of the project architecture:

- **Node.js Application**: Encapsulated in a Docker container.
- **AWS Lambda**: Can be used for handling specific serverless operations.
- **AWS RDS**: Serves as the persistent data store.
- **API Gateway**: Acts as the public entry point.
- **Postman**: Utilized for testing API endpoints.

---

## Technologies

- **Node.js** (with Express)
- **Docker** for containerization
- **AWS Lambda**
- **AWS RDS** (MySQL or PostgreSQL)
- **AWS API Gateway**
- **Postman** for testing

---

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Docker](https://www.docker.com/get-started) installed and running.
- [Node.js (v14 or higher)](https://nodejs.org/) installed.
- An [AWS account](https://aws.amazon.com/) with proper permissions.
- AWS CLI configured on your machine.
- (Optional) [AWS SAM CLI](https://aws.amazon.com/serverless/sam/) or [Serverless Framework](https://www.serverless.com/) for deployment.
- [Postman](https://www.postman.com/downloads/) installed.

---

## Getting Started

### Cloning the Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
