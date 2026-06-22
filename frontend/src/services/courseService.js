import api from "./api";

export const getCourses = async () => {
  const response = await api.get("/courses/");
  return response.data;
};

export const getCourse = async (id) => {
  const response = await api.get(`/courses/${id}/`);
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

export const getInstructorCourses = async () => {
  const response = await api.get("/courses/");
  return response.data;
};
