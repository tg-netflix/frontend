import styled from "styled-components";
import { AiFillCloseCircle, AiOutlineDown } from "react-icons/ai";
import { BsFillPlayFill, BsHandThumbsUp, BsPlusLg } from "react-icons/bs";
import { TbLayersDifference, TbVolume3 } from "react-icons/tb";

export const SmallModalContainer = styled.div`
  position: absolute;
  left: ${(props) => props.coords.left + 'px'};
  top: ${(props) => props.coords.top + window.scrollY + 'px'};
  width: ${(props) => props.coords.width + 'px'};
  height: ${(props) => props.coords.height + 'px'};
  
`;

//START SMALLMODAL
export const SmallModalTop = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;



  span {
    position: absolute;
    width: 100%;
    padding: 0 10px;
    bottom: 7px;

    font-family: manrope;
    line-height: 0.9;
    font-size: 1.6rem;
    font-weight: 600;
    color: white;
    font-weight: 550;
    line-height: 1;
    text-shadow: 1px 1px 1px rgb(20, 20, 20);

    @media (min-width: 600px) {
      font-size: 1.4rem;
    }
    @media (min-width: 700px) {
      font-size: 1.5rem;
    }
    @media (min-width: 800px) {
      font-size: 1.6rem;
    }
    @media (min-width: 900px) {
      font-size: 1.7rem;
    }
    @media (min-width: 1000px) {
      font-size: 1.8rem;
    }
    @media (min-width: 1100px) {
      font-size: 2rem;
    }
  }

  img {
    position: absolute;
    top: 8px;
    left: 3px;
    width: 1.3vw;
  }
`;
export const SmallModalBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #181818;
  width: 100%;
  height: 0;
  opacity: 0;
  padding: 1.5rem 1rem;
  transition: opacity ease-in-out 150ms, height 100ms ease-in-out;
  transition-delay: 0ms;
  font-weight: bold;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const SmallModal = styled.div`
  position: absolute;
  height: inherit;
  transition: scale ease-in-out 150ms, opacity 150ms ease-in-out;
  transition-delay: 1300ms;
  transform-origin: ${(props) =>
    props.coords.left < props.coords.width
      ? "left center"
      : props.sWidth - props.coords.right < props.coords.width
      ? "right center"
      : "center center"};
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  background-color: #181818;

  // background-image: url(${(props) => props.bg});
  background-size: cover;
  z-index: 2;

  animation: out 500ms ease-in-out;
  &:hover {
    animation-duration: 1300ms;
    animation: in 1300ms ease-in-out;
    animation-fill-mode: forwards;
    ${SmallModalBottom} {
      transition-delay: 1300ms;
      border-radius: 0 0 0.5rem 0.5rem;
      opacity: 1;
      height: fit-content;
      /* margin-top: -1rem; */
    }
  }
  @keyframes in {
    0% {
      scale: 1;
    }
    90% {
      scale: 1;
    }
    100% {
      scale: 1.5;
    }
  }
  @keyframes out {
    0% {
      scale: 1.5;
    }
    100% {
      scale: 1;
    }
  }
`;

//END SMALLMODAL

//START VIDEOPLAYER (will be replaced by videomodal)
export const VideoPlayer = styled.video`
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  // display: none;
`;


export const YouTubeWrapper=styled.div`
  
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  overflow: hidden;
  z-index: 1;
  height: inherit;
  width: inherit;
`
export const VideoControlsContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: -12rem;
  z-index: 3;
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  background: linear-gradient(0deg, #181818, transparent 50%);
`;
export const VideoTitle = styled.div`
  height: 8rem;
  background-repeat: no-repeat;
  background-size: contain;
`;
export const VideoControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* padding: 0.5rem 1rem; */
  gap: 0.3rem;
`;

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27px;
  height: 27px;
  border: 2px solid #b6b6b6;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border-color: white;
  }
`;

export const ArrowDown = styled(AiOutlineDown)`
  color: #cccccc;
  font-size: 15px;
  font-weight: bold;

  &:hover {
    color: white;
    border-color: white;
  }
`;
export const VideoPlay = styled.div`
  display: flex;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.28rem;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 40px;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 0.5rem;
  &:hover {
    color: #fff;
  }
`;

export const CloseButton = styled.div``;
export const CloseCircle = styled(AiFillCloseCircle)`
  position: absolute;
  right: 0;
  border-radius: 50%;
  z-index: 2;
  margin-top: 1.5rem;
  margin-right: 1.5rem;
  background-color: #181818;
  font-size: 4rem;
  &:hover {
    background-color: white;
  }
`;
// export const PlayButton = styled(BsFillPlayFill)`
//   font-size: 4rem;
// `;

export const PlusCircle = styled(BsPlusLg)`
  border: 2px solid #b6b6b6;
  border-radius: 50%;
  padding: 0.5rem;
  color: #cccccc;
  font-size: 27px;
  cursor: pointer;

  &:hover {
    color: white;
    border-color: white;
  }
`;
// export const ThumbsUp = styled(BsHandThumbsUp)`
//   border: 3px solid #ccc;
//   border-radius: 50%;
//   padding: 0.5rem;
//   color: #cccccc;
//   font-size: 3.5rem;
//   margin-left: 1rem;
//   &:hover {
//     color: white;
//     border-color: white;
//   }
// `;
// export const RateIcons = styled.div``;
// export const VolumeIcon = styled(TbVolume3)`
//   border: 3px solid #ccc;
//   border-radius: 50%;
//   font-size: 4rem;
//   color: #cccccc;
//   margin-left: auto;
//   margin-right: 1.5rem;
//   &:hover {
//     color: white;
//     border-color: white;
//   }
// `;
export const InfoCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  color: #fff;
  font-size: 1rem; // 2 columns

  @media (min-width: 450px){
    font-size: 1.2rem;
  }
`;

export const MatchPerc = styled.div`
  color: #46d369;
`;
export const AgeRes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 2rem;
  height: 2rem;
  padding: 0.6rem;
  line-height: 1.3rem;

  font-size: 0.9rem;
  background-color: black;
  border: 2px solid white;
  border-radius: 50%;
`;
export const Runtime = styled.div``;

export const KeywordsContainer = styled.div`
  /* padding: 0.5rem 1rem; */
  color: white;
`;

//END VIDEOPLAYER
