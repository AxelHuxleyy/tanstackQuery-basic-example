import { FC } from 'react';

interface Props {
  error: Error | null;
}

export const ErrorMessage: FC<Props> = ({ error }) => {
  return (
    <div className="w-full bg-red-600 py-3 justify-center">
      <p className="text-white text-center">
        {error?.message ?? `Something went wrong, please try again later. :(`}
      </p>
    </div>
  );
};
