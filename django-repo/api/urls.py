"""
URL configuration for api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt import views as jwt_views
from rest_framework import routers
# from inventory import views, urls
# from api import urls

# router = routers.DefaultRouter()
# router.register(r'inventory', views.ProductViewSet)
# router.register(r'user', views.UserViewSet)
# router.register(r'customer', views.CustomerViewSet)

urlpatterns = [
    path('api/', include('inventory.urls')),
    # path('admin/', admin.site.urls),
    ]

# Add to the bottom of the urls.py in the project directory.

# urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
