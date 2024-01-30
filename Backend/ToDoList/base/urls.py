from django.urls import path
from .views import TaskListCreateView, TaskDetailView, signin, signup, signout
from django.contrib.auth.views import LogoutView

urlpatterns = [
    path('signup/', signup, name='signup'),
    path('signin/', signin, name='signin'),
    path('signout/', LogoutView.as_view(next_page='signin'), name='signout'),
    path('base/', TaskListCreateView.as_view(), name='task-list-create'),
    path('base/<int:pk>/', TaskDetailView.as_view(), name='task-detail'),
]
