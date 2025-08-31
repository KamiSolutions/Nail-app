from rest_framework import generics, permissions
from .models import Booking
from .serializers import BookingSerializer
from techs.models import NailTechProfile

class BookingCreateView(generics.CreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        client = getattr(self.request, 'user', None)
        tech_id = self.request.data.get('tech_id')
        tech = NailTechProfile.objects.get(id=tech_id)
        serializer.save(client=client if client and client.is_authenticated else None, tech=tech)

class MyBookingsView(generics.ListAPIView):
    serializer_class = BookingSerializer
    permission_classes = [permissions.IsAuthenticated]
    def get_queryset(self):
        return Booking.objects.filter(client=self.request.user).order_by('-start_time')
