import { FC } from 'react';
import { ModalButtons } from './modalButtons';
import { UsersTable } from './table/UserTable';

export const MainPage: FC = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <ModalButtons />
      <div className="mt-2">
        <UsersTable />
      </div>
    </div>
  );
};
