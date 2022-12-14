import styled from 'styled-components';

export const PlayerStyles = styled.div`
  .banner-container {
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    width: 100%;
    aspect-ratio: 16 / 9;
    display: flex;
    align-items: center;
    justify-content: center;

    .bigmodalbanner {
      position: absolute;
      color: #fff;
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-size: cover;
      background-position: center center;
      // width: ${(props) => (props.modal.modalState ? '61vw' : '140vw')};
    }

    // ANIMATIONS AT START
    .banner-fade-out-start {
      animation: fadeOut 0.25s ease-out 0.5s forwards;
    }

    .title-shrink-start {
      animation: shrink 0.5s ease-in-out 5s forwards;
    }

    .desc-fade-out-start {
      animation: fadeOut 0.25s ease-out 5s forwards;
    }

    // ANIMATION AT END
    .banner-fade-in-end {
      animation: fadeIn ease-out 0.1s forwards;
    }

    .title-grow-end {
      animation: grow ease-in-out 1.5s forwards;
    }
    .desc-fade-in-end {
      animation: fadeIn ease-in 1.5s;
    }

    .overlay {
      /* width: ${(props) => (props.modal.modalState ? '61vw' : '100vw')}; */
      width: 90%;
      height: 70%;
      position: absolute;
      display: flex;
      justify-content: space-between;
      // text-align: left !important;
      align-items: flex-end;
      left: 50px;
      bottom: 50px;

     @media (max-width: 1100px) {
      width: 80%;
     }
    }

    .banner-contents {
      /* position: relative; */
      color: #fff;
      top: 150px;
      left: 10px;
      /* padding-top: 140px; */
    }

    .bigmodalbanner-title {
      font-size: 4rem;
      font-weight: 800;
      padding-bottom: 0.3rem;
      max-width: 500px;
      text-align: left;
    }

    @keyframes shrink {
      from {
        transform: scale(1);
      }
      to {
        transform: translate(-15%, 50%) scale(0.65);
      }
    }
    @keyframes grow {
      from {
        transform: translate(-15%, 50%) scale(0.65);
      }
      to {
        trasform: scale(1);
      }
    }

    .bigmodalbanner-description {
      width: 35rem;
      height: 5.438rem;
      line-height: 1.3;
      padding-top: 1rem;
      font-size: 1.44rem;
      text-shadow: rgba(0, 0, 0 0.45) 0.125rem 0.125rem 0.25rem;
      text-align: left;
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .button-container {
      width: 75%;
      height: 72px;
      display: flex;
      font-size: 14.4px;
      line-height: 12.672px;
      margin: 28.8px 0px 0px;
    }
    .play-button-container {
      align-items: center;
      color: rgba(255, 255, 255, 0.9);
      display: flex;
      font-size: 14.4px;
      justify-content: center;
      line-height: 12.672px;
    }
    .play-button {
      width: 150px;
      height: 45px;
      align-items: center;
      background-color: rgba(255, 255, 255, 0.75);
      border: 0;
      border-radius: 4px;
      display: flex;
      font-size: 14.4px;
      justify-content: center;
      line-height: 12.672px;
      margin: 40px 14.4px 14.4px 0px;
      padding: 11.52px 34.56px 11.52px 28.8px;
      text-align: center;
      cursor: pointer;
      z-index: 2;
    }
    .play-button:hover {
      background-color: rgba(200, 200, 200, 0.75);
    }

    .Hawkins-icon {
      width: 25px;
      height: 25px;
      fill: white;
      font-size: 19.44px;
      line-height: 0px;
      text-align: center;
    }

    .text-play-button {
      width: 95px;
      height: 35px;
      font-size: 23.04px;
      font-weight: 700;
      line-height: 34.56px;
      text-align: center;
    }

    .side-button-container {
      justify-content: space-between;
      width: 40px;
      height: 50px;
      color: rgba(255, 255, 255, 1);
      display: flex;
      font-size: 14.4px;
      line-height: 17.28px;
    }

    .side-button {
      position: absolute;
      width: 50px;
      height: 50px;
      align-items: center;
      background-color: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.7);
      border-radius: 50%;
      border-style: solid;
      border-width: 1px;
      color: rgba(255, 255, 255, 1);
      display: flex;
      font-size: 19.44px;
      justify-content: center;
      line-height: 23.328px;
      padding: 11.52px;
      cursor: pointer;
      text-align: center;
      z-index: 2;
    }

    .side-button:hover {
      background-color: rgba(255, 255, 255, 0.25);
    }

    .side-button:focus {
      padding: 10px;
      border: 3px solid;
    }

    .banner-fadeBottom {
      position: absolute;
      background-image: linear-gradient(0deg, #181818, 30%, transparent 100%);
      height: 13vw;
      width: 100%;
      bottom: 0;
    }

    iframe {
      height: 100vw;
      width: ${(props) => (props.modal.modalState ? '70vw' : '140vw')};
      align-self: center;
      @media (max-width: 1100px) {
        width: 100vw;
      }
    }

    /* @media only screen and (max-width: 800px) {
      .banner .overlay iframe {
        max-height: 30vh;
      }

      .banner-title {
        font-size: 2.5rem;
        font-weight: 640;
        padding-bottom: 0.3rem;
        max-width: 400px;
      }

      .banner-description {
        width: 35rem;
        height: 4.24rem;
        padding-top: 1rem;
        font-size: 1.2rem;
      }
      .play-button-container {
        padding-top: 0;
        margin-top: 0;
      }

      .play-button {
        width: 166px;
        height: 45px;
        font-size: 11.5px;
        line-height: 12.672px;
        margin: 0px 14.4px 14.4px 0px;
        padding: 11.52px 34.56px 11.52px 28.8px;
        text-align: center;
        cursor: pointer;
      }

      .meer-info-button {
        width: 230px;
        height: 45px;
        align-items: center;
        background-color: rgba(109, 109, 110, 0.4);
        border: 0;
        border-radius: 4px;
        color: rgba(255, 255, 255, 1);
        display: flex;
        font-size: 11.5px;
        justify-content: center;
        line-height: 12.672px;
        margin: 6px 14.4px 14.4px 0px;
        padding: 11.52px 34.56px 11.52px 28.8px;
        text-align: center;
        cursor: pointer;
      }
      .meer-info-button:hover {
        background-color: rgba(109, 109, 110, 0.2);
      }

      .side-button-container {
        justify-content: space-between;
        width: 175px;
        height: 45px;
        color: rgba(255, 255, 255, 1);
        display: flex;
        font-size: 15px;
        line-height: 17px;
      }

      .side-button {
        width: 40px;
        height: 40px;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.7);
        border-radius: 50%;
        border-style: solid;
        border-width: 0.063rem;
        color: rgba(255, 255, 255, 1);
        display: flex;
        font-size: 1.215rem;
        justify-content: center;
        line-height: 1.458rem;
        padding: 0.72rem;
        cursor: pointer;
        text-align: center;
      }

      .side-button:hover {
        background-color: rgba(255, 255, 255, 0.25);
      }

      .side-button:focus {
        padding: 10px;
        border: 2px solid;
      }

      .maturity-rating {
        width: 110px;
        height: 45px;
        align-items: center;
        background-color: rgba(51, 51, 51, 0.6);
        color: rgba(255, 255, 255, 1);
        display: flex;
        font-size: 1.32rem;
        line-height: 1.584rem;
        border-left: 5px solid rgba(255, 255, 255, 0.75);
        padding: 0.6rem 4.2rem 0.6rem 0.96rem;
      }
    } */

    @media only screen and (max-width: 644px) {
      display: none;
      .banner-fadeBottom {
        display: none;
      }
    }

    @media only screen and (max-width: 400px) {
      .banner .overlay iframe {
        max-height: 30vh;
      }

      .banner-title {
        font-size: 2.5rem;
        font-weight: 640;
        padding-bottom: 0.3rem;
        max-width: 400px;
      }

      .banner-description {
        width: 35rem;
        height: 4.24rem;
        padding-top: 1rem;
        font-size: 1.2rem;
      }
      .play-button-container {
        padding-top: 0;
        margin-top: 0;
      }

      .play-button {
        width: 166px;
        height: 45px;
        font-size: 11.5px;
        line-height: 12.672px;
        margin: 0px 14.4px 14.4px 0px;
        padding: 11.52px 34.56px 11.52px 28.8px;
        text-align: center;
        cursor: pointer;
      }

      .meer-info-button {
        width: 230px;
        height: 45px;
        align-items: center;
        background-color: rgba(109, 109, 110, 0.4);
        border: 0;
        border-radius: 4px;
        color: rgba(255, 255, 255, 1);
        display: flex;
        font-size: 11.5px;
        justify-content: center;
        line-height: 12.672px;
        margin: 0px 14.4px 14.4px 0px;
        padding: 11.52px 34.56px 11.52px 28.8px;
        text-align: center;
        cursor: pointer;
      }
      .meer-info-button:hover {
        background-color: rgba(109, 109, 110, 0.2);
      }

      .side-button-container {
        justify-content: flex-end;
        align-items: center;
        width: 12.188rem;
        height: 2.875rem;
        color: rgba(255, 255, 255, 1);
        display: flex;
        font-size: 0.9rem;
        line-height: 1.08rem;
      }

      .side-button {
        width: 2.5rem;
        height: 2.5rem;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.7);
        border-radius: 50%;
        border-style: solid;
        border-width: 0.063rem;
        color: rgba(255, 255, 255, 1);
        display: flex;
        font-size: 1.215rem;
        justify-content: center;
        line-height: 1.458rem;
        padding: 0.72rem;
        cursor: pointer;
        text-align: center;
      }

      .side-button:hover {
        background-color: rgba(255, 255, 255, 0.25);
      }

      .side-button:focus {
        padding: 0.625rem;
        border: 0.125rem solid;
      }

      .maturity-rating {
        width: 8rem;
        height: 2.875rem;
        align-items: center;
        background-color: rgba(51, 51, 51, 0.6);
        color: rgba(255, 255, 255, 1);
        display: flex;
        font-size: 1.32rem;
        line-height: 1.584rem;
        border-left: 5px solid rgba(255, 255, 255, 0.75);
        padding: 0.6rem 4.2rem 0.6rem 0.96rem;
      }
    }
  }
`;
