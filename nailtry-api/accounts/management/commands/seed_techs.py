# accounts/management/commands/seed_techs.py

import random
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from django.utils import timezone
from datetime import timedelta

from techs.models import NailTechProfile, Service  # adjust import path to your models

User = get_user_model()

FIRST_NAMES = ["Lily", "Maya", "Sasha", "Chloe", "Zara", "Nia", "Ava", "Ruby", "Jade", "Ella"]
LAST_NAMES = ["Smith", "Jones", "Brown", "Taylor", "Williams", "Johnson", "Lee", "Davis", "Moore", "Clark"]
SERVICES = [
    {"name": "Manicure", "price": 150, "duration": 60},
    {"name": "Pedicure", "price": 200, "duration": 75},
    {"name": "Gel Nails", "price": 250, "duration": 90},
    {"name": "Nail Art", "price": 300, "duration": 60},
]

class Command(BaseCommand):
    help = "Seed 10 sample nail technicians with services"

    def handle(self, *args, **kwargs):
        for i in range(10):
            first = random.choice(FIRST_NAMES)
            last = random.choice(LAST_NAMES)
            username = f"{first.lower()}{i}"
            email = f"{username}@example.com"

            # create user
            user, created = User.objects.get_or_create(
                username=username,
                defaults={"email": email, "is_staff": False},
            )

            # create tech profile
            profile, created = TechProfile.objects.get_or_create(
                user=user,
                defaults={
                    "bio": f"{first} is a professional nail technician.",
                    "location": f"City {i+1}",
                },
            )

            # create services
            for s in SERVICES:
                Service.objects.get_or_create(
                    tech=profile,
                    name=s["name"],
                    defaults={"price": s["price"], "duration": timedelta(minutes=s["duration"])},
                )

        self.stdout.write(self.style.SUCCESS("Successfully seeded 10 techs with services!"))

