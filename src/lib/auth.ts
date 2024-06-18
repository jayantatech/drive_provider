import axios, { AxiosError } from "axios";

const API_URL = "/api/sign-up/";

export const signUp = async (
  firstName: string,
  lastName: string,
  phone: string,
  location: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  try {
    const response = await axios.post("/api/sign-up/", {
      firstName,
      lastName, // Adjust name formatting if necessary
      email,
      phone,
      location,
      password,
      confirmPassword,
    });
    console.log("This is the response data ok ", response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.error(
          "Request made but server responded with error status",
          axiosError.response.status,
          axiosError.response.data
        );
        throw new Error(axiosError.response.data.message || "SignUp failed");
      } else if (axiosError.request) {
        console.error(
          "Request made but no response received",
          axiosError.request
        );
        throw new Error("No response from server");
      } else {
        console.error("Error setting up request", axiosError.message);
        throw new Error("Request setup error");
      }
    } else {
      console.error("Non-Axios error occurred", error);
      throw new Error("An unexpected error occurred");
    }
  }
};
