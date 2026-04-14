from rest_framework import serializers
from .models import Payment

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = [
            'id', 'order_id', 'user_id', 'amount',
            'payment_method', 'status', 'transaction_id',
            'payment_gateway', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']

class ProcessPaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = [
            'order_id', 'user_id',
            'amount', 'payment_method'
        ]