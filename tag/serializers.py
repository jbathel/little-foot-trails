from rest_framework import serializers
from .models import Tag


class TrailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('name', 'slug',  'active', 'created_at')
