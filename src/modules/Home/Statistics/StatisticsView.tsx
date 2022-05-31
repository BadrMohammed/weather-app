import { Card, Col, Row } from 'reactstrap';
import './Statistics.scss';
import { AreaChart } from '../../../components/Charts/AreaChart';
import { Chart } from '../../../components/Charts/d3/Chart';
import Skeleton from 'react-loading-skeleton';
export const StatisticsView = ({ getHourlyData, getHistoryData }: any) => {
  return (
    <section className='statistics-section'>
      <div className='container'>
        <Row className='alignItem'>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} className='mx-auto'>
            <Card className='chart-card mt-2'>
              <div className='fullWH'>
                {getHourlyData().axis ? (
                  <AreaChart data={getHourlyData()} />
                ) : (
                  <Skeleton borderRadius='inherit' enableAnimation={true} />
                )}
              </div>
            </Card>
          </Col>

          <Col xl={6} lg={6} md={6} sm={12} xs={12} className='mx-auto'>
            <Card className='chart-card mt-2'>
              <div className='fullWH'>
                {getHistoryData().length > 0 ? (
                  <Chart data={getHistoryData()} />
                ) : (
                  <Skeleton borderRadius='inherit' enableAnimation={true} />
                )}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};
