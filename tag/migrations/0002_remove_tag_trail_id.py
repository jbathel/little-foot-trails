# Generated by Django 3.0.3 on 2020-03-03 00:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tag', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tag',
            name='trail_id',
        ),
    ]