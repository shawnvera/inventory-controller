# Generated by Django 4.2.4 on 2023-08-22 20:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("inventory", "0002_rename_user_id_customer_user_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="product",
            name="customer",
            field=models.ForeignKey(
                default=None,
                on_delete=django.db.models.deletion.CASCADE,
                to="inventory.customer",
            ),
        ),
    ]
