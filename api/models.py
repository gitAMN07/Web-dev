from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.ForeignKey(
    Category,
    on_delete=models.CASCADE,
    related_name='products'
    )
    image = models.ImageField(upload_to='products/', null=True, blank=True) 