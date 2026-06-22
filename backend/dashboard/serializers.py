from rest_framework import serializers


class DashboardSerializer(serializers.Serializer):

    total_users = serializers.IntegerField()
    total_courses = serializers.IntegerField()
    total_enrollments = serializers.IntegerField()

    admin_count = serializers.IntegerField()
    instructor_count = serializers.IntegerField()
    student_count = serializers.IntegerField()