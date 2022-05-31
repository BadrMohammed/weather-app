import './TableList.scss';
import { Card, Col, Row } from 'reactstrap';
import { CustomTable } from '../../../components/CustomTable/CustomTable';
import { WiHumidity } from 'react-icons/wi';
import { MdOutlineWbSunny } from 'react-icons/md';
import { FiSunrise, FiSunset } from 'react-icons/fi';
import { local } from '../../../lang/local';
export const TableListView = ({ getData, selectedState }: any) => {
  const renderstatisticsItem = (
    Icon: any,
    iconSize: any,
    title: any,
    num: any
  ) => {
    return (
      <div className='flex icon-wrapper mt-4'>
        <Icon size={iconSize} className='icon' />
        <h5>
          {local[title]}
          <p className='bold'>{num}</p>
        </h5>
      </div>
    );
  };
  const columns = [
    {
      id: 'index',
      label: 'id',
    },
    {
      id: 'month',
      label: 'month',
    },
    {
      id: 'avgMinTemp',
      label: 'averageMinTemperature',
    },
    {
      id: 'avgDailyRainfall',
      label: 'averageDailyRainfall',
    },
  ];
  return (
    <section className='table-list-section'>
      <div className='container'>
        <Row>
          <Col xl={6} lg={6} md={6} sm={12} xs={12} className='mx-auto'>
            <Card className='state-statistics-card mt-2 center'>
              <div className='text-container'>
                {selectedState.weather &&
                Object.values(selectedState.weather).length > 0 ? (
                  <Row className='fullWH'>
                    <Col xl={5} className='center mx-auto'>
                      <div>
                        {renderstatisticsItem(
                          WiHumidity,
                          30,
                          'humidity',
                          `${selectedState.weather.data.current_condition[0].humidity}%`
                        )}
                        {renderstatisticsItem(
                          MdOutlineWbSunny,
                          30,
                          'uvIndex',
                          selectedState.weather.data.current_condition[0]
                            .uvIndex
                        )}
                      </div>
                    </Col>
                    <Col xl={1}>
                      <div className='vr'></div>
                    </Col>
                    <Col xl={5} className='center mx-auto'>
                      <div>
                        {renderstatisticsItem(
                          FiSunset,
                          25,
                          'sunset',
                          selectedState.weather.data.weather[0].astronomy[0]
                            .sunset
                        )}
                        {renderstatisticsItem(
                          FiSunrise,
                          25,
                          'sunrise',
                          selectedState.weather.data.weather[0].astronomy[0]
                            .sunrise
                        )}
                      </div>
                    </Col>
                  </Row>
                ) : null}
              </div>
            </Card>
            <Card className='year-statistics-card mt-2 center'>
              {selectedState.weather &&
              Object.values(selectedState.weather).length > 0 ? (
                <div
                  className='flex alignItem fullWH'
                  style={{ justifyContent: 'space-between' }}
                >
                  <div className='content-container-1'>
                    <p>{local.status}</p>

                    <p className='bold'>
                      {
                        selectedState.weather.data.current_condition[0]
                          .weatherDesc[0].value
                      }
                    </p>
                  </div>

                  <div className='content-container-2'>
                    <p>{local.timeZone}</p>
                    <p className='bold'>
                      {selectedState.weather.data.time_zone[0].zone}
                    </p>
                  </div>
                </div>
              ) : null}
            </Card>
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} xs={12} className='mx-auto mt-2'>
            <CustomTable columns={columns} getData={getData} />
          </Col>
        </Row>
      </div>
    </section>
  );
};
