from django.urls import path
from .views import  CustomObtainAuthToken, ProfileView, TaskListCreateView, TaskDetailView, UserCreateView
from django.urls import path


urlpatterns = [
    path('auth/login/profile/', ProfileView.as_view()),
    path('base/', TaskListCreateView.as_view(), name='task-list-create'),
    path('auth/login/', CustomObtainAuthToken.as_view(), name='custom-obtain-auth-token'),
    path('auth/signup/', UserCreateView.as_view(), name='user-create'),
    path('base/<int:pk>/', TaskDetailView.as_view(), name='task-detail'),
]