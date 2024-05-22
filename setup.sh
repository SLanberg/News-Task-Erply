#!/bin/bash

cd backend

# Activate your virtual environment (if you're using one)
python3 -m venv env
source env/bin/activate
pip install --no-cache-dir -r requirements.txt

python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py migrate --run-syncdb

./manage.py shell -c "from django.contrib.auth.models import User; User.objects.create_superuser('root', 'root@example.com', 'root')"

python3 manage.py runserver &

# Move to the frontend directory
cd ../frontend

npm install

npm run dev