from xml.etree.ElementTree import Comment
from django.contrib import admin
from.models import Contact, Product, Comment

class Contactadmin(admin.ModelAdmin):
    list_display= ['name', 'email', "Phone"]

class Meta:
   model = Contact

admin.site.register(Contact, Contactadmin),

admin.site.register(Product),
admin.site.register(Comment)
















































































































# Register your models here.

# admin.site.register(Ingredient)
# admin.site.register(Order)
# admin.site.register(CustomerDetail)
