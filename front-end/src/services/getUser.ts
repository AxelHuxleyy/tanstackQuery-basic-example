import axios from 'axios';
import { User } from '../types/User';

export const getUserService = async (id?: string): Promise<User> => {
  try {
    const response = await axios(`http://localhost:3000/api/getOne/${id}`);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Error fetching data');
  }
};
