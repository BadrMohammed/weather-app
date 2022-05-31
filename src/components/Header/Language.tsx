import { useEffect, useState } from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { getLanguage, local, toogleLanguage } from '../../lang/local';

export const Language = () => {
  const [lang, setLang] = useState<string>('');

  useEffect(() => {
    if (!lang) {
      if (getLanguage() === 'ar') {
        setLang('arabic');
      } else {
        setLang('english');
      }
    }
  }, []);
  const handleLang = (key: string) => {
    toogleLanguage(key);
    if (key === 'en') {
      setLang('english');
    } else {
      setLang('arabic');
    }
  };
  return (
    <UncontrolledDropdown direction='down' className='dropdown_header'>
      <DropdownToggle  caret className='button-toggle' color='light'>
        {local[lang]}
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem
          className='text-center'
          active={getLanguage() === 'en' ? true : false}
          onClick={() =>getLanguage() === 'ar'  ?handleLang('en'):null}
        >
          {local.english}
        </DropdownItem>
        <DropdownItem
          className='text-center mt-3'
          active={getLanguage() === 'ar' ? true : false}
          onClick={() =>getLanguage() === 'en'  ?handleLang('ar'):null}
        >
          {local.arabic}
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};
