import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';
import Error from '../components/Error';
import Loading from '../components/Loading';

const CampsiteDetailPage = () => {
  const { campsiteId } = useParams(); //destruct var campsiteID from useParams function the url parameter will be aval as 1st property
  const campsite = useSelector(selectCampsiteById(campsiteId));
  console.log('campsite:', campsite);

  const isLoading = useSelector((state) => state.campsites.isLoading);
  const errMsg = useSelector((state) => state.campsites.errMsg);
  let content = null;

  if (isLoading) {
    content = <Loading />;
} else if (errMsg) {
    content = <Error errMsg={errMsg} />;
} else {
    content = (
        <>
            <CampsiteDetail campsite={campsite} />
            <CommentsList campsiteId={campsiteId} />
        </>
    );
}
  return (
    <Container>
      {campsite && <SubHeader current={campsite.name} detail={true} />} {/* Conditional rendering */}
        <Row>
          {content}
            <CampsiteDetail campsite={campsite} />
            <CommentsList campsiteId={campsiteId} />
        </Row>
    </Container>
);
}

export default CampsiteDetailPage