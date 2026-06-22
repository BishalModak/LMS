import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getCourse } from "../../services/courseService";

import { enrollCourse } from "../../services/enrollmentService";

const CourseDetails = () => {
  const { id } = useParams();

  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const data = await getCourse(id);

      setCourse(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEnroll = async () => {
    try {
      await enrollCourse(course.id);

      alert("Enrollment Successful");
    } catch (error) {
      alert("Already Enrolled");
    }
  };

  if (!course) return <h3>Loading...</h3>;

  return (
    <div className="container mt-4">
      <h2>{course.title}</h2>

      <p>{course.description}</p>

      <p>Category: {course.category_name}</p>

      <p>Instructor: {course.instructor_name}</p>

      <p>Price: ৳{course.price}</p>

      <button onClick={handleEnroll} className="btn btn-success">
        Enroll Now
      </button>
    </div>
  );
};

export default CourseDetails;
