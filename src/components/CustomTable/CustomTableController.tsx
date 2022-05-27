import * as React from 'react';
import CustomTableView from './CustomTableView';

function descendingComparator<T>(nextValue: T, prevValue: T, orderBy: keyof T) {
  if (prevValue[orderBy] < nextValue[orderBy]) {
    return -1;
  }
  if (prevValue[orderBy] > nextValue[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
  ) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number,
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
}

function CustomTableController({
  columns,
  data,
  menuActions,
  pagination,
}: any) {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<any>('id');

  const handleRequestSort = (event: any, property: any) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <CustomTableView
      columns={columns}
      data={data}
      menuActions={menuActions}
      pagination={pagination}
      order={order}
      orderBy={orderBy}
      handleRequestSort={handleRequestSort}
      stableSort={stableSort}
      getComparator={getComparator}
    />
  );
}

export default CustomTableController;
