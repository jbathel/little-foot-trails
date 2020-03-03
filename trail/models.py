from django.db import models
from tag.models import Tag

class Trail(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=250)
    picture = models.CharField(max_length=250)
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
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE, blank=True, null=True)
    slug = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    featured = models.BooleanField(default=False)

    def __str__(self):
        return self.name
