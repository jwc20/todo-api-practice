# todo-api-practice

## Instructions

```
mkdir frontend
mkdir backend
cd backend
```

### Backend

- Start venv
- Install django and djangorestframework
- Start project 'config'
- Deactivate venv

- Add docker files.
  - Dockerfile
  - docker-compose.yml
  - .dockerignore

```
docker-compose up -d --build
docker-compose exec web python3 manage.py startapp todos
docker-compose exec web python3 manage.py migrate
```

- Add todos app to django settings.
- Create Todo model.

```
docker-compose exec web python3 manage.py makemigrations todos
docker-compose exec web python3 manage.py migrate
```

- Register todo app in admin panel.
- Update settings to use rest framework.
- Add todos app url to project-level urls.
- Create todos app urls.
- Create todos app serializers.
- Create ListTodoView and DetailTodoView views.
- Remove database.
- Update to use viewsets and routers.
- Update todos app url.
- Install django-cors-headers.
- Update settings to add corsheaders.
- Create test for creating todos.
