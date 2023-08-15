from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=30)
    phone = models.IntegerField
    age = models.IntegerField
    status = models.BooleanField

class Customer(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    notes = models.CharField(max_length=140)
    logo = models.ImageField
    creation_date = models.IntegerField
    user_id = models.ManyToManyField(User)

class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    quantity = models.IntegerField
    user_id = models.ManyToManyField(User)
    customer_id = models.ManyToManyField(Customer)
