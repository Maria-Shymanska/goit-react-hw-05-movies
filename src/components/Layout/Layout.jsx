import { Container } from './Layout.styled';
import Appbar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Container>
      <Appbar />

      <Outlet />
    </Container>
  );
}
