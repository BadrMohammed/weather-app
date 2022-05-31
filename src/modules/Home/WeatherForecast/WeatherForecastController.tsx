import { useAppSelector } from '../../../redux/hooks';
import { homeSlice } from '../../../redux/store';
import { WeatherForecastView } from './WeatherForecastView';
export const WeatherForecastController = () => {
  const homeState=useAppSelector(homeSlice.state)
  const {selectedState}=homeState
  const getImage = () => {
    if (
      selectedState.weather &&
      Object.values(selectedState.weather.length > 0)
    ) {
      let image =
        selectedState.weather.data.current_condition[0].weatherIconUrl[0].value;
      image = image.split('//');
      return 'https://' + image[1];
    }
  };
  return <WeatherForecastView selectedState={homeState.selectedState} getImage={getImage} />;
};
