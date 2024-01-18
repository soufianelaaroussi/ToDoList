from django.test import TestCase
from models import tasks

class MyModelTest(TestCase):
    def test_model_creation(self):
        my_instance = tasks.objects.create(name='Test')
        self.assertEqual(my_instance.name, 'Test')
        # Ajoutez d'autres assertions en fonction de vos besoins.
