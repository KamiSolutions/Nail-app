from django.db import models
from django.conf import settings
from techs.models import NailTechProfile, Service

class Booking(models.Model):
    client = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='client_bookings')
    tech = models.ForeignKey(NailTechProfile, on_delete=models.CASCADE, related_name='tech_bookings')
    service = models.ForeignKey(Service, on_delete=models.SET_NULL, null=True, blank=True)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=20, default='pending')
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    deposit = models.DecimalField(max_digits=10, decimal_places=2, default=0)
