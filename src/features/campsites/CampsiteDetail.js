
import {Card, CardImg, CardText, CardBody, Col } from 'reactstrap';


const CampsiteDetail = ({ campsite }) => {
//why is the below const indented twice rather than once? 
    const { image, name, description} = campsite; //these properties come from the campsite array, that is how we know what is in them to destructure
      return (
        <Col md='5' className='m-1'>
          <Card>
            <CardImg top src={image} alt={name} />
            <CardBody>
              <CardText>{description}</CardText>
            </CardBody>
          </Card>
        </Col>
      )
}

export default CampsiteDetail;