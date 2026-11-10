
# CampusConnect API Specification

## Overview
This document describes the API endpoints used by the CampusConnect login system.

**Base URL:** `http://localhost:3000/api/v1`

## 1. Required API Endpoints

| Method | Endpoint | Purpose | Success | Errors |
|---|---|---|---|---|
| GET | /api/v1/health | Check if the API is running | 200 | — |
| POST | /api/v1/sessions | Log in a user | 200 | 400, 401 |
| GET | /api/v1/users/me | Get the logged-in user's information | 200 | 401 |

## 2. Request and Response Examples

### GET /api/v1/health

Checks if the backend is running.

**Success Response (200 OK):**

```json
{
  "status": "ok"
}
```

### POST /api/v1/sessions

Allows a user to log in using an email and password.

**Request Body:**

```json
{
  "email": "student@campusconnect.test",
  "password": "Campus26"
}
```

**Success Response (200 OK):**

```json
{
  "token": "<a long token text>",
  "user": {
    "id": 1,
    "name": "Demo Student",
    "email": "student@campusconnect.test"
  }
}
```

**Error Response (400 Bad Request):**

```json
{
  "error": "Email and password are required."
}
```

**Error Response (401 Unauthorized):**

```json
{
  "error": "Invalid email or password."
}
```

### GET /api/v1/users/me

Returns the information of the logged-in user.

**Required Header:**

```text
Authorization: Bearer <token>
```

**Success Response (200 OK):**

```json
{
  "id": 1,
  "name": "Demo Student",
  "email": "student@campusconnect.test"
}
```

**Error Response (401 Unauthorized):**

```json
{
  "error": "Not logged in."
}
```

## 3. Events (Design Only)

These endpoints are proposed for managing school events. They are for documentation only and do not need to be implemented.

| Method | Endpoint | Purpose |
|---|---|---|
| GET | /api/v1/events | List all events |
| GET | /api/v1/events/1 | Get one event |
| POST | /api/v1/events | Add a new event |
| PATCH | /api/v1/events/1 | Update part of an event |
| DELETE | /api/v1/events/1 | Delete an event |
| GET | /api/v1/events?month=11 | Filter events by month |

## 4. Required Demo Account

**Email:** student@campusconnect.test

**Password:** Campus26

**Name:** Demo Student

The backend must store passwords as hashes, not plain text.