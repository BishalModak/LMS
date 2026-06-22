from django.urls import path

from .views import (
    AdminDashboardView,
    InstructorDashboardView,
    StudentDashboardView
)

urlpatterns = [

    path(
        'admin-dashboard/',
        AdminDashboardView.as_view()
    ),

    path(
        'instructor-dashboard/',
        InstructorDashboardView.as_view()
    ),

    path(
        'student-dashboard/',
        StudentDashboardView.as_view()
    ),
]