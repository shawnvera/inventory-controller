from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt import views as jwt_views
from rest_framework import routers
from inventory import views
from api import urls

router = routers.DefaultRouter()
router.register(r'inventory', views.ProductViewSet)
router.register(r'user', views.UserViewSet)
router.register(r'customer', views.CustomerViewSet)

urlpatterns = [
    # path('user/signup/', UserCreate.as_view(), name="create_user"),
    # path('api/', include('api.urls')),
    # path('users/<int:pk>/', UserDetail.as_view(), name="get_user_details"),
    # path('user/login/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),
    # path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    # path('api-auth/', include('rest_framework.urls')),
    # path('inventory', include('inventory.urls')
    path('', include(router.urls)),
]