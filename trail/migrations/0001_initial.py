# Generated by Django 3.0.3 on 2020-02-28 23:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Trail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('description', models.CharField(max_length=250)),
                ('picture', models.CharField(max_length=250)),
                ('location', models.CharField(max_length=250)),
                ('slug', models.CharField(max_length=30)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('featured', models.BooleanField(default=False)),
            ],
        ),
    ]