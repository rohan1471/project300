# Generated by Django 4.0.5 on 2022-06-13 08:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homeapi', '0004_alter_product_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(default='', upload_to='homeapi/images'),
        ),
    ]
