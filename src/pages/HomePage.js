import { Container } from 'reactstrap';
import DisplayList from '../features/display/DisplayList';
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <Container>
      <DisplayList />
    </Container>
  )
};

export default HomePage