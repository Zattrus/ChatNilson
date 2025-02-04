import { Outlet } from 'react-router-dom';
import { Container } from './HomeLayout.style';

export default function HomeLayoutView() {

  return (
    <Container>
      <Outlet />
    </Container>
  )
}