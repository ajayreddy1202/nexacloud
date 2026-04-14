from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.utils import timezone
import uuid
from .models import Payment
from .serializers import PaymentSerializer, ProcessPaymentSerializer

@api_view(['POST'])
@permission_classes([AllowAny])
def process_payment(request):
    serializer = ProcessPaymentSerializer(data=request.data)
    if serializer.is_valid():
        payment = Payment.objects.create(
            order_id=serializer.validated_data['order_id'],
            user_id=serializer.validated_data['user_id'],
            amount=serializer.validated_data['amount'],
            payment_method=serializer.validated_data['payment_method'],
            status='completed',
            transaction_id=str(uuid.uuid4()),
            payment_gateway='nexacloud-gateway'
        )
        return Response({
            'message': 'Payment processed successfully',
            'data': PaymentSerializer(payment).data
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_payments(request):
    payments = Payment.objects.all()
    serializer = PaymentSerializer(payments, many=True)
    return Response({
        'message': 'Payments fetched successfully',
        'count': payments.count(),
        'data': serializer.data
    })

@api_view(['GET'])
@permission_classes([AllowAny])
def get_payment(request, payment_id):
    try:
        payment = Payment.objects.get(id=payment_id)
        serializer = PaymentSerializer(payment)
        return Response({
            'message': 'Payment fetched successfully',
            'data': serializer.data
        })
    except Payment.DoesNotExist:
        return Response({
            'error': 'Payment not found'
        }, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_order_payments(request, order_id):
    payments = Payment.objects.filter(order_id=order_id)
    serializer = PaymentSerializer(payments, many=True)
    return Response({
        'message': 'Order payments fetched successfully',
        'count': payments.count(),
        'data': serializer.data
    })

@api_view(['POST'])
@permission_classes([AllowAny])
def refund_payment(request, payment_id):
    try:
        payment = Payment.objects.get(id=payment_id)
        payment.status = 'refunded'
        payment.save()
        return Response({
            'message': 'Payment refunded successfully',
            'data': PaymentSerializer(payment).data
        })
    except Payment.DoesNotExist:
        return Response({
            'error': 'Payment not found'
        }, status=status.HTTP_404_NOT_FOUND)