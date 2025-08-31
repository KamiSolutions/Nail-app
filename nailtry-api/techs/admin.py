from django.contrib import admin
from .models import NailTechProfile, Service

class ServiceInline(admin.TabularInline):
    model = Service
    extra = 1

@admin.register(NailTechProfile)
class NailTechProfileAdmin(admin.ModelAdmin):
    inlines = [ServiceInline]
    list_display = ("user", "salon_name", "avg_rating")

