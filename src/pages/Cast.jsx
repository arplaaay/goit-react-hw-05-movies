import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActorsFromMovie } from 'services/api';
import {
  ActorsTitle,
  Actor,
  ActorInfo,
  ActorsList,
  Photo,
  InfoTitle,
} from './Cast.styled';
import notFoundImg from '../images/notFoundImg.png';

export const Cast = () => {
  const [actorsList, setActorsList] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async function fetchActors() {
      try {
        const response = await getActorsFromMovie(movieId);
        setActorsList(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [movieId]);

  return (
    <>
      <ActorsTitle>Actors</ActorsTitle>
      <ActorsList>
        {actorsList &&
          actorsList.map(({ id, profile_path, name, character }) => (
            <Actor key={id}>
              <Photo
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/original${profile_path}`
                    : notFoundImg
                }
                alt={name}
              />
              <ActorInfo>
                <InfoTitle>Name:</InfoTitle>
                <span>{name}</span>
                <InfoTitle>Character:</InfoTitle>
                <span>{character}</span>
              </ActorInfo>
            </Actor>
          ))}
      </ActorsList>
    </>
  );
};
