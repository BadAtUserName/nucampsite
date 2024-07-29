import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import {useState, useEffect} from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedDisplayCard = ({item}) => { 
  const {image, name, description} = item; //desctructer from the item object 
  const [toggle, setToggle] = useState(false);
  
  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
    config: { duration: 500 }
});

  useEffect(() => {
    setToggle(true);
  }, [])//uses side effect to render, set to empty array so it is not constantly rendering
  
  return (
    <animated.div style={animatedStyle}>
    <Card>
      <CardImg src={image} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
    </animated.div>
  );
};

export default AnimatedDisplayCard;

