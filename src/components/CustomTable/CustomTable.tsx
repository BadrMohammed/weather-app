import { Card, Table } from 'reactstrap';
import { local } from '../../lang/local';
import './CustomTable.scss';
export const CustomTable = ({ columns, getData }: any) => {
  return (
    <div>
      <Card className='table-card'>
        <Table hover responsive>
          <thead>
            <tr className='text-center'>
              {columns &&
                columns.map((col: any, index: any) => {
                  return <th key={index}>{local[col.label]}</th>;
                })}
            </tr>
          </thead>
          <tbody>
            {getData().length > 0 &&
              getData().map((row: any, index: any) => {
                return (
                  <tr className='text-center' key={index}>
                    {Object.values(row).map((item: any, i: any) => {
                      return <td key={i}>{item}</td>;
                    })}
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};
