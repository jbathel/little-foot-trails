from rest_framework import serializers
from .models import User


class TrailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('full_name', 'email', 'phone_number', 'favorites',
                  'created_at', 'active', 'staff', 'admin')
