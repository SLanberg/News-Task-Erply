from django.db import models


class User(models.Model):
    email = models.EmailField()
    key = models.CharField(max_length=100)  # Adjust the max length as needed

    def __str__(self):
        return self.email