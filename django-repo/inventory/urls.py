from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from rest_framework import routers
from .views import *

# routers

router = routers.DefaultRouter()
router.register(r'inventory', ProductViewSet)
router.register(r'user', UserViewSet)
router.register(r'customer', CustomerViewSet)
# router.register(r'prod_update', ProductUpdateViewSet, basename='product-update')

urlpatterns = [
    path('user/signup/', UserCreate.as_view(), name="create_user"),
    path('users/<int:pk>/', UserDetail.as_view(), name="get_user_details"),
    path('user/login/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('', include(router.urls)),
    path('prod_filter/', CustomerProductFilteredViewSet.as_view(), name='prod_filter'),
    path('prod_destroy/<int:pk>/', ProductDestroyView.as_view(), name='product-delete'),
    path('prod_update/', modify_item, name='product-update'),
    ]