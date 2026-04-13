from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import UserProfile
from .serializers import UserProfileSerializer, UpdateProfileSerializer

@api_view(['POST'])
@permission_classes([AllowAny])
def create_profile(request):
    serializer = UserProfileSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({
            'message': 'Profile created successfully',
            'data': serializer.data
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_profiles(request):
    profiles = UserProfile.objects.all()
    serializer = UserProfileSerializer(profiles, many=True)
    return Response({
        'message': 'Profiles fetched successfully',
        'count': profiles.count(),
        'data': serializer.data
    })

@api_view(['GET'])
@permission_classes([AllowAny])
def get_profile(request, user_id):
    try:
        profile = UserProfile.objects.get(user_id=user_id)
        serializer = UserProfileSerializer(profile)
        return Response({
            'message': 'Profile fetched successfully',
            'data': serializer.data
        })
    except UserProfile.DoesNotExist:
        return Response({
            'error': 'Profile not found'
        }, status=status.HTTP_404_NOT_FOUND)

@api_view(['PUT'])
@permission_classes([AllowAny])
def update_profile(request, user_id):
    try:
        profile = UserProfile.objects.get(user_id=user_id)
        serializer = UpdateProfileSerializer(
            profile, data=request.data, partial=True
        )
        if serializer.is_valid():
            serializer.save()
            return Response({
                'message': 'Profile updated successfully',
                'data': serializer.data
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except UserProfile.DoesNotExist:
        return Response({
            'error': 'Profile not found'
        }, status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE'])
@permission_classes([AllowAny])
def delete_profile(request, user_id):
    try:
        profile = UserProfile.objects.get(user_id=user_id)
        profile.delete()
        return Response({
            'message': 'Profile deleted successfully'
        }, status=status.HTTP_204_NO_CONTENT)
    except UserProfile.DoesNotExist:
        return Response({
            'error': 'Profile not found'
        }, status=status.HTTP_404_NOT_FOUND)