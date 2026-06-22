import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getInstructorCourses,
  deleteCourse,
} from "../../services/courseService";
const MyCourses = () => {
  const [courses, setCourses] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const data = await getInstructorCourses();

      const myCourses = data.filter(
        (course) => course.instructor_name === user.username,
      );

      setCourses(myCourses);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this course?");

    if (!confirmDelete) return;

    try {
      await deleteCourse(id);

      setCourses(courses.filter((course) => course.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between">
        <h2>My Courses</h2>

        <Link to="/create-course" className="btn btn-primary">
          Create Course
        </Link>
      </div>

      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.title}</td>

              <td>{course.category_name}</td>

              <td>৳{course.price}</td>

              <td>
                <Link
                  to={`/edit-course/${course.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(course.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCourses;
