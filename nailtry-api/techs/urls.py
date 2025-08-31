from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NailTechProfileViewSet

router = DefaultRouter()
router.register(r'nailtechs', NailTechProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

