from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ValidationError

from .models import Enrollment
from .serializers import EnrollmentSerializer

from courses.models import Course
# Create your views here.
class EnrollCourseView(
    generics.CreateAPIView
):

    serializer_class = EnrollmentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):

        course = serializer.validated_data['course']

        if Enrollment.objects.filter(
            student=self.request.user,
            course=course
        ).exists():

            raise ValidationError(
                "You are already enrolled in this course."
            )

        serializer.save(
            student=self.request.user
        )


class MyCoursesView(
    generics.ListAPIView
):

    serializer_class = EnrollmentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):

        return Enrollment.objects.filter(
            student=self.request.user
        )