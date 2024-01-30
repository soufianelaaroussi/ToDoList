from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate, login, logout, get_user_model
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
import json

User = get_user_model()

@csrf_exempt
@require_POST
def signup(request):
    try:
        data = json.loads(request.body.decode('utf-8'))
        username = data['username']
        email = data['email']
        password = data['password']

        user = User.objects.create_user(username=username, email=email, password=password)
        return JsonResponse({'success': True, 'message': 'User registered successfully'})
    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)})

@csrf_exempt
@require_POST
def signin(request):
    try:
        data = json.loads(request.body.decode('utf-8'))
        username = data['username']
        password = data['password']

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return JsonResponse({'success': True, 'message': 'Login successful'})
        else:
            return JsonResponse({'success': False, 'message': 'Invalid credentials'})
    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)})
    
@csrf_exempt
@require_POST
@login_required
def signout(request):
    try:
        logout(request)
        return JsonResponse({'success': True, 'message': 'Logout successful'})
    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)})
    
class TaskListCreateView(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]


class TaskDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]
