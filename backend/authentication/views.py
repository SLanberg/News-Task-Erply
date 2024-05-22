from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer

class UserCreateAPIView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            errors = {}
            for field, messages in serializer.errors.items():
                if field == 'email':
                    errors[field] = ['Invalid email format.']
                else:
                    errors[field] = messages
            return Response(errors, status=status.HTTP_400_BAD_REQUEST)
