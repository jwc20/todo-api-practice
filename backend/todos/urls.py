from django.urls import path, include

from .views import ListTodoView, DetailTodoView


urlpatterns = [
    path("<int:pk>/", DetailTodoView.as_view(), name="detail"),
    path("", ListTodoView.as_view(), name="list"),
]
