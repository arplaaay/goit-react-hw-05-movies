import styled from 'styled-components';

export const ActorsTitle = styled.h3`
  text-align: center;
`;

export const ActorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;

export const Actor = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 100px) / 6);
  margin: 5px;

  -webkit-box-shadow: 0px 0px 15px 5px #9d0ceb;
  box-shadow: 0px 0px 15px 5px #9d0ceb;
`;

export const Photo = styled.img`
  width: 100%;
  flex-grow: 1;
`;

export const ActorInfo = styled.div`
  padding: 8px;
`;

export const InfoTitle = styled.h4`
  /* font-style: 700; */
`;
