import './Header.scss';
import AsyncSelect from 'react-select/async';
import { selectStyle } from '../../styles/selectStyle';
import { local } from '../../lang/local';
import { CgMenuRight } from 'react-icons/cg';
import { getDefaultItem } from '../../utils/get-default-item';
import { Language } from './Language';
export const HeaderView = ({
  homeState,
  handleChange,
  promiseOptions,
  handleToggleSidebar,
}: any) => {
  return (
    <section className='home-section'>
      <div className='home-header'>
        <div
          className='container flex'
          style={{ justifyContent: 'space-between' }}
        >
          <div className='flex alignItem'>
            <Language />
          </div>
          <div className='search-wrapper flex alignItem'>
            <AsyncSelect
              isSearchable
              defaultOptions={homeState.states}
              cacheOptions
              loadOptions={promiseOptions}
              styles={selectStyle}
              onChange={handleChange}
              value={getDefaultItem(
                homeState.selectedState.name,
                homeState.states,
                null
              )}
              key={homeState.selectedState}
              placeholder='Search'
            />
            <CgMenuRight className='icon' onClick={handleToggleSidebar} />
          </div>
        </div>
      </div>
    </section>
  );
};
