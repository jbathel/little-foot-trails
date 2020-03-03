from django.db import models


class Tag(models.Model):
    name = models.CharField(max_length=30)
    slug = models.CharField(max_length=30)
    active = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
