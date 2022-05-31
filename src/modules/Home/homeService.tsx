import httpService from '../../infrastructure/services/http-service';
import { homeSlice } from '../../redux/store';

export const fetchCountry = async (dispatch: any) => {
  httpService
    .get(
      'https://api.ipgeolocation.io/ipgeo?apiKey=89d865f29f0c4203a966f4e09ef63d78'
    )
    .then(async (res) => {
      if (res.status === 200) {
        dispatch(homeSlice.actions.updateCountryProp(res.data));
        let countryIso = res.data.country_code2;
        let state = res.data.country_capital;
        let capital = {
          name: res.data.country_capital+' Governorate',
          photo: '',
          weather: {},
        };
        dispatch(homeSlice.actions.updateSelectedStateProp(capital));

        fetchStateImage(
          dispatch,
          homeSlice.actions.updateSelectedStateProp,
          capital,
          state,
          countryIso,
          null
        );

        fetchStates(res.data.country_name, dispatch);
      }
    })
    .catch(({ response }: any) => {
      //   setLoading(false);
    });
};

export const fetchStates = (country: string, dispatch: any) => {
  httpService
    .post('https://countriesnow.space/api/v0.1/countries/states', {
      country,
    })
    .then((res) => {
      if (res.status === 200) {
        let states = res.data.data.states;
        states.map((item: any) => {
          item.value = item.state_code;
          item.label = item.name;
          item.photo = '';
          item.weather = {};
          return item;
        });

        dispatch(homeSlice.actions.updateStatesProp(states));
      }
    })
    .catch(({ response }: any) => {
      //   setLoading(false);
    });
};

export const fetchStateImage = (
  dispatch: any,
  callback: any,
  param: any,
  state: any,
  countryIso: any,
  index: any
) => {
  let query = `?action=query&titles=Image:${state}.jpg&prop=imageinfo&iiprop=url&format=json&origin=*`;
  httpService
    .get(`https://en.wikipedia.org/w/api.php${query}`)
    .then((res: any) => {
      if (res.status === 200) {
        let newParam = Object.assign({}, param);
        if (res.data.query.pages['-1'].imageinfo) {
          newParam.photo = res.data.query.pages['-1'].imageinfo[0].url;
        } else {
          newParam.photo = false;
        }

        if (index === null) {
          dispatch(callback(newParam));
        } else {
          let entry = { item: newParam, index };
          dispatch(callback(entry));
          dispatch(homeSlice.actions.updateSelectedStateProp(newParam));
        }
        fetchStateWeather(
          dispatch,
          callback,
          newParam,
          state,
          countryIso,
          index
        );
      }
    })
    .catch(({ response }: any) => {
      //   setLoading(false);
    });
};

export const fetchStateWeather = (
  dispatch: any,
  callback: any,
  param: any,
  state: any,
  countryIso: any,
  index: any
) => {
  let query = `?q=${
    state + ',' + countryIso
  }&num_of_days=1&date=today&format=json&key=0a5a54bcef12422cac1212626222705&showmap=yes&showlocaltime=yes`;

  let url = `https://api.worldweatheronline.com/premium/v1/weather.ashx${query}`;
  httpService
    .get(url)
    .then((res) => {
      if (res.status === 200) {
        let newParam = Object.assign({}, param);
        newParam.weather = res.data;
        if (index === null) {
          dispatch(callback(newParam));
        } else {
          let entry = { item: newParam, index };
          dispatch(callback(entry));
          dispatch(homeSlice.actions.updateSelectedStateProp(newParam));
        }
      } else {
        debugger;
      }
    })
    .catch(({ response }: any) => {
      //   setLoading(false);
    });
};
