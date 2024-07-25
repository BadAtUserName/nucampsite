import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';

const CampsiteDetailPage = () => {
  const { campsiteId } = useParams(); //destruct var campsiteID from useParams function the url parameter will be aval as 1st property
  const campsite = selectCampsiteById(campsite);
  return (
    <Container>
      <Row>
        <CampsiteDetail campsite={campsite}/>
      </Row>
    </Container>
  );
}

export default CampsiteDetailPage