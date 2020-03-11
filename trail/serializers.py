from rest_framework import serializers
from .models import Trail


class TrailSerializer(serializers.ModelSerializer):
    tags = serializers.StringRelatedField(many=True)

    class Meta:
        model = Trail
        fields = ('id', 'name', 'description', 'picture', 'location', 'latitude',
                  'longitude', 'tags', 'created_at', 'featured')
