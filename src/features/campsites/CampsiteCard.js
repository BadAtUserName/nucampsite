import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

const CampsiteCard = ({ campsite }) => {
  const {id, image, name, description} = campsite;
  //const link = id.toString();
  return (
    <Link to={`${id}`}>
      <Card>
        <CardImg 
          width='100%'
          src={image}
          alt={name}/>
        <CardImgOverlay>
          <CardTitle>{name}</CardTitle>
          <CardText>{description}</CardText>
        </CardImgOverlay>
      </Card>
    </Link>
  );
}

export default CampsiteCard