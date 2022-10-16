import { StyledLink } from './Navigation.styles';

export const Navigation = () => {
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </nav>
  );
};
