
import {Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const CampsiteDetail = ({ campsite }) => {
//why is the below const indented twice rather than once? 
    const { image, name, desription} = campsite; //these properties come from the campsite array, that is how we know what is in them to destructure
      return (
        <Col md='12' className='m-4'>
          <Card>
            <CardImg top src={image} alt={name} />
            <CardBody>
              <CardText>{desription}</CardText>
            </CardBody>
          </Card>
        </Col>
      )
}

export default CampsiteDetail;