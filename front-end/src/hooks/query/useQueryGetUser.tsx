import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getUserService } from '../../services/getUser';
import { User } from '../../types/User';

export const useQueryGetUser = (id?: string): UseQueryResult<User> => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => getUserService(id),
    enabled: !!id,
  });
};
