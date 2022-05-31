import { HeaderView } from './HeaderView';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { homeSlice } from '../../redux/store';
import { fetchStateImage } from '../../modules/Home/homeService';
const HeaderController = ({handleToggleSidebar}:any) => {
  const homeState = useAppSelector(homeSlice.state);
  const dispatch = useAppDispatch();

  const filterItems = (inputValue: any) => {
    return homeState.states.filter((i:any) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = (inputValue: any) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterItems(inputValue));
      }, 10);
    });

  const handleChange = (e: any) => {
    if (e) {
      if (e.weather === false) {
        //error
      } else {
        if (Object.values(e.weather).length === 0) {
          let index = homeState.states.indexOf(e);
          fetchStateImage(
            dispatch,
            homeSlice.actions.updateStatesProp,
            e,
            e.name.split(' G')[0],
            homeState.country.country_code2,
            index
          );
        }
        dispatch(homeSlice.actions.updateSelectedStateProp(e));
      }
    } else {
      dispatch(homeSlice.actions.updateSelectedStateProp({}));
    }
  };

  return (
    <HeaderView
      promiseOptions={promiseOptions}
      homeState={homeState}
      handleChange={handleChange}
      handleToggleSidebar={handleToggleSidebar}
    />
  );
};

export default HeaderController;
