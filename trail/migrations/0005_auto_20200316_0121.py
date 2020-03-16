# Generated by Django 3.0.3 on 2020-03-16 01:21

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('trail', '0004_auto_20200304_2153'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trail',
            name='description',
            field=models.CharField(max_length=1250),
        ),
        migrations.AlterField(
            model_name='trail',
            name='picture',
            field=models.ImageField(default=django.utils.timezone.now, upload_to='trail_images'),
            preserve_default=False,
        ),
    ]