# Generated by Django 4.2.4 on 2023-08-24 14:07

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("inventory", "0014_remove_customer_customuser_customer_customuser"),
    ]

    operations = [
        migrations.AlterField(
            model_name="customer",
            name="customuser",
            field=models.ManyToManyField(default=None, to=settings.AUTH_USER_MODEL),
        ),
    ]
