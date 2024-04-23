from django.db import models

# Create your models here.
class BlogPost(models.Model):
    title=models.CharField(max_length=200)
    description = models.TextField()
    date =models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title