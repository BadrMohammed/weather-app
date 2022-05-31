import React, { useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { fetchCountry } from './homeService';
import { StatisticsController } from './Statistics/StatisticsController';
import { TableListController } from './TableList/TableListController';
import { WeatherForecastController } from './WeatherForecast/WeatherForecastController';

export const HomeController = () => {
  const dispatch = useAppDispatch();
  // const askToGetLocation = () => {
  //   let getLocationPromise = new Promise((resolve, reject) => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(
  //         function (position) {
  //           let lat = position.coords.latitude;
  //           let long = position.coords.longitude;

  //           resolve({ latitude: lat, longitude: long });
  //         },
  //         function (error) {
  //           reject(error);
  //         }
  //       );
  //     } else {
  //     }
  //   });

  //   getLocationPromise
  //     .then((location: any) => {
  //       debugger
  //       return { lat: location.latitude, lng: location.longitude };
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       fetchCountry(dispatch);
  //     });
  // };

  useEffect(() => {
    // askToGetLocation();
    fetchCountry(dispatch);
  }, []);

  return (
    <React.Fragment>
      <WeatherForecastController />
      <StatisticsController />
      <TableListController/>
    </React.Fragment>
  );
};
