import { useEffect, useMemo, useRef } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { debounce } from 'lodash';
import { SearchIcon } from './Searchbar.styled';
import * as S from './Searchbar.styled';

export default function Searchbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();
  const searchQuery = search.get('q');
  const ref = useRef(null);

  useEffect(() => {
    if (!location.pathname.includes('/search') && searchQuery) {
      navigate(`/search?q=${searchQuery}`);
    } 
    else if (location.pathname.includes('/search') && !searchQuery) {
      navigate('/browse');
    }
  }, [searchQuery]);

  function handleChange(e) {
    setSearch({ q: e.target.value });
  }

  const debouncedHandleChange = useMemo(
    () => debounce(handleChange, 500),
    [handleChange]
  );

  useEffect(() => {
    return () => {
      debouncedHandleChange.cancel();
    };
  }, [debouncedHandleChange]);

  function clearSearchInput() {
    ref.current.value = '';
  }

  return (
    <>
      <S.Form role="search">
        <button aria-label="Search">
          <SearchIcon alt="Search icon" />
        </button>
        <input
          ref={ref}
          type="search"
          onChange={debouncedHandleChange}
          onBlur={clearSearchInput}
          placeholder="Enter film title.."
        />
      </S.Form>
    </>
  );
}
