from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_all_notifications, name='get_all_notifications'),
    path('send/', views.send_notification, name='send_notification'),
    path('<int:notification_id>/', views.get_notification, name='get_notification'),
    path('user/<int:user_id>/', views.get_user_notifications, name='get_user_notifications'),
]