from django.urls import path, include

# from .views import ListTodoView, DetailTodoView

from rest_framework.routers import SimpleRouter
from .views import TodoViewSet




# urlpatterns = [
#     path("<int:pk>/", DetailTodoView.as_view(), name="detail"),
#     path("", TodoViewSet.as_view(), name="list"),
# ]

router = SimpleRouter() 
router.register('', TodoViewSet, basename='todos')

urlpatterns = router.urls



