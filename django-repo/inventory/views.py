from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets, filters
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status, permissions, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import action
from .models import *
from .serializers import *
from django.db.models import Sum
from django_filters.rest_framework import DjangoFilterBackend
# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CustomerProductFilteredViewSet(generics.ListAPIView):
    serializer_class = ProductSerializer
    # filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]

    # filterset_fields = ['id', 'name', 'customer']
    # search_fields = ['id', 'name', 'customer']
    # ordering_fields = ['id', 'name', 'customer']

    def get_queryset(self):
        """
        Optionally restricts the returned products to a given user,
        by filtering against a `customer` query parameter in the URL.
        """
        user = self.request.user
        get_extra_actions = []
        queryset = Product.objects.all()
        customer = self.request.query_params.get('customer')
        if customer is not None:
            queryset = queryset.filter(customer=customer)
        return queryset

class UserCreate(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()
    def post(self, request, format='json'):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserDetail(generics.RetrieveAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = User.objects.all()
    serializer_class = CustomUserSerializer