# Generated by Django 4.2.4 on 2023-08-24 13:17

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("inventory", "0009_remove_customer_user_customer_customuser"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="customer",
            name="customuser",
        ),
        migrations.AddField(
            model_name="customer",
            name="user",
            field=models.ManyToManyField(to="inventory.user"),
        ),
    ]
