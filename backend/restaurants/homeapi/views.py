from .models import Comment, Contact, Product
from .serializers import CommentSerializers, ProductSerializers, ContactSerializers
from rest_framework import generics, parsers, status
from rest_framework.views import APIView
from rest_framework.response import Response
 

class ProductListAPIView(generics.ListAPIView):
    queryset=Product.objects.all()
    serializer_class = ProductSerializers
    parser_classes = [parsers.FormParser, parsers.MultiPartParser]


class CommentListAPIView(generics.ListAPIView):
    queryset=Comment.objects.all()
    serializer_class = CommentSerializers
    parser_classes = [parsers.FormParser, parsers.MultiPartParser]


class ContactAPIView(APIView):
    def get(self, request, format=None):
        contact_list = Contact.objects.all()
        contact_serializers = ContactSerializers(contact_list, many=True)
        return Response(contact_serializers.data)

    def post(self, request, format=None):
        contact_serializers = ContactSerializers(data=request.data)
        if contact_serializers.is_valid():
            contact_serializers.save()
            return Response(contact_serializers.data, status=status.HTTP_201_CREATED)
        return Response(contact_serializers.errors, status=status.HTTP_400_BAD_REQUEST)

