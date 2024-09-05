import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getAllUsers } from '../../services/getAll';
import { User } from '../../types/User';

export const useQueryGetAll = (): UseQueryResult<
  Array<Pick<User, 'userName' | 'email' | 'firstName' | 'phone' | '_id'>>
> => {
  return useQuery({ queryKey: ['allUsers'], queryFn: getAllUsers });
};
