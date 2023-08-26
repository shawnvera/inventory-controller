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
from rest_framework.decorators import api_view, permission_classes

# Create your views here.

class ProductDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

@api_view(['PUT'])
def modify_item(request):
    if request.method == "PUT":
        user=request.user
        item_id=request.data.get('id')
        product = Product.objects.get(id=item_id)
        product.quantity = request.data.get('quantity')
        product.save()
    return Response({'message': 'Quantity was updated'}, status=status.HTTP_201_CREATED)


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

    def perform_destroy(self, instance):
        instance.destroy()


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


# class ProductUpdateViewSet(generics.UpdateAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductUpdateSerializer