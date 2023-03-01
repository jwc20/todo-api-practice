from rest_framework import viewsets
from .models import Todo
from .serializers import TodoSerializer


# class ListTodoView(generics.ListAPIView):
#     queryset = Todo.objects.all() 
#     serializer_class = TodoSerializer


# class DetailTodoView(generics.RetrieveAPIView):
#     queryset = Todo.objects.all() 
#     serializer_class = TodoSerializer



class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all() 
    serializer_class = TodoSerializer
