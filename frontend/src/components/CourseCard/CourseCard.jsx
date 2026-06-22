import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5>{course.title}</h5>

          <p>{course.category_name}</p>

          <p>Instructor: {course.instructor_name}</p>

          <p>৳{course.price}</p>

          <Link to={`/course/${course.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
