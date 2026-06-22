import { useEffect, useState } from "react";

import { getCategories } from "../../services/categoryService";

import { createCourse } from "../../services/courseService";

const CreateCourse = () => {
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await getCategories();

      setCategories(data);
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
      await createCourse(formData);

      alert("Course Created Successfully");

      setFormData({
        title: "",
        description: "",
        price: "",
        category: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create Course</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>Description</label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>Price</label>

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>Category</label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-control"
          >
            <option value="">Select Category</option>

            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <button className="btn btn-primary" type="submit">
          Create Course
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;
