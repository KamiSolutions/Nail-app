from rest_framework import serializers
from .models import Booking

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'

    def create(self, validated_data):
        service = validated_data.get('service')
        if service and not validated_data.get('price'):
            validated_data['price'] = service.price
        return super().create(validated_data)
