import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getCourse, updateCourse } from "../../services/courseService";

const EditCourse = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const data = await getCourse(id);

      setFormData({
        title: data.title,
        description: data.description,
        price: data.price,
        category: data.category,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateCourse(id, formData);

      alert("Course Updated");

      navigate("/instructor-courses");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Course</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-3"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />

        <button className="btn btn-primary">Update Course</button>
      </form>
    </div>
  );
};

export default EditCourse;
