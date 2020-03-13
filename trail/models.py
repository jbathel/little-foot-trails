from django.db import models
from tag.models import Tag
import os


def get_filename_ext(filepath):
    base_name = os.path.basename(filepath)
    name, ext = os.path.splitext(base_name)
    print(name)
    print(ext)
    return name, ext

def upload_image_path(instance, filename):
    new_filename = instance.name.replace(' ', '_').lower()
    name, ext = get_filename_ext(filename)
    final_filename = f'{new_filename}{ext}'
    print(final_filename)
    return f'{final_filename}'

class Trail(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=250)
    picture = models.ImageField(upload_to='trail_images')
    location = models.CharField(max_length=250)
    latitude = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        blank=True,
        null=True
    )
    longitude = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        blank=True,
        null=True
    )
    tags = models.ManyToManyField(Tag)
    created_at = models.DateTimeField(auto_now_add=True)
    featured = models.BooleanField(default=False)

    def __str__(self):
        return self.name
