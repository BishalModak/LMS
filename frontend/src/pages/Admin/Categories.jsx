import { useEffect, useState } from "react";

import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../services/categoryService";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const [name, setName] = useState("");

  const [editingId, setEditingId] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await updateCategory(editingId, { name });

        setEditingId(null);
      } else {
        await createCategory({
          name,
        });
      }

      setName("");

      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (category) => {
    setEditingId(category.id);

    setName(category.name);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete Category?");

    if (!confirmDelete) return;

    try {
      await deleteCategory(id);

      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Category Management</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row">
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              placeholder="Category Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <button className="btn btn-primary w-100">
              {editingId ? "Update" : "Create"}
            </button>
          </div>
        </div>
      </form>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>

              <td>{category.name}</td>

              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(category)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(category.id)}
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

export default Categories;
