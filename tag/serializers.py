from rest_framework import serializers
from .models import Tag


class TagSerializer(serializers.ModelSerializer):
    """This is the Serializer for the Tag Model

    Arguments:
        serializers {ModelSerializer} -- Django builtin Serializer
    """
    class Meta:
        model = Tag
        fields = ('name',  'active', 'created_at')
