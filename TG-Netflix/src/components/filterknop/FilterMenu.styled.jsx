import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FilterWrapper = styled.section`
  position: sticky;
  top: ${(props) => (props.isScrolled ? "-2px" : "0")};
  height: 4.1rem;
  width: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--black);
  padding: 3rem 7rem 3rem 4.5rem;
  margin-top: 6.5rem;
  margin-bottom: 2rem;

  @media (max-width: 950px) {
    padding: 3rem 4.6rem 3rem 3.5rem;
    margin-bottom: 0;
  }
`;

export const FilterGenreWrapper = styled.div`
  position: relative;
`;

export const FilterOptionWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

export const FilterTitle = styled.h2`
  font-size: 3.8rem;
  color: #fff;
  margin-right: 15px;

  @media (max-width: 884px) {
    font-size: 2.2rem;
  }

  @media (max-width: 725px) {
    font-size: 1.8rem;
  }

  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

export const FilmsLink = styled(Link)`
  font-size: 1.8rem;
  color: grey;
  margin-right: 15px;
  cursor: pointer;
  text-decoration: none;

  &:after {
    content: ">";
    padding-left: 10px;
   font-size: 20px;
  }

`;

export const GenreTitle = styled(FilterTitle)`
line-height: 3.8rem;
cursor: default;
font-weight: 300;

@media (max-width: 884px) {
  line-height: 2.2rem;
}

@media (max-width: 725px) {
  line-height: 1.8rem;
}

@media (max-width: 400px) {
  line-height: 1.4rem;
}

&:first-letter {
  text-transform: capitalize;
}
`

export const FilterOptionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 30px;
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  border: 1px solid #fff;
  cursor: pointer;
  flex-grow: 1;
`;

export const FilterGenreButton = styled.button`
  background-color: #000;
  border: 1px solid hsla(0, 0%, 100%, 0.9);
  border-radius: 0;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 2.5rem;
  letter-spacing: 1px;
  padding-left: 10px;
  width: 120px;
  padding-right: 10px;
  position: relative;
  cursor: pointer;
  margin: 0 30px;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0);
    color: white;
  }
`;

export const FilterGenreSubMenu = styled.section`
  position: absolute;
  left: 30px;
  width: 250%;
  color: white;
  display: flex;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 1rem;
  gap: 4rem;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};

  @media (max-width: 650px) {
    width: 100%;
    flex-direction: column;
    gap: 0;
  }
`;

export const ButtonText = styled.span`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 2.5rem;
`;

export const ArrowIcon = styled.img`
  width: 15px;
`;

export const OptionIcon = styled.img`
  width: 15px;
  color: #fff;
`;
