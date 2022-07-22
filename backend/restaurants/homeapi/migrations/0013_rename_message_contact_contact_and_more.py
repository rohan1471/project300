# Generated by Django 4.0.5 on 2022-06-24 06:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homeapi', '0012_contact_alter_comment_date'),
    ]

    operations = [
        migrations.RenameField(
            model_name='contact',
            old_name='message',
            new_name='contact',
        ),
        migrations.RemoveField(
            model_name='contact',
            name='firstname',
        ),
        migrations.RemoveField(
            model_name='contact',
            name='lastname',
        ),
        migrations.RemoveField(
            model_name='contact',
            name='telnum',
        ),
        migrations.AddField(
            model_name='contact',
            name='Address',
            field=models.CharField(default='', max_length=10000),
        ),
        migrations.AddField(
            model_name='contact',
            name='Phone',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='contact',
            name='name',
            field=models.CharField(default='', max_length=150),
        ),
        migrations.AlterField(
            model_name='contact',
            name='email',
            field=models.CharField(max_length=200),
        ),
    ]
