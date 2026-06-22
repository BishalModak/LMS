import api from "./api";

export const enrollCourse = async (courseId) => {
  const response = await api.post("/enroll/", {
    course: courseId,
  });

  return response.data;
};

export const getMyCourses = async () => {
  const response = await api.get("/my-courses/");

  return response.data;
};
