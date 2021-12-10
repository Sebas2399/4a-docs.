from rest_framework import generics
from rest_framework.response import Response
from authApp.models.user import User
from authApp.serializers.userSerializer import UserSerializer

# Option 2 Create Contractor
class UserCreateView2 (generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Get All Users
class UserGetAllApi(generics.ListAPIView): 
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Get Selected ID User
class UserGetSelectedApi(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
 
# Delete Selected ID User
class UserDeleteApi(generics.DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer