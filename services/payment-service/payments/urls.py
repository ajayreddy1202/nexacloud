from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_all_payments, name='get_all_payments'),
    path('process/', views.process_payment, name='process_payment'),
    path('<int:payment_id>/', views.get_payment, name='get_payment'),
    path('<int:payment_id>/refund/', views.refund_payment, name='refund_payment'),
    path('order/<int:order_id>/', views.get_order_payments, name='get_order_payments'),
]