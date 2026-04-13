from rest_framework import serializers
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = [
            'id',
            'user_id',
            'email',
            'username',
            'phone',
            'bio',
            'profile_picture',
            'address',
            'city',
            'country',
            'is_active',
            'created_at',
            'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']

class UpdateProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = [
            'phone',
            'bio',
            'profile_picture',
            'address',
            'city',
            'country'
        ]