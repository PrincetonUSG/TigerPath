# Generated by Django 2.0.4 on 2018-05-11 05:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tigerpath', '0015_major_degree'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='major',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='+', to='tigerpath.Major'),
        ),
    ]
