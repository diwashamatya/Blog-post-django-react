from django.urls import path
from . import views

urlpatterns = [
    path('blogs/', views.blog_posts),
    path('blogs/<int:pk>/', views.delete_blog_post),
]
