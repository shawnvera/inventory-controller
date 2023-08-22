from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt import views as jwt_views
from rest_framework import routers

urlpatterns = [
    path('api/', include('inventory.urls')),
    path('admin/', admin.site.urls),
    ]

# Add to the bottom of the urls.py in the project directory.

# urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
