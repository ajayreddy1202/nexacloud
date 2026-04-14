from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.utils import timezone
from .models import Notification
from .serializers import NotificationSerializer

@api_view(['POST'])
@permission_classes([AllowAny])
def send_notification(request):
    serializer = NotificationSerializer(data=request.data)
    if serializer.is_valid():
        notification = serializer.save()
        notification.status = 'sent'
        notification.sent_at = timezone.now()
        notification.save()
        return Response({
            'message': 'Notification sent successfully',
            'data': NotificationSerializer(notification).data
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_notifications(request):
    notifications = Notification.objects.all()
    serializer = NotificationSerializer(notifications, many=True)
    return Response({
        'message': 'Notifications fetched successfully',
        'count': notifications.count(),
        'data': serializer.data
    })

@api_view(['GET'])
@permission_classes([AllowAny])
def get_user_notifications(request, user_id):
    notifications = Notification.objects.filter(user_id=user_id)
    serializer = NotificationSerializer(notifications, many=True)
    return Response({
        'message': 'User notifications fetched successfully',
        'count': notifications.count(),
        'data': serializer.data
    })

@api_view(['GET'])
@permission_classes([AllowAny])
def get_notification(request, notification_id):
    try:
        notification = Notification.objects.get(id=notification_id)
        serializer = NotificationSerializer(notification)
        return Response({
            'message': 'Notification fetched successfully',
            'data': serializer.data
        })
    except Notification.DoesNotExist:
        return Response({
            'error': 'Notification not found'
        }, status=status.HTTP_404_NOT_FOUND)