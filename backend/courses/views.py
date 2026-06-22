from rest_framework import generics
from .models import Category
from .serializers import CategorySerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import Course
from .serializers import CourseSerializer

from accounts.permissions import IsInstructor

class CategoryListCreateView(
    generics.ListCreateAPIView
):

    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailView(
    generics.RetrieveUpdateDestroyAPIView
):

    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CourseListView(
    generics.ListAPIView
):

    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseDetailView(
    generics.RetrieveAPIView
):

    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class CreateCourseView(
    generics.CreateAPIView
):

    serializer_class = CourseSerializer

    permission_classes = [
        IsAuthenticated,
        IsInstructor
    ]

    def perform_create(self, serializer):
        serializer.save(
            instructor=self.request.user
        )

class UpdateCourseView(
    generics.UpdateAPIView
):

    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    permission_classes = [
        IsAuthenticated,
        IsInstructor
    ]


class DeleteCourseView(
    generics.DestroyAPIView
):

    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    permission_classes = [
        IsAuthenticated,
        IsInstructor
    ]