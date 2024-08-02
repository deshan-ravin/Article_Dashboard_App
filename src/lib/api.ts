import axiosInstance from './axios';

// Function for user login
export const login = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post('/login', { email, password });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'An error occurred during login.');
  }
};

// Function for user signup
export const signup = async (email: string, password: string, name: string) => {
  try {
    const response = await axiosInstance.post('/signup', { email, password, name });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'An error occurred during signup.');
  }
};
