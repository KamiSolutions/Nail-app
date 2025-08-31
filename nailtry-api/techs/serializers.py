from rest_framework import serializers
from .models import NailTechProfile, Service

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ["id", "name", "duration_minutes", "price"]

class NailTechProfileSerializer(serializers.ModelSerializer):
    services = ServiceSerializer(many=True, read_only=True)

    class Meta:
        model = NailTechProfile
        fields = ["id", "user", "salon_name", "bio", "avg_rating", "services"]

