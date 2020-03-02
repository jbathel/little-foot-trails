from django.db import models


class Trail(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=250)
    picture = models.CharField(max_length=250)
    location = models.CharField(max_length=250)
    slug = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    featured = models.BooleanField(default=False)

    def __str__(self):
         return self.name
