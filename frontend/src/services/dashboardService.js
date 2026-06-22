import api from "./api";

export const getAdminDashboard = async () => {
  const response = await api.get("/dashboard/admin-dashboard/");
  return response.data;
};

export const getInstructorDashboard = async () => {
  const response = await api.get("/dashboard/instructor-dashboard/");
  return response.data;
};

export const getStudentDashboard = async () => {
  const response = await api.get("/dashboard/student-dashboard/");
  return response.data;
};
