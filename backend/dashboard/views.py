from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from accounts.models import User
from courses.models import Course
from enrollments.models import Enrollment

from accounts.permissions import IsAdmin
# Create your views here.
class AdminDashboardView(APIView):

    permission_classes = [
        IsAuthenticated,
        IsAdmin
    ]

    def get(self, request):

        data = {

            "total_users":
                User.objects.count(),

            "total_courses":
                Course.objects.count(),

            "total_enrollments":
                Enrollment.objects.count(),

            "admin_count":
                User.objects.filter(
                    role='ADMIN'
                ).count(),

            "instructor_count":
                User.objects.filter(
                    role='INSTRUCTOR'
                ).count(),

            "student_count":
                User.objects.filter(
                    role='STUDENT'
                ).count(),
        }

        return Response(data)
    
class InstructorDashboardView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        my_courses = Course.objects.filter(
            instructor=request.user
        )

        total_students = Enrollment.objects.filter(
            course__in=my_courses
        ).count()

        data = {

            "my_courses":
                my_courses.count(),

            "total_students":
                total_students
        }

        return Response(data)
    

class StudentDashboardView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        data = {

            "enrolled_courses":
                Enrollment.objects.filter(
                    student=request.user
                ).count()
        }

        return Response(data)