from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken

from .models import User


class UserSerializer(serializers.ModelSerializer):
    """This is the Serializer for the User Model

    Arguments:
        serializers {ModelSerializer} -- Django builtin Serializer
    """
    class Meta:
        model = User
        fields = ('email', 'full_name',)


class UserSerializerWithToken(serializers.ModelSerializer):
    """This is the Serializer for the User Model with a JWT Token

    Arguments:
        serializers {ModelSerializer} -- Django builtin Serializer
    """
    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, user):
        """Retreives a pair of JWT Tokens

        Arguments:
            user {User} -- User Object

        Returns:
            JSON -- A JWT access and refresh token
        """
        token = RefreshToken.for_user(user)
        refresh = str(token)
        access = str(token.access_token)
        data = {
            'refresh': refresh,
            'access': access
        }
        return data

    def create(self, validated_data):
        """Creates a new user with a JWT Auth Token

        Arguments:
            validated_data {JSON} -- Vaid inputs for a User

        Returns:
            User -- The created User
        """
        password = validated_data.pop('password', None)
        user = User.objects.create(
            email=validated_data['email'],
            active=True,
            full_name=validated_data['full_name']
        )
        user.set_password(password)
        user.save()
        return user

    class Meta:
        model = User
        fields = ('token', 'email', 'password', 'full_name')
