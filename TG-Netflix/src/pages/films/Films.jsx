import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../../reducers/modalReducer";

import LaneHandler from "../../components/lane/LaneHandler";
import Footer from "../../components/footer/footer";
import CallModal from "../../components/Modal/CallModal";
import CallBigModal from "../../components/Modal/CallBigModal";
import FilterMenu from "../../components/filterknop/FilterMenu";
import categoriesMock from "../../mock-data/browse_categories_banner.mock.json";
import GridLayout from "../../components/grid-layout/GridLayout";
import { useLocation } from "react-router-dom";

// props kunnen worden doorgegeven worden vanaf main om content te laden voordat
// bezoeker inlogt

export default function Films({ banner, categories, movie }) {
  //STATE
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState(false);
  const [dataset, setDataset] = useState();
  const [genre, setGenre] = useState("");
  const dispatch = useDispatch();
  const globalModalState = useSelector((state) => state.modal.modalState);
  //END STATE

  let movies = categoriesMock.categories;

  //add eventlistener for small modal
  useEffect(() => {
    const films = document.querySelectorAll("#movie");
    films.forEach((film) => {
      film.addEventListener("mouseenter", (e) => {
        if (e.target.getAttribute("id")) {
          setTimeout(function () {
            setDataset(film.dataset);
            setIsHovering(true);
            setCoords(e.target.getBoundingClientRect());
            dispatch(openModal({ modalState: false, coords: coords }));
          }, 500);
        }
      });
    });

    window.addEventListener("click", (e) => {
      e.stopPropagation();
      setIsHovering(false);
    });
  }, []);

  const openBigModal = () => {
    dispatch(openModal({ modalState: true, coords }));
  };

  if (genre != "") {
    // Hier straks de films van het gekozen genre fetchen wanneer we de echte data gebruiken?
    // If/else statement is tijdelijk omdat de genres niet in de mockdata staan
    if (movies.find((item) => item.name === `${genre}`)) {
      movies = movies.find((item) => item.name === `${genre}`);
    } else {
      movies = movies.find((item) => item.name === `Latest`);
    }
  }

  movies = movies.movies;

  let location = useLocation();

  // Om met een directe link naar een genrepagina te gaan & zodat de filter blijft bij refresh
  useEffect(() => {
    let path = window.location.href.slice(
      window.location.href.lastIndexOf("/")
    );

    if (path != "/films") {
      let genreName = path.slice(1);
      setGenre(genreName);
    } else {
      setGenre("");
    }
  }, [location]);

  return (
    <>
      <div className="members-container">
        <FilterMenu setGenre={setGenre} genre={genre} />
        {genre == "" ? (
          <>
            {isHovering && (
              <CallModal
                hover={isHovering}
                setIsHovering={setIsHovering}
                data={{ coords: coords, dataset: dataset, movie: movie }}
                onClick={openBigModal}
              />
            )}
            {globalModalState.modalState && <CallBigModal />}
            <LaneHandler categories={categories} movie={movie} />
          </>
        ) : (
          <GridLayout
            genre={genre}
            setGenre={setGenre}
            movies={movies}
            categories={categories}
            movie1={movie}
          />
        )}

        <Footer />
      </div>
    </>
  );
}
