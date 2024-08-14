
import { Col, Row } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsitesSlice';
import { useSelector } from 'react-redux';
import Error  from '../../components/Error';
import Loading from '../../components/Loading';

const CampsitesList = () => {
  const campsites = useSelector((state) => state.campsites.campsitesArray);
  //const campsites = useSelector((state) => state.campsites);
  //const campsites = useSelector(selectAllCampsites);//this needs to be changed as it is above
  console.log('campsites:', campsites)
  const isLoading = useSelector((state) =>  state.campsites.isLoading)
  const errMsg = useSelector((state) => state.campsites.errMsg)

  if (isLoading) {
    return(
      <Row>
        <Loading />
      </Row>
    );
  }

  if (errMsg) {
    return(
      <Row>
        <Error errMsg={errMsg} />
      </Row>
    )
  }
    return (
    <Row className='ms-auto'>
      {campsites.map((campsite) => 
        <Col 
          md='5' 
          className='m-4' 
          key={campsite.id}>
          <CampsiteCard campsite={campsite} />
        </Col>
      )}
    </Row>
  );
};

export default CampsitesList;