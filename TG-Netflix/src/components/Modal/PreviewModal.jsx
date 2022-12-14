import React, { useRef } from 'react';
import {
  VideoPlayer,
  PreviewModalContainer,
  ThumbnailContainer,
  PreviewPlay,
  PreviewDuration,
  PreviewRating,
  PreviewReleaseYear,
  PreviewAddToList,
  PreviewMetaData,
  PreviewSummary,
  Thumbnail,
  Title,
  InfoContainer,
  Rating,
} from './PreviewModal.style';
import logo from '../../assets/movie-card-images/n_logo.ico';
import { ReleaseYear } from './CallBigModal.styled';

function PreviewModal(data) {
  const bg = 'https://image.tmdb.org/t/p/original' + data.movie.backdrop_path;

  const logoArray = [logo, null];

  function showLogo(logoArray) {
    return logoArray[/[6]/.test(data.movie.id) ? 0 : 1];
  }

  let ageCertificate = data?.movie.age_certificate;
  // Als age certificate niet bestaat dan is het een lege string.
  // Via onderstaande check wordt van de lege string "NR" gemaakt.
  if (!ageCertificate) {
    ageCertificate = 'NR';
    // Als age certificate de letters PG- bevat, dan worden deze na onderstaande check eraf gehaald
  } else if (ageCertificate.includes('PG-')) {
    ageCertificate = ageCertificate.slice(3);
  }

  return (
    <PreviewModalContainer>
      <PreviewPlay />
      {/* <VideoPlayer muted src={Trailer} type="video/webm" ref={modalRefVideo} /> */}
      <ThumbnailContainer>
        <Thumbnail bg={bg} />
        <PreviewDuration>
          {' '}
          {Math.floor(data.movie.runtime / 60)}h {data.movie.runtime % 60}m
        </PreviewDuration>
        <Title>{data.movie.title}</Title>
        <img src={showLogo(logoArray)} />
      </ThumbnailContainer>
      <PreviewMetaData>
        <InfoContainer>
          <div>
            <Rating>{ageCertificate}</Rating>
            <PreviewReleaseYear>
              {data.movie.release_date.slice(0, 4)}
            </PreviewReleaseYear>
          </div>
          <PreviewAddToList />
        </InfoContainer>
        <PreviewReleaseYear>{data.movie.release_year}</PreviewReleaseYear>

        <PreviewSummary>{data.movie.overview}</PreviewSummary>
      </PreviewMetaData>
    </PreviewModalContainer>
  );
}

export default PreviewModal;
