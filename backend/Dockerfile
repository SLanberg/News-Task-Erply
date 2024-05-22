# Use a base image with Python
FROM python:3.10.0-slim

# Set environment variables for Python
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install system dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        gcc \
        libc-dev \
        libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /app

# Copy the local directory (containing application source code) 
# to the working directory in the container
COPY . .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt
RUN python3 manage.py makemigrations
RUN python3 manage.py migrate
RUN python3 manage.py migrate --run-syncdb

# Just for the ease of the reviewer automatically created superuser
RUN ./manage.py shell -c "from django.contrib.auth.models import User; User.objects.create_superuser('root', 'root@example.com', 'root')"

# Expose any necessary ports
EXPOSE 8000

# Command to run your application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
