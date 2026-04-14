from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_all_orders, name='get_all_orders'),
    path('create/', views.create_order, name='create_order'),
    path('<int:order_id>/', views.get_order, name='get_order'),
    path('<int:order_id>/status/', views.update_order_status, name='update_order_status'),
    path('<int:order_id>/cancel/', views.cancel_order, name='cancel_order'),
    path('user/<int:user_id>/', views.get_user_orders, name='get_user_orders'),
]