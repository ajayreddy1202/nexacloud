from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import Order
from .serializers import OrderSerializer, UpdateOrderStatusSerializer

@api_view(['POST'])
@permission_classes([AllowAny])
def create_order(request):
    serializer = OrderSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({
            'message': 'Order created successfully',
            'data': serializer.data
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_orders(request):
    orders = Order.objects.all()
    serializer = OrderSerializer(orders, many=True)
    return Response({
        'message': 'Orders fetched successfully',
        'count': orders.count(),
        'data': serializer.data
    })

@api_view(['GET'])
@permission_classes([AllowAny])
def get_order(request, order_id):
    try:
        order = Order.objects.get(id=order_id)
        serializer = OrderSerializer(order)
        return Response({
            'message': 'Order fetched successfully',
            'data': serializer.data
        })
    except Order.DoesNotExist:
        return Response({
            'error': 'Order not found'
        }, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_user_orders(request, user_id):
    orders = Order.objects.filter(user_id=user_id)
    serializer = OrderSerializer(orders, many=True)
    return Response({
        'message': 'User orders fetched successfully',
        'count': orders.count(),
        'data': serializer.data
    })

@api_view(['PUT'])
@permission_classes([AllowAny])
def update_order_status(request, order_id):
    try:
        order = Order.objects.get(id=order_id)
        serializer = UpdateOrderStatusSerializer(
            order, data=request.data, partial=True
        )
        if serializer.is_valid():
            serializer.save()
            return Response({
                'message': 'Order status updated successfully',
                'data': serializer.data
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Order.DoesNotExist:
        return Response({
            'error': 'Order not found'
        }, status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE'])
@permission_classes([AllowAny])
def cancel_order(request, order_id):
    try:
        order = Order.objects.get(id=order_id)
        order.status = 'cancelled'
        order.save()
        return Response({
            'message': 'Order cancelled successfully'
        })
    except Order.DoesNotExist:
        return Response({
            'error': 'Order not found'
        }, status=status.HTTP_404_NOT_FOUND)