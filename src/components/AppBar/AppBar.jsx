import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { AppHeader } from './AppBar.styled';

const AppBar = () => {
  return (
    <>
      <AppHeader>
        <Navigation />
      </AppHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppBar;
