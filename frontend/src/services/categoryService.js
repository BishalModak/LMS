import api from "./api";

export const getCategories = async () => {
  const response = await api.get("/categories/");
  return response.data;
};

export const createCourse = async (courseData) => {
  const response = await api.post("/courses/create/", courseData);

  return response.data;
};

export const updateCourse = async (id, courseData) => {
  const response = await api.put(`/courses/update/${id}/`, courseData);

  return response.data;
};

export const deleteCourse = async (id) => {
  const response = await api.delete(`/courses/delete/${id}/`);

  return response.data;
};

export const createCategory = async (data) => {
  const response = await api.post("/categories/", data);

  return response.data;
};

export const updateCategory = async (id, data) => {
  const response = await api.put(`/categories/${id}/`, data);

  return response.data;
};

export const deleteCategory = async (id) => {
  const response = await api.delete(`/categories/${id}/`);

  return response.data;
};
