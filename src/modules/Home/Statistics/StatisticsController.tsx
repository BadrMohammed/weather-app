import { useAppSelector } from '../../../redux/hooks';
import { homeSlice } from '../../../redux/store';
import { StatisticsView } from './StatisticsView';

export const StatisticsController = () => {
  const homeState = useAppSelector(homeSlice.state);
  const { selectedState } = homeState;
  const getHourlyData = () => {
    if (
      selectedState.weather &&
      Object.values(selectedState.weather).length > 0
    ) {
      let times = selectedState.weather.data.weather[0].hourly.map((h: any) => {
        let date = new Date();
        date.setHours(Math.floor(+h.time / 100));
        return date.toLocaleString();
      });

      let axis = { categories: times, type: 'datetime' };

      let values = selectedState.weather.data.weather[0].hourly.map(
        (h: any) => h.tempC
      );

      let series = [{ name: 'Hourly', data: values }];

      return { axis, series };
    } else {
      return { axis: null, series: null };
    }
  };

  const getHistoryData = () => {
    if (
      selectedState.weather &&
      Object.values(selectedState.weather).length > 0
    ) {
      let months = selectedState.weather.data.ClimateAverages[0].month.map(
        (m: any) => {
          let date = new Date();
          let month = +m.index - 1;
          date.setMonth(month);
          return {
            month: date,
            average: +m.avgMinTemp,
          };
        }
      );

      return months;
    } else {
      return [];
    }
  };

  return (
    <StatisticsView
      selectedState={homeState.selectedState}
      getHourlyData={getHourlyData}
      getHistoryData={getHistoryData}
    />
  );
};
