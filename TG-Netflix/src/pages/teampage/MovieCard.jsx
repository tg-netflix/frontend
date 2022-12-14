import { Card } from "./MovieCard.styled";
import React from "react";

export default function MovieCard({ person }) {
  const { backdrop_path, name, description, keywords } = person;

  return (
    <>
      <Card id="movie" data-backdrop={backdrop_path} data-keywords={keywords} data-description={description} data-name={name}>
        <img src={backdrop_path} alt={name} />
        <span>{name}</span>
      </Card>
    </>
  );
}
