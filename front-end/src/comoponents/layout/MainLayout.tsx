import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import ViewUserModal from './modals/modalViewUser';
import { EditUser } from './modals/editUser';
import { DeleteUser } from './modals/deleteUser';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full flex flex-col ">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            React Query
          </Typography>
        </Toolbar>
      </AppBar>

      <Container className="flex-grow mt-4">{children}</Container>

      <ViewUserModal />
      <EditUser />
      <DeleteUser />
    </div>
  );
};
