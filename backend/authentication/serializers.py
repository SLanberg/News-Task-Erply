from rest_framework import serializers
from .models import User

class UserSerializer(serializers.Serializer):
    email = serializers.EmailField()
    key = serializers.CharField()

    def create(self, validated_data):
        return User.objects.create(**validated_data)
