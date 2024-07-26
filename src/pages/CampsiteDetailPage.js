import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';

const CampsiteDetailPage = () => {
  const { campsiteId } = useParams(); //destruct var campsiteID from useParams function the url parameter will be aval as 1st property
  const campsite = selectCampsiteById(campsiteId);
  return (
    <Container>
      <SubHeader current={campsite.name} detail={true} />
        <Row>
            <CampsiteDetail campsite={campsite} />
            <CommentsList campsiteId={campsiteId} />
        </Row>
    </Container>
);
}

export default CampsiteDetailPage