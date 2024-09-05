import axios from 'axios';

export const deleteUserService = async (id?: string): Promise<string> => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/delete/${id}`,
    );
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Error fetching data');
  }
};
