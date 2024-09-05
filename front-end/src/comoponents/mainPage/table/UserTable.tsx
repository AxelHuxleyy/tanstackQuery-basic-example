import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  CircularProgress,
} from '@mui/material';
import { useAppDispatch } from '../../../app/hooks';
import { openViewModal } from '../../../slices/viewModalSlice';
import { openDeleteModal, openEditModal } from '../../../slices';
import { useQueryGetAll } from '../../../hooks';
import { ErrorMessage } from '../../ErrorMesagge';

export const UsersTable = () => {
  const { data, isFetching, isError, error } = useQueryGetAll();

  const dispatch = useAppDispatch();

  const handleOpenViewModal = (id: string) => {
    dispatch(openViewModal(id));
  };
  const handleOpenEditModal = (id: string) => {
    console.log(id);
    dispatch(openEditModal(id));
  };
  const handleDeleteModal = (id: string) => {
    dispatch(openDeleteModal(id));
  };
  if (isFetching) return <CircularProgress />;
  if (isError) return <ErrorMessage error={error} />;
  if (data?.length === 0) return <p>No data to Show</p>;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>userName</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow
              key={row.userName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.userName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">
                <div className="flex gap-2 justify-end">
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={() => handleOpenEditModal(row._id)}
                  >
                    Edit{' '}
                  </Button>
                  <Button
                    color="info"
                    variant="contained"
                    onClick={() => handleOpenViewModal(row._id)}
                  >
                    View{' '}
                  </Button>
                  <Button
                    color="warning"
                    variant="contained"
                    onClick={() => handleDeleteModal(row._id)}
                  >
                    Delete{' '}
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
