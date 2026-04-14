from django.urls import path
from . import views

urlpatterns = [
    # Category URLs
    path('categories/', views.get_all_categories, name='get_all_categories'),
    path('categories/create/', views.create_category, name='create_category'),

    # Product URLs
    path('', views.get_all_products, name='get_all_products'),
    path('create/', views.create_product, name='create_product'),
    path('<int:product_id>/', views.get_product, name='get_product'),
    path('<int:product_id>/update/', views.update_product, name='update_product'),
    path('<int:product_id>/delete/', views.delete_product, name='delete_product'),
]