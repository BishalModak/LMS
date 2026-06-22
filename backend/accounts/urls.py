from django.urls import path

from .views import (
    RegisterView,
    ProfileView,
    UpdateProfileView,
    AdminOnlyView,
    ForgotPasswordView,
    ResetPasswordView
)

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

urlpatterns = [

    path(
        'register/',
        RegisterView.as_view(),
        name='register'
    ),

    path(
        'login/',
        TokenObtainPairView.as_view(),
        name='login'
    ),

    path(
        'token/refresh/',
        TokenRefreshView.as_view(),
        name='token_refresh'
    ),

    path(
        'profile/',
        ProfileView.as_view(),
        name='profile'
    ),

    path(
        'profile/update/',
        UpdateProfileView.as_view(),
        name='profile_update'
    ),
    path(
    'admin-test/',
    AdminOnlyView.as_view(),
    name='admin_test'
),

    path(
    "forgot-password/",
    ForgotPasswordView.as_view()
),

path(
    "reset-password/",
    ResetPasswordView.as_view()
),
]