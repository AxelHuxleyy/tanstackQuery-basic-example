import axios from 'axios';
import { User } from '../types/User';

export const addUser = async (payload: Omit<User, '_id'>) => {
  try {
    const response = await axios.post('http://localhost:3000/api/post', {
      ...payload,
    });
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Error fetching data');
  }
};
