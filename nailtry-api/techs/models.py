from django.db import models
from django.conf import settings

class NailTechProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    salon_name = models.CharField(max_length=255, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    avg_rating = models.DecimalField(max_digits=3, decimal_places=1, default=0)

class Service(models.Model):
    tech = models.ForeignKey(NailTechProfile, on_delete=models.CASCADE, related_name='services')
    name = models.CharField(max_length=255)
    duration_minutes = models.IntegerField(default=60)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0)

class PortfolioItem(models.Model):
    tech = models.ForeignKey(NailTechProfile, on_delete=models.CASCADE, related_name='portfolio')
    image_url = models.TextField()
    tags = models.JSONField(default=list)
