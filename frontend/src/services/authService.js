import api from "./api";

export const getProfile = async () => {
  const response = await api.get("/auth/profile/");
  return response.data;
};

export const updateProfile = async (data) => {
  const response = await api.put("/auth/profile/update/", data);

  return response.data;
};

export const forgotPassword =
  async (data) => {

    const response =
      await api.post(
        "/auth/forgot-password/",
        data
      );

    return response.data;
};

export const resetPassword =
  async (data) => {

    const response =
      await api.post(
        "/auth/reset-password/",
        data
      );

    return response.data;
};