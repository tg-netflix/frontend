import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GridContainer } from "../../components/grid-layout/GridLayout.styled";
import MovieCard from "./MovieCard";
import CallSmallModal from "./CallSmallModal";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
// import { openModal, closeModal } from "../../reducers/modalReducer";
// import CallBigModal from "../Modal/CallBigModal";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { Card } from "./MovieCard.styled";
// import { Card } from "../movie-card/MovieCard.styled";
// import { getMovies, getBrowse } from "../../reducers/fetchReducer";
// import { addToList } from "../../reducers/likedReducer";

export default function GridLayout({ genre, setGenre, movie, categories }) {
  const { moviegenre } = useParams();
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState(false);
  const [dataset, setDataset] = useState();
  //   const [movieID, setMovieID] = useState();
  const dispatch = useDispatch();
  //   const globalModalState = useSelector((state) => state.modal.modalState);
  //   const movieDetails = useSelector((state) => state.netflix.movies);
  //   const [browseMovieID, setBrowseMovieID] = useSearchParams();
  //   const categoriesState = useSelector((state) => state.netflix.browse);

  //END STATE

  //check if linked to a direct movie
  //   const getMovieID = browseMovieID.get("movieID");

  //   useEffect(() => {
  //     if (getMovieID) dispatch(openModal({ modalState: true, coords }));
  //   }, []);

  //open modal if linked to movieID
  //   useEffect(() => {
  //     if (getMovieID) dispatch(openModal({ modalState: true, coords }));
  //   }, []);

  //add evenlistener for small modal
  useEffect(() => {
    const films = document.querySelectorAll("#movie");
    films.forEach((film) => {
      film.addEventListener("mouseenter", (e) => {
        if (e.target.getAttribute("id")) {
          setDataset(film.dataset);
          setIsHovering(true);
          setCoords(e.target.getBoundingClientRect());
        }
      });
    });

    window.addEventListener("click", (e) => {
      e.stopPropagation();
      setIsHovering(false);
    });
  }, []);

  const MessageCard = styled.div`
    color: white;
    width: 100%;
    height: 100%;
    border: 1px solid white;
    border-radius: 5px;
    font-size: 1.5rem;
    display: flex;
    padding: 10px;
    flex-direction: column;
    margin: 7px;

    .person-name {
      align-self: end;
      justify-self: end;
    }
  `;

  const people = [
    {
      backdrop_path:
        "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403",
      id: 985939,
      title: "Lex",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      backdrop_path:
        "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403",
      id: 985939,
      title: "Sander",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      backdrop_path:
        "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403",
      id: 718930,
      title: "Nathaniel",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      backdrop_path:
        "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403",
      id: 718930,
      title: "Hiu-Chee",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      backdrop_path:
        "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403",
      id: 718930,
      title: "Szymon",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      backdrop_path:
        "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403",
      id: 718930,
      title: "Luisa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        backdrop_path:
          "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403",
        id: 718930,
        title: "Joost",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    {
      backdrop_path:
        "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403",
      id: 718930,
      title: "Bart",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        backdrop_path:
          "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403",
        id: 718930,
        title: "Alex",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    {
      backdrop_path:
        "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403",
      id: 718930,
      title: "Marko",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      backdrop_path:
        "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403",
      id: 718930,
      title: "Marijana",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      backdrop_path:
        "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403",
      id: 718930,
      title: "Esther",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  const Jens = [
    {
      backdrop_path:
        "https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG",
      id: 985939,
      title: "Lex",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      backdrop_path:
        "https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG",
      id: 985939,
      title: "Sander",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      backdrop_path:
        "https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG",
      id: 985939,
      title: "Nathaniel",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      backdrop_path:
        "https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG",
      id: 985939,
      title: "Hiu-Chee",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      backdrop_path:
        "https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG",
      id: 985939,
      title: "Szymon",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      backdrop_path:
        "https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG",
      id: 985939,
      title: "Luisa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        backdrop_path:
          "https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG",
        id: 985939,
        title: "Joost",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    {
      backdrop_path:
        "https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG",
      id: 985939,
      title: "Bart",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        backdrop_path:
          "https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG",
        id: 985939,
        title: "Alex",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    {
      backdrop_path:
        "https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG",
      id: 985939,
      title: "Marko",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      backdrop_path:
        "https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG",
      id: 985939,
      title: "Marijana",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
      {
        backdrop_path:
          "https://www.al.com/resizer/KsZaj46Thx9ARTCiYaMEfX6kHiw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NSDL77J3KJFZXCK3MFWAV7HMUE.JPG",
        id: 985939,
        title: "Esther",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      }
  ];

  return (
    <>
    <div className="padding-container">
      {isHovering && (
        <CallSmallModal
          hover={isHovering}
          setIsHovering={setIsHovering}
          data={{ coords: coords, dataset: dataset }}
        />
      )}
      <h1 style={{ color: "white", fontSize: "5rem", textAlign: "center" }}>
        Our Team
      </h1>
      <GridContainer>
        {people.map((person, index) => {
          return <MovieCard key={index} person={person} />;
        })}
      </GridContainer>
      <h1 style={{ color: "white", fontSize: "5rem", textAlign: "center" }}>
        Jens
      </h1>
      <GridContainer>
        {Jens.map((movie, index) => {
          return (
            <MessageCard>
              <p>{movie.description}</p>
              <p className="person-name">- {movie.title}</p>
            </MessageCard>
          );
        })}
      </GridContainer>
      </div>
    </>
  );
}
