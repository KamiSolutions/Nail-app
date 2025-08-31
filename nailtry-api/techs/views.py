from rest_framework import viewsets
from .models import NailTechProfile
from .serializers import NailTechProfileSerializer

class NailTechProfileViewSet(viewsets.ModelViewSet):
    queryset = NailTechProfile.objects.all()
    serializer_class = NailTechProfileSerializer

