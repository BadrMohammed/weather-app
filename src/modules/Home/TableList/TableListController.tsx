import { useAppSelector } from '../../../redux/hooks';
import { homeSlice } from '../../../redux/store';
import { TableListView } from './TableListView';

export const TableListController = () => {
  const homeState = useAppSelector(homeSlice.state);
  const { selectedState } = homeState;

  const getData = () => {
    if (
      selectedState.weather &&
      Object.values(selectedState.weather).length > 0
    ) {
      return selectedState.weather.data.ClimateAverages[0].month.map(
        (m: any) => {
          return {
            index: m.index,
            month: m.name,
            avgMinTemp: m.avgMinTemp,
            avgDailyRainfall: m.avgDailyRainfall,
          };
        }
      );
    } else {
      return [];
    }
  };

  return <TableListView selectedState={selectedState} getData={getData} />;
};
