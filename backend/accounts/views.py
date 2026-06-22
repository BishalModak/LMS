from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import User
from .serializers import RegisterSerializer, ProfileSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.mail import send_mail
from django.contrib.auth.tokens import PasswordResetTokenGenerator

from .serializers import (
    ForgotPasswordSerializer,
    ResetPasswordSerializer
)
from .permissions import IsAdmin

class RegisterView(generics.CreateAPIView):

    queryset = User.objects.all()
    serializer_class = RegisterSerializer


class ProfileView(generics.RetrieveAPIView):

    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user


class UpdateProfileView(generics.UpdateAPIView):

    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user
    

class AdminOnlyView(APIView):

    permission_classes = [IsAdmin]

    def get(self, request):
        return Response({
            "message": "Welcome Admin"
        })
    

class ForgotPasswordView(APIView):

    def post(self, request):

        serializer = ForgotPasswordSerializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        email = serializer.validated_data[
            "email"
        ]

        try:

            user = User.objects.get(
                email=email
            )

            token_generator = (
                PasswordResetTokenGenerator()
            )

            token = (
                token_generator.make_token(
                    user
                )
            )

            reset_link = (
                f"http://localhost:5173/reset-password"
                f"?email={user.email}"
                f"&token={token}"
            )

            send_mail(
                subject="LMS Password Reset",
                message=f"""
Hello {user.username},

Click the link below to reset your password:

{reset_link}
""",
                from_email=None,
                recipient_list=[user.email],
                fail_silently=False,
            )

            return Response(
                {
                    "message":
                    "Password reset email sent."
                }
            )

        except User.DoesNotExist:

            return Response(
                {
                    "error":
                    "User not found"
                },
                status=404
            )
        
class ResetPasswordView(APIView):

    def post(self, request):

        print(request.data)

        serializer = ResetPasswordSerializer(
            data=request.data
        )

        if not serializer.is_valid():

            print(serializer.errors)

            return Response(
                serializer.errors,
                status=400
            )

        email = serializer.validated_data[
            "email"
        ]

        password = serializer.validated_data[
            "password"
        ]

        user = User.objects.get(
            email=email
        )

        user.set_password(
            password
        )

        user.save()

        return Response(
            {
                "message":
                "Password reset successful."
            }
        )
