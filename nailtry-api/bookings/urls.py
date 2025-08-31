from django.urls import path
from .views import BookingCreateView, MyBookingsView

urlpatterns = [
    path('bookings/', BookingCreateView.as_view()),
    path('bookings/me/', MyBookingsView.as_view()),
]
