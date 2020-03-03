from rest_framework import serializers
from .models import Review


class TrailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('name', 'review', 'picture', 'created_at', 'user_id', 'trail_id')
