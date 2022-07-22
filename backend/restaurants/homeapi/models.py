from django.db import models

class Product(models.Model):
    id= models.AutoField(primary_key=True)
    name = models.CharField(max_length= 50)
    image = models.ImageField(upload_to="homeapi/images", default ="")
    category= models.CharField(max_length=50,default ="")
    label= models.CharField(max_length=50,default ="")
    price = models.IntegerField(default=0)
    description = models.TextField()
    


    def __str__(self):
        return self.name


rating = (
    ('1','1'),
    ('2','2'),
    ('3','3'),
    ('4','4'),
    ('5','5'),
)

class Comment(models.Model):
    dishId= models.AutoField(primary_key=True)
    id = models.ForeignKey(Product, on_delete=models.CASCADE)
    rating = models.CharField(max_length= 5, choices=rating, default="1")
    comment= models.CharField(max_length=50)
    author = models.CharField(max_length=200)
    date = models.DateTimeField()
    


    def __str__(self):
        return self.author


class Contact (models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=150)
    email = models.CharField(max_length=200)
    Address =models.CharField(max_length=10000)
    Phone=models.CharField(max_length=50)
    contact=models.TextField()


    def __str__(self):
        return 'Messages from ' + self.name + ' - ' + self.email 

class Meta:
    verbose_name_plural = 'Contact Us'