from django.urls import path
from . import views

urlpatterns = [
    path('profiles/', views.get_all_profiles, name='get_all_profiles'),
    path('profiles/create/', views.create_profile, name='create_profile'),
    path('profiles/<int:user_id>/', views.get_profile, name='get_profile'),
    path('profiles/<int:user_id>/update/', views.update_profile, name='update_profile'),
    path('profiles/<int:user_id>/delete/', views.delete_profile, name='delete_profile'),
]