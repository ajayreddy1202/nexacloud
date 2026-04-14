from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

# Category Views
@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_categories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response({
        'message': 'Categories fetched successfully',
        'count': categories.count(),
        'data': serializer.data
    })

@api_view(['POST'])
@permission_classes([AllowAny])
def create_category(request):
    serializer = CategorySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({
            'message': 'Category created successfully',
            'data': serializer.data
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Product Views
@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_products(request):
    products = Product.objects.filter(is_active=True)
    serializer = ProductSerializer(products, many=True)
    return Response({
        'message': 'Products fetched successfully',
        'count': products.count(),
        'data': serializer.data
    })

@api_view(['POST'])
@permission_classes([AllowAny])
def create_product(request):
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({
            'message': 'Product created successfully',
            'data': serializer.data
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_product(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
        serializer = ProductSerializer(product)
        return Response({
            'message': 'Product fetched successfully',
            'data': serializer.data
        })
    except Product.DoesNotExist:
        return Response({
            'error': 'Product not found'
        }, status=status.HTTP_404_NOT_FOUND)

@api_view(['PUT'])
@permission_classes([AllowAny])
def update_product(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
        serializer = ProductSerializer(
            product, data=request.data, partial=True
        )
        if serializer.is_valid():
            serializer.save()
            return Response({
                'message': 'Product updated successfully',
                'data': serializer.data
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Product.DoesNotExist:
        return Response({
            'error': 'Product not found'
        }, status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE'])
@permission_classes([AllowAny])
def delete_product(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
        product.delete()
        return Response({
            'message': 'Product deleted successfully'
        }, status=status.HTTP_204_NO_CONTENT)
    except Product.DoesNotExist:
        return Response({
            'error': 'Product not found'
        }, status=status.HTTP_404_NOT_FOUND)