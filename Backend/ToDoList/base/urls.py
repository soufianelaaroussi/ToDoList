from django.urls import path
from .views import TaskListCreateView, TaskDetailView

urlpatterns = [
    path('base/', TaskListCreateView.as_view(), name='task-list-create'),
    path('base/<int:pk>/', TaskDetailView.as_view(), name='task-detail'),
]
