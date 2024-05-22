# Django Project Documentation

## Installation

1. **Set Up Virtual Environment**:

```bash
python3 -m venv env
```

2. **Activate Virtual Environment**:

```bash
source env/bin/activate
```

3. **Install Dependencies**:

```bash
pip install --no-cache-dir -r requirements.txt
```

## Database Management

1. **Make Migrations**:

```bash
python3 manage.py makemigrations
```

2. **Apply Migrations**:

```bash
python3 manage.py migrate
```

3. **Run SyncDB (Optional)**:

```bash
python3 manage.py migrate --run-syncdb
```

## Create Superuser

To create a superuser (admin) for accessing the Django admin interface:

```bash
./manage.py shell -c "from django.contrib.auth.models import User; User.objects.create_superuser('root', 'root@example.com', 'root')"
```

## Running the Development Server

To start the development server:

```bash
python3 manage.py runserver
```

The development server will start at `http://localhost:8000/` by default.

## Additional Tips

- **Django Admin Interface**: Access the Django admin interface at `http://localhost:8000/admin/` after creating the superuser.
- **Static Files**: For serving static files in development, make sure to configure the `STATIC_URL` and run `python3 manage.py collectstatic` if necessary.
- **Debugging**: Set `DEBUG = True` in `settings.py` for development environment.
- **Logging**: Configure logging settings in `settings.py` for error handling and debugging.
