from django.urls import path
from .views import CommentListAPIView, ContactAPIView, ProductListAPIView
urlpatterns = [
    path('Product/', ProductListAPIView.as_view()),#http://127.0.0.1:8000/api/Product/
    path('Comment/', CommentListAPIView.as_view()),#http://127.0.0.1:8000/api/Comment/
    path('Contact/feedback', ContactAPIView.as_view()),#http://127.0.0.1:8000/api/Contact/feedback/
]
