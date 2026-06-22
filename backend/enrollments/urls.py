from django.urls import path

from .views import (
    EnrollCourseView,
    MyCoursesView
)

urlpatterns = [

    path(
        'enroll/',
        EnrollCourseView.as_view(),
        name='enroll'
    ),

    path(
        'my-courses/',
        MyCoursesView.as_view(),
        name='my_courses'
    ),
]