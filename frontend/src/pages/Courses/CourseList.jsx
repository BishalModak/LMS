import { useEffect, useState } from "react";

import { getCourses } from "../../services/courseService";
import { getCategories } from "../../services/categoryService";

import CourseCard from "../../components/CourseCard/CourseCard";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [categories, setCategories] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetchCourses();
    fetchCategories();
  }, []);

  const fetchCourses = async () => {
    try {
      const data = await getCourses();

      setCourses(data);
      setFilteredCourses(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await getCategories();

      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (value) => {
    setSearchTerm(value);

    filterCourses(value, selectedCategory);
  };

  const handleCategoryFilter = (value) => {
    setSelectedCategory(value);

    filterCourses(searchTerm, value);
  };

  const filterCourses = (searchValue, categoryValue) => {
    let filtered = [...courses];

    if (searchValue) {
      filtered = filtered.filter((course) =>
        course.title.toLowerCase().includes(searchValue.toLowerCase()),
      );
    }

    if (categoryValue) {
      filtered = filtered.filter(
        (course) => String(course.category) === String(categoryValue),
      );
    }

    setFilteredCourses(filtered);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Courses</h2>

      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search Courses..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        <div className="col-md-6">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => handleCategoryFilter(e.target.value)}
          >
            <option value="">All Categories</option>

            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-warning">No courses found.</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseList;
