from rest_framework import serializers
from .models import Category,Course


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):

    instructor_name = serializers.CharField(
        source='instructor.username',
        read_only=True
    )

    category_name = serializers.CharField(
        source='category.name',
        read_only=True
    )

    class Meta:
        model = Course
        fields = '__all__'
        read_only_fields = ['instructor']