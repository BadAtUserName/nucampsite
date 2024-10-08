import { Container } from 'reactstrap';
import DisplayList from '../features/display/DisplayList';
import SubHeader from '../components/SubHeader';
const HomePage = () => {
  return (
    // should there be a row in this? 
    <Container>
      <SubHeader current='Home' />
      <DisplayList />
    </Container>
  )
};

export default HomePage