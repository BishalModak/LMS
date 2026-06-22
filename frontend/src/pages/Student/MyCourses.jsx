import { useEffect, useState } from "react";

import { getMyCourses } from "../../services/enrollmentService";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const data = await getMyCourses();

      setCourses(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>My Courses</h2>

      <ul className="list-group">
        {courses.map((course) => (
          <li key={course.id} className="list-group-item">
            {course.course_title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyCourses;
