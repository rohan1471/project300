from rest_framework import serializers

from .models import Contact, Product,Comment

class ProductSerializers(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = [ "id","name","image", "category","label","price", "description" ,]

class CommentSerializers(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = [ "dishId","id","rating", "comment","author","date"]


class ContactSerializers(serializers.ModelSerializer):

    class Meta:
        model = Contact
        fields = [ "id","name", "email", "Address" ,"Phone", "contact"]