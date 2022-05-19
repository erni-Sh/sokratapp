/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { AppRoute } from '../../const';

import SearchDropdown from './search-dropdown';
import LoaderPoint from '../loader-point/loader-point';

function Search({visible, setVisible}) {
  const history = useHistory();

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    history.push(AppRoute.SEARCH_RESULT);
  };

  const [ isDropdownVisible, setDropdownVisible ] = useState(false);
  const [ isLoadingSearchResult, setLoadingSearchResult ] = useState(false);
  const [ searchResult, setSearchResult ] = useState([]);


  let typingTimer;
  const typing = (e) => {
    const val = e.target.value;
    clearTimeout(typingTimer);

    // когда печатаешь - все равно прилетает ответ - поправить(через useEffect?)
    if(val) {
      setLoadingSearchResult(true);
      typingTimer = setTimeout(() => {
        setDropdownVisible(true);
        // send on server request;
        console.log('send on server');
        // after response
        setLoadingSearchResult(false);
      }, 2000);
    } else {
      setLoadingSearchResult(false);
      setDropdownVisible(false);
    }
  };

  return (
    <div className={visible ? 'search' : 'search search--hidden'}>
      <form
        className='search__form'
        role='search'
        method='get'
        id='search__form-header'
        action='#'
        onSubmit={formSubmitHandler}
      >
        <label className='visually-hidden' htmlFor='search__input'>
          Поиск по курсам
        </label>
        <input
          className={`search__input${isLoadingSearchResult ? " search__input-loading" : ''}`}
          id='search__input'
          type='text'
          placeholder='Курсы и вакансии'
          name='s'
          onInput={typing}
        />
        <button
          className='search__submit-btn'
          type='submit'
          id='search__submit-btn'
        >
          Найти
        </button>

        {isLoadingSearchResult
          ? <div className="search__loader"><LoaderPoint /></div>
          : <button className="search__close-btn" type="button" id="search__close-btn" onClick={()=>setVisible(false)}></button>}
      </form>
      {isDropdownVisible &&
      <SearchDropdown />}
    </div>
  );
}

export default Search;

Search.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};

Search.defaultProps = {
  visible: false,
};
