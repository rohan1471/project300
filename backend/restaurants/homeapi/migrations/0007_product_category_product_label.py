# Generated by Django 4.0.5 on 2022-06-13 12:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homeapi', '0006_rename_desc_product_description_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.TextField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='product',
            name='label',
            field=models.CharField(default='', max_length=50),
        ),
    ]
