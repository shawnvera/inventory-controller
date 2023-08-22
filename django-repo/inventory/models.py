from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

class User(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=30)
    phone = models.IntegerField(null=True)
    age = models.IntegerField(null=True)
    status = models.BooleanField(default=False)

class CustomUser(AbstractUser):
    # pass

    # REQUIRED_FIELDS = ('username',)
    def __str__(self):
        return self.username
        

class Customer(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    notes = models.CharField(max_length=140)
    creation_date = models.DateTimeField(default=None, null = True)
    # 0ne to one reference possible change many to OneToOneField
    user_id = models.OneToOneField('User', on_delete=models.CASCADE)

class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    quantity = models.IntegerField(default=0)
    customer_id = models.OneToOneField('Customer', default=None, on_delete=models.CASCADE)