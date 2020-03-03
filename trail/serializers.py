from rest_framework import serializers
from .models import Trail


class TrailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trail
        fields = ('name', 'description', 'picture', 'location', 'latitude',
                  'longitude', 'tag', 'slug', 'created_at', 'featured')
