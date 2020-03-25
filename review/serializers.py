from rest_framework import serializers
from .models import Review


class ReviewSerializer(serializers.ModelSerializer):
    """This is the Serializer for the Review Model

    Arguments:
        serializers {ModelSerializer} -- Django builtin Serializer
    """
    class Meta:
        model = Review
        fields = ('id', 'name', 'review', 'created_at', 'user', 'trail')
