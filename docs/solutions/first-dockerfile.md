---
sidebar_position: 1
title: Create Your First Dockerfile
---

## Dockerfile

```dockerfile
FROM python:3.12

WORKDIR /app

# Install the application dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the source code into the container.
COPY . /app

# Expose the port that the application listens on.
EXPOSE 8000

# Setup an app user so the container doesn't run as the root user
RUN useradd app
USER app

# Run the application.
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
```

## Bonus points