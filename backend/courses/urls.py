from django.urls import path

from .views import (
    CategoryListCreateView,
    CategoryDetailView,
    CourseListView,
    CourseDetailView,
    CreateCourseView,
    UpdateCourseView,
    DeleteCourseView
)

urlpatterns = [

    path(
        'categories/',
        CategoryListCreateView.as_view(),
        name='categories'
    ),

    path(
        'categories/<int:pk>/',
        CategoryDetailView.as_view(),
        name='category_detail'
    ),

    path(
    'courses/',
    CourseListView.as_view(),
    name='courses'
),

    path(
    'courses/<int:pk>/',
    CourseDetailView.as_view(),
    name='course_detail'
),

    path(
    'courses/create/',
    CreateCourseView.as_view(),
    name='course_create'
),

    path(
    'courses/update/<int:pk>/',
    UpdateCourseView.as_view(),
    name='course_update'
),

    path(
    'courses/delete/<int:pk>/',
    DeleteCourseView.as_view(),
    name='course_delete'
),
]