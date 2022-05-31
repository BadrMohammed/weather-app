import './WeatherForecast.scss';
import { Card, CardImg, Col, Row } from 'reactstrap';
import React from 'react';
import { local } from '../../../lang/local';
import Skeleton from 'react-loading-skeleton';
export const WeatherForecastView = ({ selectedState ,getImage}: any) => {

  return (
    <section className='weather-forecast-section'>
      <div className='container'>
        <Row>
         <h4 className='title bold'>{local.weatherForecast}</h4>
          <Col className='mx-auto mt-3'>
            <Card className='weather-card'>
              {Object.values(selectedState).length>0?
              <React.Fragment>
              <CardImg
                alt=''
                src={
                  selectedState.photo
                    ? selectedState.photo
                    : 'https://picsum.photos/318/180'
                }
                top
              />

              {selectedState.weather &&
              Object.values(selectedState.weather).length > 0 ? (
                <React.Fragment>
                 

                  <div className='info-wrapper'>
                    <div className='info1'>
                      <div className='flex alignItem'>
                        <img className='weather-img' src={getImage()} alt='' />
                      </div>
                      <h1 className='degree-text'>{selectedState.weather.data.current_condition[0].temp_C}<sup>C</sup></h1>
                      <p>{selectedState.weather.data.request[0].query}</p>
                    </div>
                    <div className='info2'>
                      <p>
                        {
                          selectedState.weather.data.current_condition[0]
                            .observation_time
                        }
                      </p>
                      <p>{selectedState.weather.data.weather[0].date}</p>
                    </div>
                  </div>
                </React.Fragment>
              ) : null}
              </React.Fragment>:<Skeleton borderRadius="inherit" enableAnimation={true} />}
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};
