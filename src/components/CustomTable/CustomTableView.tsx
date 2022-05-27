import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import { Box, Typography } from '@mui/material';

function EnhancedTableHead({ order, orderBy, onRequestSort, columns }: any) {
  const createSortHandler = (property: any) => (event: any) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map((headCell: any) => (
          <TableCell
            align='center'
            key={headCell?.id}
            padding='normal'
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <Typography
                component='p'
                sx={{ fontWeight: 'bold', color: 'rgba(0, 115, 37, 1)' }}
              >
                {headCell.label}
              </Typography>
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function CustomTableView({
  columns,
  data,
  menuActions,
  pagination,
  order,
  orderBy,
  handleRequestSort,
  stableSort,
  getComparator,
  PaginationController,
}: any) {
  const { page, rowsPerPage } = pagination;

  return (
    <TableContainer>
      <Table aria-labelledby='tableTitle' size='medium'>
        <EnhancedTableHead
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
          columns={columns}
        />
        <TableBody>
          {stableSort(data, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row: any, index: string | number) => {
              const labelId = `enhanced-table-checkbox-${+index}`;

              return (
                <TableRow hover tabIndex={-1} key={labelId}>
                  {Object.values(row).map((item: any) => {
                    return (
                      <TableCell key={labelId + Number(labelId)} align='center'>
                        {item}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      {data.length > 0 ? (
        <PaginationController pagination={pagination} data={data} />
      ) : null}
    </TableContainer>
  );
}

export default CustomTableView;
