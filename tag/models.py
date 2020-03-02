from django.db import models
from trail.models import Trail


class Tag(models.Model):
    name = models.CharField(max_length=30)
    trail_id = models.ForeignKey(Trail, on_delete=models.CASCADE)
    slug = models.CharField(max_length=30)
    active = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
